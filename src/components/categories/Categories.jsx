import React from "react";
import { Link } from "react-router-dom";
import "./categories.scss";
import fertizer from "../assets/category/fertizer.png";
import Listic from "../assets/category/listic.png";
import pochva from "../assets/category/pochva.png";
import lopata from "../assets/category/lopata.png";
import tool from "../assets/category/tool.png";

const Categories = () => {
  return (
    <section className='container'> 
    <div className="container_Categories">
    <h3 className="category_title">Categories</h3>
    <div className="Img_Category">
        <Link to="/categories/1" className="item_category"> 
            <img src={fertizer} alt="fertizer" className="category_image" />
            <p className="category_label">Fertilizer</p>
        </Link>
        <Link to="/categories/2" className="item_category">
            <img src={Listic} alt="listic" className="category_image" />
            <p className="category_label">
                Protective products and <span className="break_line">septic tanks</span>
            </p>
        </Link>
        <Link to="/categories/3" className="item_category"> 
            <img src={pochva} alt="pochva" className="category_image" />
            <p className="category_label">Planting material</p>
        </Link>
        <Link to="/categories/4" className="item_category"> 
            <img src={lopata} alt="lopata" className="category_image" />
            <p className="category_label">Tools and equipment</p>
        </Link>
        <Link to="/categories/5" className="item_category"> 
            <img src={tool} alt="tool" className="category_image" />
            <p className="category_label">Pots and planters</p>
        </Link>
    </div>
</div>
    
</section>
);
};
export default Categories;
