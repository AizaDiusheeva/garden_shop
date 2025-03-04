import React from "react";
import "./home.scss";
import banner from "./assets/banner.jpg";
import fertizer from "./assets/category/fertizer.png";
import Listic from "./assets/category/listic.png";
import pochva from "./assets/category/pochva.png";
import lopata from "./assets/category/lopata.png";
import product from "./assets/discountProduct.png";
import mostik from "./assets/sale/moctik.png";
import korzina from "./assets/sale/korzina.png";
import zamok from "./assets/sale/zamok.png";
import sekator from "./assets/sale/sekator.png";

export default function MainPages() {
  return (
    <div className="Home">
      <section className="banner">
        <img src={banner} alt="banner" className="bannerImg" />
        <div className="bannerText">
          Amazing Discounts on Garden Products
          <button className="buttonCheck">Check out</button>
        </div>
      </section>
      <section className="containerCategories">
        <h3 className="category">Categories</h3>
        <hr className="Line" />
        <p>All categories</p>
        <div className="ImgCategory">
          <img src={fertizer} alt="fertizer" />
          <img src={Listic} alt="listic" />
          <img src={pochva} alt="pochva" />
          <img src={lopata} alt="lopata" />
        </div>
      </section>
      <section className="discount">
        <p className="text">5% off on the first order</p>
        <img src={product} alt="discountProduct" className="discountProduct" />

        <form action="activ" className="form">
          <input type="text" placeholder="Name" />
          <input type="tell" placeholder="Phone number" />
          <input type="email" placeholder="Email" />
          <button type="submit">Get a discount</button>
        </form>
      </section>
      <section className="sale">
        <h3 className="sale">Sale</h3>
        <hr className="Line2" />
        <p>All sales</p>
        <div className="ImgSale">
          <img src={mostik} alt="mostik" />
          <img src={korzina} alt="korzina" />
          <img src={zamok} alt="zamok" />
          <img src={sekator} alt="sekator" />
        </div>
      </section>
    </div>
  );
}
