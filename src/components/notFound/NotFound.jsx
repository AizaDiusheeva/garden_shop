import React from "react";
import "./notFound.scss";
import kaktus from "../assets/notfound/kaktus.png";
import four from "../assets/notfound/4.png";
import four1 from "../assets/notfound/4.png";
import { useNavigate } from "react-router-dom";

const Found = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <section className="notfound">
      <div className="number-pictured">
        <img src={four} alt="four" />
        <img src={kaktus} alt="kaktus" />
        <img src={four1} alt="four1" />
      </div>

      <div className="PNF">
        <div className="page">
          <p className="page-notfound">Page Not Found</p>
          <p className="go-back">
            We’re sorry, the page you requested could not be found. Please go
            back to the homepage.
          </p>
          <button className="gohome" onClick={() => handleClick("/")}>
            Go Home
          </button>
        </div>
      </div>
    </section>
  );
};
export default Found;
