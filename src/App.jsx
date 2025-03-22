import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
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
import { CartProvider } from "./components/cart/CartContext";


function App() {
  return (
    <div className="App">
      <CartProvider>

     
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          
          <Route path="/" index element={<Home />} />
          <Route path="/notfound" index element={<NotFound />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/notfound" element={<NotFound />} />
          <Route path="/categories/:id" element={<Category />} />
          <Route path="/products/" element={<AllProducts_category />} />
          <Route path="/products/notfound" element={<NotFound />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/products/" element={<AllProduct />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/allsale" element={<AllSale />} />
          <Route path="/allsale/notfound" element={<NotFound />} />
          <Route path="/notfound" element={<NotFound />} />
                </Routes>
                  <Footer />
      </BrowserRouter> 
      </CartProvider>
    </div>
  );
}

export default App;
