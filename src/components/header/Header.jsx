import React, {useState} from 'react';
import "./header.scss";
import { Link } from 'react-router-dom';
import img from "./assets/logo.png";
import imgCart from "./assets/Cart.png";
// import cartCount from "./assets/"


 const  Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Состояние для управления меню
    
  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen); // Переключаем состояние меню
  };

return (
  <div className="header_all">
      <div className='logo'>
          <img id="logo" src={img} alt="logo" />
      </div>
      <div className={`top_line${isMenuOpen ? "open" : ""}`}>
      <ul>
          <li className="main_Page">
          <Link to="/" onClick={toggleMenu}> 
                      <p>Main Page</p>
                  </Link>
          </li>
          <li className="categories">
          <Link to="/categories" onClick={toggleMenu}> 
                      <p>Categories</p>
                  </Link>
          </li>
          <li className="all_products">
          <Link to="/products" onClick={toggleMenu}> 
                      <p>All products</p>
                  </Link>
          </li>
          <li className="all_sales" onClick={toggleMenu}>
          <Link to="/sales"> 
                      <p>All sales</p>
                  </Link>
          </li>
          </ul>
      </div>
      <div className='numer_cart'>
          <img id='cart' src={imgCart} alt="cart" />
          <div className="cart_count">{ }</div> 
          {/* Бургер-меню */}
          <div className={`burger_menu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <div className="burger_line"></div>
          <div className="burger_line"></div>
          <div className="burger_line"></div>
      </div>
      </div>

      
  </div>
)
 }

export default Header