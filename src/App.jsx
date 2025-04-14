import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Categories from "./components/pages/categories/Categories";
import Product from "./components/pages/product/Product";
import Cart from "./components/pages/cart/Cart";
import NotFound from "./components/pages/notFound/NotFound";
import Nav from "./components/Nav/Nav";
import Footer from "./components/footer/Footer";
import AllSale from "./components/pages/allSale/AllSale";
import Header from "./components/header/Header";
import Category from "./components/pages/category/Category";
import AllProducts from "./components/pages/allproducts/AllProducts";

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
          <Route path="/products/" element={<AllProducts />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/allsale" element={<AllSale />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
