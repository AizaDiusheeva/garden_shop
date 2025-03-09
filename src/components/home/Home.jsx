import React from "react";
import "./home.scss";
import banner from "../assets/banner.jpg";
import fertizer from "../assets/category/fertizer.png";
import listic from "../assets/category/listic.png";
import pochva from "../assets/category/pochva.png";
import lopata from "../assets/category/lopata.png";
import product from "../assets/discountProduct.png";
import mostik from "../assets/sale/moctik.png";
import korzina from "../assets/sale/korzina.png";
import zamok from "../assets/sale/zamok.png";
import sekator from "../assets/sale/sekator.png";
import { useNavigate } from "react-router-dom";

export default function MainPages() {
  const navigate = useNavigate();

  const nandleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="Home">
      <section className="banner">
        <img src={banner} alt="banner" className="bannerImg" />
        <div className="bannerText">
          Amazing Discounts on Garden Products
          <button className="buttonCheck" onClick={() => nandleClick("")}>
            Check out
          </button>
        </div>
      </section>
      <section className="containerCategories">
        <h3 className="category">Categories</h3>
        <hr className="line" />
        <div className="line-box">
          <button
            className="line-text"
            onClick={() => nandleClick("/categories")}
          >
            All categories
          </button>
        </div>

        <div className="ImgCategory">
          <div className="img-container">
            <img src={fertizer} alt="fertizer" className="img" />
            <p className="t">Fertilizer</p>
          </div>

          <div className="img-container">
            <img src={listic} alt="listic" className="img" />
            <p className="t">Protective products and septic tanks</p>
          </div>
          <div className="img-container">
            <img src={pochva} alt="pochva" className="img" />
            <p className="t">Planting material</p>
          </div>
          <div className="img-container">
            <img src={lopata} alt="lopata" className="img" />
            <p className="t">Tools and equipment</p>
          </div>
        </div>
      </section>
      <section className="discount">
        <p className="text">5% off on the first order</p>
        <img src={product} alt="discountProduct" className="discountProduct" />
        {/* 
        <form action="activ" className="form">
          <input type="text" placeholder="Name" />
          <input type="tell" placeholder="Phone number" />
          <input type="email" placeholder="Email" />
          <button type="submit">Get a discount</button>
        </form> */}
      </section>

      <section className="sale">
        <h3 className="Sale">Sale</h3>
        <hr className="line2" />
        <div div className="line-box">
          <button className="line-text" onClick={() => nandleClick("/allsale")}>
            All sales{" "}
          </button>
        </div>

        <div className="ImgSale">
          <div className="sale-container">
            <img src={mostik} alt="mostik" className="img2" />
            <p className="text-sale">Decorative forged bridge</p>
            <div className="price">
              <p className="price1">$500</p>
              <p className="discount-price">$1000</p>
            </div>
          </div>
          <div className="sale-container">
            <img src={korzina} alt="korzina" />
            <p className="text-sale">Flower basket</p>
            <div className="price">
              <p className="price1">$100</p>
              <p className="discount-price">$1000</p>
            </div>
          </div>

          <div className="sale-container">
            <img src={zamok} alt="zamok" />
            <p className="text-sale">Aquarium lock</p>
            <div className="price">
              <p className="price1">$150</p>
              <p className="discount-price">$1000</p>
            </div>
          </div>
          <div className="sale-container">
            <img src={sekator} alt="sekator" />
            <p className="text-sale">Secateurs</p>
            <div className="price">
              <p className="price1">$199</p>
              <p className="discount-price">$1000</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
