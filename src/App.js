import React from "react";
import Home from "../src/components/Home";
import { Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import ProductInfo from "./components/ProductInfo";
import AboutUs from "./components/AboutUs";
import Shop from "./components/Shop";
import Login from "./components/Login";
import SignUp from "./components/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Category />} />
        <Route path="/:category/:product" element={<ProductInfo />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
