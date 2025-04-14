import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import img from "../assets/img/logo.png";
import imgCart from "../assets/img/Cart.png";
import { useSelector } from "react-redux";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для управления меню

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Переключаем состояние меню
  };
  // Получаем данные корзины из Redux
  const cartItems = useSelector((state) => state.cart.items);

  // Вычисляем общее количество товаров в корзине
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="header__logo">
        <img src={img} alt="logo" />
      </div>
      <nav className={`header__nav ${isMenuOpen ? "header__nav--open" : ""}`}>
        <ul className="header__menu">
          <li className="header__menu-item">
            <Link to="/" className="header__menu-link" onClick={toggleMenu}>
              <p>Main Page</p>
            </Link>
          </li>
          <li className="header__menu-item">
            <Link
              to="/categories"
              className="header__menu-link"
              onClick={toggleMenu}
            >
              <p>Categories</p>
            </Link>
          </li>
          <li className="header__menu-item">
            <Link
              to="/products"
              className="header__menu-link"
              onClick={toggleMenu}
            >
              <p>All products</p>
            </Link>
          </li>
          <li className="header__menu-item">
            <Link
              to="/allSale"
              className="header__menu-link"
              onClick={toggleMenu}
            >
              <p>All sales</p>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="header__actions">
        <div className="header__cart">
          <Link to="/cart">
            <img className="header__cart-icon" src={imgCart} alt="cart" />
            {cartCount > 0 && (
              <div className="header__cart-count">{cartCount}</div>
            )}
          </Link>
        </div>
        {/* Бургер-меню */}
        <div
          className={`header__burger ${
            isMenuOpen ? "header__burger--open" : ""
          }`}
          onClick={toggleMenu}
        >
          <span className="header__burger-line"></span>
          <span className="header__burger-line"></span>
          <span className="header__burger-line"></span>
        </div>
        {/* Скрытое меню */}
        <div
          className={`header__side-menu ${
            isMenuOpen ? "header__side-menu--open" : ""
          }`}
        >
          <ul className="header__side-menu-list">
            <li className="header__side-menu-item">
              <Link
                to="/"
                className="header__side-menu-link"
                onClick={toggleMenu}
              >
                <p>Main Page</p>
              </Link>
            </li>
            <li className="header__side-menu-item">
              <Link
                to="/categories"
                className="header__side-menu-link"
                onClick={toggleMenu}
              >
                <p>Categories</p>
              </Link>
            </li>
            <li className="header__side-menu-item">
              <Link
                to="/products"
                className="header__side-menu-link"
                onClick={toggleMenu}
              >
                <p>All products</p>
              </Link>
            </li>
            <li className="header__side-menu-item">
              <Link
                to="/allSale"
                className="header__side-menu-link"
                onClick={toggleMenu}
              >
                <p>All sales</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
