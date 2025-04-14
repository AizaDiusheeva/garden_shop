import React from "react";
import "./allproduct.scss";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "../../Nav/Filter";
import Container from "../../container/Container";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Фильтры
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [discountOnly, setDiscountOnly] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3333/products/all");
        const result = await response.json();

        if (Array.isArray(result)) {
          setProducts(result);
        } else if (result.data && Array.isArray(result.data)) {
          setProducts(result.data);
        } else {
          throw new Error(
            "Expected an array of products, but the API returned something else"
          );
        }
      } catch (error) {
        console.error("Error loading all products:", error);
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
      filtered = filtered.filter(
        (product) =>
          product.discont_price && product.discont_price < product.price
      );
    if (searchQuery) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [minPrice, maxPrice, discountOnly, searchQuery, products]);

  return (
    <div className="allProducts">
      <Container>
        <h2 className="allProducts__title">All products</h2>

        {/* Фильтры */}
        <Filter
          className="filter"
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          discountOnly={discountOnly}
          setDiscountOnly={setDiscountOnly}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Список товаров */}
        <div className="allProducts__products">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                to={`/product/${product.id}`}
                key={product.id}
                className="product"
              >
                <div className="product__image-wrapper">
                  {product.discont_price && (
                    <div className="product__discount">
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
                    className="product__image"
                  />
                  <Link to="/cart" className="product__button">
                    Add to cart
                  </Link>
                </div>
                <div className="product__title-wrapper">
                  <h3 className="product__title">{product.title}</h3>
                </div>

                <div className="product__price">
                  {product.discont_price ? (
                    <>
                      <p className="product__price--new">
                        ${product.discont_price}
                      </p>
                      <p className="product__price--old">${product.price}</p>
                    </>
                  ) : (
                    <p className="product__price--regular">${product.price}</p>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <p className="allProducts__empty">No products found</p>
          )}
        </div>
      </Container>{" "}
      {/* Здесь закрываем контейнер правильно */}
    </div>
  );
};

export default AllProducts;
