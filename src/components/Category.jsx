import NavBar from "../partials/Navbar";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Product } from "../partials/Product";
import HeroProducts from "../partials/HeroProducts";
import Footer from "../partials/Footer";

function Category() {
  const location = useLocation();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/categories/${location.state.id}`,
      });

      setProducts(response.data);
    };
    getProducts();
  }, [location.state.id]);

  return (
    <>
      <NavBar />

      {/* Hero */}
      <section>
        <HeroProducts />
      </section>

      <h1 className="text-center my-5">Our Products</h1>

      <div className="d-flex flex-wrap justify-content-around">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default Category;
