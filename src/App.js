import React from "react";
import Home from "../src/components/Home";
import { Routes, Route } from "react-router-dom";
import Category from "./components/Category";
import ProductInfo from "./components/ProductInfo";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:name" element={<Category />} />
        <Route path="/:category/:product" element={<ProductInfo />} />
      </Routes>
    </div>
  );
}

export default App;
