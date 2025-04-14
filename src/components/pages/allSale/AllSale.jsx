import React from "react";
import "./allSale.scss";
import { useEffect } from "react";
import { useState } from "react";
import Filter from "../../Nav/Filter";
import { useDispatch } from "react-redux";
import Container from "../../container/Container";
import { addToCart } from "../../store/cartSlice";
import { Link } from "react-router-dom";

const AllSale = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch(); // ✅ Добавляем useDispatch
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3333/products/all");
        const result = await response.json();

        const allProducts = Array.isArray(result) ? result : result.data || [];

        // Сохраняем в localStorage
        localStorage.setItem("products", JSON.stringify(allProducts));
        setProducts(allProducts);
      } catch (error) {
        console.error("Error loading goods:", error);
      }
    };

    fetchProducts();
  }, [products]);

  useEffect(() => {
    if (products.length > 0) {
      const discounted = products.filter(
        (product) => product.discont_price !== null
      );
      setFilteredProducts(discounted);
    }
  }, [products]);

  const handleAddToCart = (product) => {
    const productToAdd = {
      id: product.id,
      title: product.title,
      price: product.discont_price ?? product.price,
      discont_price: product.discont_price ?? null,
      image: product.image,
      quantity: 1,
    };
    dispatch(addToCart(productToAdd));
  };

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

    setFilteredProducts(filtered);
  }, [minPrice, maxPrice, products]);

  return (
    <div className="category">
      <Container>
        <h2 className="category__title">Discounted items</h2>
        <Filter
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
        />

        {/* Список товаров */}
        <div className="allSale__products">
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
                  <button
                    className="product__button"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddToCart(product);
                    }}
                  >
                    Add to cart
                  </button>
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
            <p>There are no discounted products</p>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AllSale;
