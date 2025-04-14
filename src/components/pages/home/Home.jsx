import React from "react";
import "./home.scss";
import banner from "../../assets/banner.jpg";
import fertizer from "../../assets/category/fertizer.png";
import Listic from "../../assets/category/listic.png";
import pochva from "../../assets/category/pochva.png";
import lopata from "../../assets/category/lopata.png";
import product from "../../assets/discountProduct.png";
import axios from "axios";
import Container from "../../container/Container";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Функция для получения категорий с товарами
const fetchCategories = async () => {
  try {
    const response = await axios.get("http://localhost:3333/categories/all");
    const categories = response.data;

    const categoriesWithProducts = await Promise.all(
      categories.map(async (category) => {
        try {
          const categoryResponse = await axios.get(
            `http://localhost:3333/categories/${category.id}`
          );

          return { ...category, products: categoryResponse.data.data || [] };
        } catch (error) {
          console.error(
            `Error loading products for category${category.id}:`,
            error
          );
          return { ...category, products: [] };
        }
      })
    );

    return categoriesWithProducts;
  } catch (error) {
    console.error("Error loading data:", error);
    return [];
  }
};

// Функция для выбора товаров со скидкой
const getDiscountedProducts = (categories) => {
  const discountedProducts = [];

  categories.forEach((category) => {
    if (Array.isArray(category.products)) {
      const discountedProduct = category.products.find(
        (product) => product.discont_price !== null
      );

      if (discountedProduct) {
        discountedProducts.push(discountedProduct);
      }
    } else {
      console.warn(
        `Категория ${category.id} не содержит товаров или products не является массивом`
      );
    }
  });

  return discountedProducts.slice(0, 4);
};

export default function MainPages() {
  // const navigate = useNavigate();

  const [discountedProducts, setDiscountedProducts] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      // Получаем категории с товарами
      const categories = await fetchCategories();

      // Выбираем по одному товару со скидкой из каждой категории
      const products = getDiscountedProducts(categories);

      // Сохраняем выбранные товары
      setDiscountedProducts(products);
    };

    fetchData();
  }, []);

  const handleOrderClick = (e) => {
    e.preventDefault(); // Предотвращаем отправку формы
    setIsModalOpen(true);
  };

  // Закрытие модального окна
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="home">
      {/* Баннер */}
      <section className="home__banner">
        <img src={banner} alt="banner" className="home__banner-img" />
        <div className="home__banner-text">
          <p>
            Amazing Discounts <br />
            on Garden Products
          </p>
          <Link to="/allSale" className="home__banner-button">
            Check out
          </Link>
        </div>
      </section>
      <Container>
        {/* Категории */}
        <section className="home__categories">
          <div className="home__header">
            <h3 className="home__title">Categories</h3>
            <div className="home__navigation">
              <hr className="home__divider" />
              <Link to="/categories" className="home__back-button">
                All categories
              </Link>
            </div>
          </div>
          <div className="home__categories-grid">
            <div className="home__categories-item">
              <Link to="/categories/1" className="categories-item">
                <img
                  src={fertizer}
                  alt="Fertilizer"
                  className="home__categories-img"
                />
                <p className="home__categories-text">Fertilizer</p>
              </Link>
            </div>
            <div className="home__categories-item">
              <Link to="/categories/2" className="categories-item">
                <img
                  src={Listic}
                  alt="Protective products"
                  className="home__categories-img"
                />
                <p className="home__categories-text">
                  Protective products and septic tanks
                </p>
              </Link>
            </div>
            <div className="home__categories-item">
              <Link to="/categories/3" className="categories-item">
                <img
                  src={pochva}
                  alt="Planting material"
                  className="home__categories-img"
                />
                <p className="home__categories-text">Planting material</p>
              </Link>
            </div>
            <div className="home__categories-item">
              <Link to="/categories/4" className="categories-item">
                <img
                  src={lopata}
                  alt="Tools and equipment"
                  className="home__categories-img"
                />
                <p className="home__categories-text">Tools and equipment</p>
              </Link>
            </div>
          </div>
          <div className="home__navigation-back">
            <Link to="/categories" className="home__back-button">
              All categories
            </Link>
          </div>
        </section>

        {/* Скидка */}
        <section className="home__discount">
          <div className="home__discount-text">
            <p className="home__discount-title">5% off on the first order</p>
          </div>
          <div className="home__discount-content">
            <img
              src={product}
              alt="Discount Product"
              className="home__discount-img"
            />
            <form className="home__form">
              <input
                className="home__form-input"
                type="text"
                placeholder="Name"
              />
              <input
                className="home__form-input"
                type="tel"
                placeholder="Phone number"
              />
              <input
                className="home__form-input"
                type="email"
                placeholder="Email"
              />
              <button
                className="home__form-button"
                type="submit"
                onClick={handleOrderClick}
              >
                Get a discount
              </button>
            </form>
          </div>
        </section>

        {/* Распродажа */}
        <section className="home__sale">
          <div className="home__sale-header">
            <h3 className="home__sale-title">Sale</h3>
            <div className="home__sale-link-box">
              <hr className="home__sale-line" />
              <Link to="/allSale" className="home__sale-link">
                All sales
              </Link>
            </div>
          </div>
          <div className="home__sale-grid">
            {discountedProducts.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="home__sale-item"
              >
                <div className="home__sale-wrapper">
                  {product.discont_price && (
                    <div className="home__discount_badge">
                      -
                      {Math.round(
                        ((product.price - product.discont_price) /
                          product.price) *
                          100
                      )}
                      %
                    </div>
                  )}
                  <img
                    src={`http://localhost:3333${product.image}`}
                    alt={product.title}
                    className="home__sale-img"
                  />
                </div>
                <p className="home__sale-text">{product.title}</p>
                <div className="home__sale-price">
                  {product.discont_price ? (
                    <>
                      <span className="home__sale-price-new">
                        {product.discont_price}$
                      </span>
                      <span className="home__sale-price-old">
                        {product.price}$
                      </span>
                    </>
                  ) : (
                    <span className="home__price--regular">
                      {product.price}$
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <div className="home__navigation-box">
            <Link to="/categories" className="home__back-button">
              All sales
            </Link>
          </div>
        </section>
      </Container>
      {/* Затемнение фона */}
      {isModalOpen && <div className="overlay" onClick={closeModal}></div>}

      {/* Всплывающее окно */}
      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <h3>Congratulations! </h3>
          <p>Your discount has been successfully applied.</p>
        </div>
      )}
    </div>
  );
}
