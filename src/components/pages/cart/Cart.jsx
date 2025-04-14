import React, { useState } from "react";
import "../../pages/cart/cart.scss"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseQuantity,
  addToCart,
  removeFromCart,
} from "../../store/cartSlice";
import Container from "../../container/Container";
import EmptyCart from "../cart/EmptyCart";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // Обновляем данные корзины, добавляя discont_price
  const updatedCartItems = cartItems.map((item) => {
    let obj = {
      ...item,
    };

    return obj;
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = (path) => {
    navigate(path);
  };

  // Открытие модального окна
  const handleOrderClick = (e) => {
    e.preventDefault(); // Предотвращаем отправку формы
    setIsModalOpen(true);
  };

  // Закрытие модального окна
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Если корзина пуста, отображаем компонент EmptyCart
  if (updatedCartItems.length === 0) {
    return <EmptyCart />;
  }

  const totalQuantity = updatedCartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );
  const total = updatedCartItems.reduce(
    (sum, item) => sum + (item.discont_price || item.price) * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <Container>
        <div className="cart-header">
          <h3 className="cart-title">Shopping Cart</h3>
          <div className="cart-navigation">
            <hr className="cart-divider" />
            <button
              className="cart-back-button"
              onClick={() => handleClick("/")}
            >
              Back to the store
            </button>
          </div>
        </div>
        <div className="cart-page">
          <div className="cart-content">
            {updatedCartItems.map((item) => {
              return (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-image">
                    <img
                      src={`http://localhost:3333${item.image}`}
                      alt={item.title}
                    />
                  </div>
                  <div className="cart-item-wrapper">
                    <div className="cart-item-info">
                      <div className="cart-item-title">
                        <strong>{item.title}</strong>
                      </div>
                      <div className="cart-remove-button">
                        <button
                          className="cart-remove-cross"
                          onClick={() => dispatch(removeFromCart(item.id))}
                        >
                          ✖
                        </button>
                      </div>
                    </div>
                    <div className="cart-item-details">
                      <div className="cart-quantity-control">
                        <button
                          className="quantity-decrease"
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                        >
                          -
                        </button>
                        <span className="quantity-value">{item.quantity}</span>
                        <button
                          className="quantity-increase"
                          onClick={() =>
                            dispatch(addToCart({ ...item, quantity: 1 }))
                          }
                        >
                          +
                        </button>
                      </div>

                      <div className="cart-item-price">
                        {item.discont_price &&
                        item.discont_price !== item.price ? (
                          <>
                            <span className="price-new">
                              ${item.discont_price}
                            </span>
                            <span className="price-old">${item.price}</span>
                          </>
                        ) : (
                          <span className="regular">${item.price}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-discount-form">
            <div className="cart-discount-details">
              <h1>Order details</h1>
              <button className="total-quantity-btn">
                {totalQuantity} items
              </button>
              <div className="total-text">
                <h2>Total</h2>
                <span className="total-value">${total}</span>
              </div>
            </div>
            <form className="discount-form">
              <input className="form-input" type="text" placeholder="Name" />
              <input
                className="form-input"
                type="tel"
                placeholder="Phone number"
              />
              <input className="form-input" type="email" placeholder="Email" />
              <button
                className="form-submit"
                type="submit"
                onClick={handleOrderClick}
              >
                Order
              </button>
            </form>
          </div>
        </div>
        <div className="cart-navigation-back">
          <button className="cart-back-button" onClick={() => handleClick("/")}>
            Back to the store
          </button>
        </div>
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
          <p>
            Your order has been successfully placed on the website.
            <br />
            <br />A manager will contact you shortly to confirm your order.
          </p>
        </div>
      )}
    </div>
  );
};
export default Cart;
