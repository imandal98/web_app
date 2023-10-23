// import logo from './logo.svg';
// import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Sections/Header/Header";
import Footer from "./Sections/Footer/Footer";
import Category from "./Sections/Category/Category";
import Product_info from "./Sections/Product_info/Product_info";
import Home from "./Sections/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/product/:id" element={<Product_info/>}/>
        <Route path="/category/:id" element={<Category/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;