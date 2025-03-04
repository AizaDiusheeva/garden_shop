import React from 'react';
import { Link } from 'react-router-dom';


export default function  Nav () {
  return (
    <div>
       <ul>
         <nav>
				<Link to="/" > Main Page </Link>
				<Link to="/categories" > Categories </Link>
				<Link to="/product" > All Products </Link>
				<Link to="/allSale" > All sales </Link>
			</nav>
       </ul>
    </div>
         
  )
}
