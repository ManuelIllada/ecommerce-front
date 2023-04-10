import React from "react";
import Home from "../src/components/Home";
import { Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import ProductInfo from "./components/ProductInfo";
import AboutUs from "./components/AboutUs";
import Shop from "./components/Shop";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Thanks from "./components/Thanks";
import { Toaster } from "react-hot-toast";
import Loading from "./components/Loading";

function App() {
  return (
    <div className="App">
      <Toaster />
      <Routes>
        <Route path="/loading" element={<Loading />} />
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Category />} />
        <Route path="/:category/:product" element={<ProductInfo />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/cart" element={<Shop />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </div>
  );
}

export default App;
