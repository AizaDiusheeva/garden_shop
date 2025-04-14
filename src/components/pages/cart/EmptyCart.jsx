import React from "react";
import { useNavigate } from "react-router-dom";
import "./emptyCart.scss";
import Container from "../../container/Container";

const EmptyCart = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="empty-cart">
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
        <p>Looks like you have no items in your basket currently.</p>
        <button className="cart-empty-btn" onClick={() => navigate("/")}>
          Continue Shopping
        </button>
      </Container>
    </div>
  );
};

export default EmptyCart;
