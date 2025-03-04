import React from 'react';
import "./footer.scss";
import instagram from "./assets/Vector.png";
import whatsap from "./assets/whatsapp.png";
import map from "./assets/locaition.png";

export default function Footer() {
  return (
    <div className='footer'>
      footer
      <h1>Contact</h1>
      <div className='contact'>
        <div>
          <h3>Phone</h3>
          <p>+49 999 999 99 99</p>
        </div>
        <div>
          <h3>Social</h3>
          <img src={instagram} alt='instagram' />
          <img src={whatsap} alt='whatsap' />
        </div>
        <div>
          <h3>Address</h3>
          <p>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</p>
        </div>
        <div>
          <h3>Working Hours</h3>
          <p>24 hours a day</p>
        </div>
        <location>
          <img src={map} alt='map'/>
        </location>
      </div>


    </div>
  )
}
