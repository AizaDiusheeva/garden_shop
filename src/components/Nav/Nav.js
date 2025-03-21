import React from "react";
import { Link } from "react-router-dom";
import "./nav.scss";
import Breadcrumbs from "./Breadckrumbs";

 const  Nav=()=> {
  return (
    <div className="nav_container">
            <Breadcrumbs />
            <nav className='hidden'>
                <Link to="/" className="nav_link">Home</Link>
                <Link to="/categories" className="nav_link">Categories</Link>
                <Link to="/products" className="nav_link">Products</Link>
                <Link to="/cart" className="nav_link">Cart</Link>
                <Link to="/notFound" className="nav_link">Not Found</Link>
                <Link to="/allSale" className="nav_link">All Sales</Link>
            </nav>
        </div>
    );
  };
  export default Nav;