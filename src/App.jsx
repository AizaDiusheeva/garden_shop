import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/home/Home";
import Catefories from "./components/catefories/Categories";
import AllProducts from "./components/products/AllProducts";
import Product from "./components/products/Product";
import Cart from "./components/cart/Cart";
import NotFound from "./components/notFound/NotFound";
import Nav from "./components/Nav/Nav";
import Footer from "./components/footer/Footer";
import AllSale from "./components/allSale/AllSale";
import Header from "./components/header/Header";
import "./components/main.scss";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Header/>
				<Nav/>
				<Routes>
					<Route path='/' index element={<Home />} />
					<Route path='/categories' element={<Catefories/>} />
					<Route path='/products'  element={<AllProducts />} />
          <Route path='/products'  element={<Product />} />
					<Route path='/cart'  element={<Cart />} />
          <Route path='/notfound'  element={<NotFound />} />
          <Route path='/allsale'  element={<AllSale/>} />
				</Routes>
        <Footer />
			</BrowserRouter>
    </div>
  );
}

export default App;
