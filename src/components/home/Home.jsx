import React from "react";
import "./home.scss";
import banner from "../assets/banner.jpg";
import fertizer from "../assets/category/fertizer.png";
import Listic from "../assets/category/listic.png";
import pochva from "../assets/category/pochva.png";
import lopata from "../assets/category/lopata.png";
import product from "../assets/discountProduct.png";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const saleProducts = products
    .filter((product) => product.discont_price) // Фильтруем товары со скидкой
    .slice(0, 4); // Берем только 4 товара
  console.log(saleProducts);
  console.log(products.filter((product) => product.discont_price));

  const handleClick = (path) => {
    navigate(path);
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Отменяем стандартное поведение формы

    const formData = new FormData(e.target); // Собираем данные формы
    const data = Object.fromEntries(formData.entries()); // Преобразуем в объект

    try {
      const response = await fetch("http://localhost:3333/sale/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Ошибка при отправке");

      alert("Форма успешно отправлена!");
    } catch (error) {
      alert("Ошибка отправки");
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3333/products/all");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Ошибка загрузки товаров:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="Home">
      <section className="banner">
        <img src={banner} alt="banner" className="bannerImg" />
        <div className="bannerText">
          Amazing Discounts on Garden Products
          <button
            className="buttonCheck"
            onClick={() => handleClick("/products")}
          >
            Check out
          </button>
        </div>
      </section>

      <section className="containerCategories">
        <div className="category-header">
          <h3 className="category">Categories</h3>
          <div className="line-box">
            <hr className="line" />
            <button
              className="line-text"
              onClick={() => handleClick("/categories")}
            >
              All categories
            </button>
          </div>
        </div>

        <div className="ImgCategory">
          <div className="img-container">
            <img src={fertizer} alt="fertizer" className="img" />
            <p className="t">Fertilizer</p>
          </div>
          <div className="img-container">
            <img src={Listic} alt="listic" className="img" />
            <p className="t">Protective products and septic tanks</p>
          </div>
          <div className="img-container">
            <img src={pochva} alt="pochva" className="img" />
            <p className="t">Planting material</p>
          </div>
          <div className="img-container">
            <img src={lopata} alt="lopata" className="img" />
            <p className="t">Tools and equipment</p>
          </div>
        </div>
      </section>

      <section className="discount">
        <div className="discount-text">
          <p className="text">5% off on the first order</p>
        </div>
        <div className="discount-content">
          <div className="discount-image">
            <img
              src={product}
              alt="discountProduct"
              className="discountProduct"
            />
            <div className="discount-form">
              <form onSubmit={handleSubmit} method="POST" className="form">
                <input className="input" type="text" placeholder="Name" />
                <input
                  className="input"
                  type="tel"
                  placeholder="Phone number"
                />
                <input className="input" type="email" placeholder="Email" />
                <button type="submit">Get a discount</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="sale">
        <div className="sale-header">
          <h3 className="Sale">Sale</h3>
          <div className="line-box2">
            <hr className="line2" />
            <button
              className="line-text2"
              onClick={() => handleClick("/allsale")}
            >
              All sales
            </button>
          </div>
        </div>

        <div className="ImgSale">
          {saleProducts.length > 0 ? (
            saleProducts.map((product) => (
              <div key={product.id} className="sale-container">
                <img
                  src={`http://localhost:3333${product.image}`}
                  alt={product.title}
                  className="product-img"
                />
                <p>{product.title}</p>


                <div className="price">
              
                  <p className="discount-price">${product.price}</p>
                  <p className="price1">${product.discont_price}</p>
                  <div className="discount-badge">
                    -
                    {Math.round(
                      ((product.price - product.discont_price) /
                        product.price) *
                        100
                    )}
                    %
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Товары со скидкой не найдены</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
