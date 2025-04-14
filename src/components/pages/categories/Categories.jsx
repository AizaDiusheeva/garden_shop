import React from "react";
import { Link } from "react-router-dom";
import "./categories.scss";
import fertizer from "../../assets/category/fertizer.png";
import Listic from "../../assets/category/listic.png";
import pochva from "../../assets/category/pochva.png";
import lopata from "../../assets/category/lopata.png";
import tool from "../../assets/category/tool..png";
import Container from "../../container/Container";

const Categories = () => {
  return (
    <Container>
      <section className="categories">
        <div className="categories__container">
          <h3 className="categories__title">Categories</h3>
          <div className="categories__list">
            <Link to="/categories/1" className="categories__item">
              <img
                src={fertizer}
                alt="Fertilizer"
                className="categories__image"
              />
              <p className="categories__label">Fertilizer</p>
            </Link>
            <Link to="/categories/2" className="categories__item">
              <img
                src={Listic}
                alt="Protective products"
                className="categories__image"
              />
              <p className="categories__label">
                Protective products and septic tanks
              </p>
            </Link>
            <Link to="/categories/3" className="categories__item">
              <img
                src={pochva}
                alt="Planting material"
                className="categories__image"
              />
              <p className="categories__label">Planting material</p>
            </Link>
            <Link to="/categories/4" className="categories__item">
              <img
                src={lopata}
                alt="Tools and equipment"
                className="categories__image"
              />
              <p className="categories__label">Tools and equipment</p>
            </Link>
            <Link to="/categories/5" className="categories__item">
              <img
                src={tool}
                alt="Pots and planters"
                className="categories__image"
              />
              <p className="categories__label">Pots and planters</p>
            </Link>
          </div>
        </div>
      </section>
    </Container>
  );
};
export default Categories;
