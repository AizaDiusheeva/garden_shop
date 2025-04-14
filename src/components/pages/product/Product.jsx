import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import "./product.scss";
import Container from "../../container/Container";

const Product = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3333/products/${id}`);
        const data = await response.json();

        if (Array.isArray(data)) {
          setItem(data[0]);
        } else {
          setItem(data);
        }
      } catch (error) {
        console.error("Ошибка загрузки продукта:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  if (!item) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = () => {
    const productToAdd = {
      id: item.id,
      title: item.title,
      price: item.price,
      discont_price:
        item.discont_price && item.discont_price !== item.price
          ? item.discont_price
          : null,
      image: item.image,
      quantity: 1,
    };

    dispatch(addToCart(productToAdd));

    setTimeout(() => {}, 1000);

    navigate("/cart");
  };

  return (
    <div>
      <Container>
        <div className="product_solo">
          <div className="product__image-container">
            <img src={`http://localhost:3333${item.image}`} alt={item.title} />
          </div>
          <div className="product__content">
            <div className="product__info-block">
              <div className="product__header">
                <strong>{item.title}</strong>
                <div className="product__price">
                  {item.discont_price ? (
                    <>
                      <span className="new-price">{item.discont_price}$</span>
                      <span className="old-price">{item.price}$</span>
                    </>
                  ) : (
                    <span>{item.price}$</span>
                  )}
                  {item.discont_price && (
                    <div className="discount_badge">
                      -
                      {Math.round(
                        ((item.price - item.discont_price) / item.price) * 100
                      )}
                      %
                    </div>
                  )}
                </div>
              </div>
              <div className="product__actions">
                <div className="product__quantity-controls">
                  <button
                    className="product__decrease-btn"
                    onClick={decreaseQuantity}
                  >
                    -
                  </button>
                  <span className="product__quantity">{quantity}</span>
                  <button
                    className="product__increase-btn"
                    onClick={increaseQuantity}
                  >
                    +
                  </button>
                </div>
                <button className="product__cart-btn" onClick={handleAddToCart}>
                  Add to cart
                </button>
              </div>
            </div>
            <div className="product__text">
              <strong>{item.title}</strong>
              <p>{item.description}</p>
              <button className="product__more-btn">Read more</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Product;
