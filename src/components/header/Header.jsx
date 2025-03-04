import React from 'react';
import "./header.scss";
import { Link } from 'react-router-dom';
import Logo from "./assets/logo (1).png";
import Moon from "./assets/mode=light (1).png";
import Heard from "./assets/basket=heart empty (1).png";
import Backet  from"./assets/basket=card - empty.png"


export default function Header() {
  


  return (
    <div className='header'>
     
      <img src={Logo} alt="Logo" className='Logo' />
      <Link to="/">
           <img src={Moon} alt="moodligth" className='Moon' />
     </Link>

     <nav className="nav">
          <h1>Main Pages</h1> 
          <h1>Categories</h1>
          <h1>All products</h1>
          <h1>All  Sales</h1>
    </nav>
    <img src={Heard} alt="heard" className='heard' />
    <Link to="/">
    <img src={Backet} alt="backet"  className='backet'/>
    </Link>
    
     

      

    </div>
  )
}
