import React, {useState} from 'react';
import "./header.scss";
import { Link } from 'react-router-dom';
import img from "../assets/img/logo.png";
import imgCart from "../assets/img/Cart.png";
import cartCount from "../cart/Cart"


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
        <div className={`top_line ${isMenuOpen ? "open" : ""}`}>
            <ul className='txt'>
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
        <div className='cart_burger'>
            <div className='numer_cart'>
                <img id='cart' src={imgCart} alt="cart" />
                {cartCount > 0 && ( // Условный рендеринг кружочка
                    <div className="cart_count">{cartCount}</div>)}
            </div> 
                {/* Бургер-меню */}
            <div className={`burger_menu ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                <div className="burger_line"></div>
                <div className="burger_line"></div>
                <div className="burger_line"></div>
            </div>
            {/* Скрытое меню */}
            <div className={`side_menu ${isMenuOpen ? "open" : ""}`}>
                <ul className='txt_open'>
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
                    <li className="all_sales">
                        <Link to="/sales" onClick={toggleMenu}>
                            <p>All sales</p>
                        </Link>
                    </li>
                </ul>
            </div> 
        </div>           
    </div>
);

};


export default Header;
