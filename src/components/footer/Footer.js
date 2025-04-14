import React from "react";
import "./footer.scss";
import instagram from "./assets/Vector.png";
import whatsap from "./assets/whatsapp.png";
import { Link } from "react-router-dom";
import Container from "../container/Container";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <h1 className="footer__title">Contact</h1>
        <div className="footer__content">
          <div className="footer__info">
            <div className="footer__contact footer__column--wide">
              <h3 className="footer__contact-title">Phone</h3>
              <p className="footer__contact-number">+49 999 999 99 99</p>
            </div>
            <div className="footer__social footer__column--narrow">
              <h3 className="footer__social-title">Social</h3>
              <div className="footer__social-icons">
                <Link className="footer__social-link">
                  <img
                    src={instagram}
                    alt="Instagram"
                    className="footer__social-icon"
                  />
                </Link>
                <Link className="footer__social-link">
                  <img
                    src={whatsap}
                    alt="WhatsApp"
                    className="footer__social-icon"
                  />
                </Link>
              </div>
            </div>
            <div className="footer__address footer__column--wide">
              <h3 className="footer__address-title">Address</h3>
              <p className="footer__address-text">
                Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland
              </p>
            </div>

            <div className="footer__hours footer__column--narrow">
              <h3 className="footer__hours-title">Working Hours</h3>
              <p className="footer__hours-text">24 hours a day</p>
            </div>
          </div>
          <div className="footer__map">
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
      </Container>
    </footer>
  );
};

export default Footer;
