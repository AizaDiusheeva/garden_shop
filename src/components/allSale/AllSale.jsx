import React from "react";
import "./allSale.scss";
import { useEffect } from "react";
import { useState } from "react";
import Filter from "../Nav/Filter";



const AllSale = () => {
  const [products, setProducts] = useState([]);
  const saleProducts = products
    .filter((product) => product.discont_price) // Фильтруем товары со скидкой
    .slice(0, 7); // Берем только 7 товара
  console.log(saleProducts);
  console.log(products.filter((product) => product.discont_price));

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
    <div>
      <section className="allSales">
        <div className="sale-title">
          <h3 className="title">Discounted items</h3>
        </div>

        <Filter />

        <div className="Products">
          <div className="product-container1">
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
        </div>
        </div>
      </section>
    </div>
  );
};

export default AllSale;
