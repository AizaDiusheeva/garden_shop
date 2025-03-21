import React from "react";
import "./allproduct.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "../Nav/Filter";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // Фильтрованные товары

  // Фильтры
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [discountOnly, setDiscountOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3333/products/all"); // Подставь свой API
        const data = await response.json();
        setProducts(data.slice(0, 12)); // Берем только 12 товаров
      } catch (error) {
        console.error("Ошибка загрузки товаров:", error);
      }
    };

    fetchProducts();
  }, []);

  // Фильтрация товаров
  useEffect(() => {
    let filtered = products;

    if (minPrice)
      filtered = filtered.filter(
        (product) => product.price >= Number(minPrice)
      );
    if (maxPrice)
      filtered = filtered.filter(
        (product) => product.price <= Number(maxPrice)
      );
    if (discountOnly)
      filtered = filtered.filter((product) => product.discountPrice);
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [minPrice, maxPrice, discountOnly, searchQuery, products]);

  return (
    <section className="allProducts">
      <div className="product-title">
        <h3 className="title">All products</h3>
      </div>
      <Filter  className="filter"
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        discountOnly={discountOnly}
        setDiscountOnly={setDiscountOnly}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <div>
        <div className="products-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                to={`/products/${product.id}`}
                key={product.id}
                className="product-card"
              >
                <div className="image-wrapper">
                  {product.discont_price && (
                    <div className="discount-badge">
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
                  />
                </div>
                <h3>{product.title}</h3>

                <div className="price-container">
                  {product.discont_price ? (
                    <>
                      <p className="new-price">${product.discont_price}</p>
                      <p className="old-price">${product.price}</p>
                    </>
                  ) : (
                    <p className="regular-price">${product.price}</p>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <p>Товары не найдены</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
