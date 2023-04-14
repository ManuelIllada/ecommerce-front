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

  const stock = (item) => {
    setProducts(
      products.map((p) => {
        if (p.id !== item.id) return p;
        return { ...p, stock: p.stock - 1 };
      })
    );
  };

  return (
    <>
      <div className="bg-image" style={{ backgroundColor: "rgb(65, 61, 61)" }}>
        {/* Hero */}
        <section>
          <NavBar />

          <HeroProducts
            background={location.state.media}
            name={location.state.name}
          />
        </section>

        <h1 className="text-center text-white my-5">Products</h1>

        <div className="d-flex flex-wrap justify-content-around mb-5">
          {products.map((product) => (
            <Product product={product} key={product.id} stock={stock} />
          ))}
        </div>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Category;
