import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <nav>
        <Link to="/"></Link>
        <Link to="/categories"></Link>
        <Link to="/products"></Link>
        <Link to="/products"></Link>
        <Link to="/cart"></Link>
        <Link to="/notFound"></Link>
        <Link to="/allSale"></Link>
      </nav>
    </div>
  );
}
