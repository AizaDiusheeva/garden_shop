
import React from "react";
import "./footer.scss";
import instagram from "./assets/Vector.png";
import whatsap from "./assets/whatsapp.png";
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <div className="footer">
      footer
      <h1 className="footerText">Contact</h1>
      <div className="cart">
        <div className="info">
          <din className="cart1">
            <div className="contact">
              <h3 className="phone">Phone</h3>
              <p className="number">+49 999 999 99 99</p>
            </div>
            <div className="Social">
              <h3 className="social">Social</h3>
              <div className="frame">
                <Link > 
                <img src={instagram} alt="instagram" /> 
                </Link>
                <Link > 
                <img src={whatsap} alt="whatsap" />
                </Link>               
                </div>
            </div>
          </din>
          <div className="cart2">
            <div className="Address">
              <h3 className="add">Address</h3>
              <p className="street">
                Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
              </p>
            </div>
            <div className="hours">
              <h3 className="work">Working Hours</h3>
              <p className="day">24 hours a day</p>
            </div>
          </div>
        </div>
        <div className="map">
        <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093753!2d144.9537363153189!3d-37.81627917975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1c0f5b3%3A0x5f241e4d8b4a7b5b!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1647990987416!5m2!1sen!2sau"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>

        </div>
         
        
      </div>
    </div>
  );
};
export default Footer;
