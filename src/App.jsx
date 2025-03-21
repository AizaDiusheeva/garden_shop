import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Categories from "./components/categories/Categories";
import AllProducts_category from "./components/allproducts_category/AllProducts_category";
import Product from "./components/product/Product";
import Cart from "./components/cart/Cart";
import NotFound from "./components/notFound/NotFound";
import Nav from "./components/Nav/Nav";
import Footer from "./components/footer/Footer";
import AllSale from "./components/allSale/AllSale";
import Header from "./components/header/Header";
import "./components/main.scss";
import Category from "../src/components/category/Category";
import AllProduct from "./components/products-all/Allproduct";

import Products from "./components/products/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:id" element={<Category />} />
          <Route path="/products/" element={<AllProducts_category />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/products/" element={<AllProduct />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/allsale" element={<AllSale />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
