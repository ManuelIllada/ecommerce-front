import NavBar from "../partials/Navbar";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
    console.log(location.state.id);
  }, [location.state.id]);

  return (
    <>
      <div className="bg-image" style={{ backgroundColor: "#f0e8d5" }}>
        {/* Hero */}
        <section>
          <NavBar />

          <HeroProducts
            background={location.state.media}
            name={location.state.name}
          />
        </section>

        <h1 className="text-center my-5">Our Products</h1>

        <div className="d-flex flex-wrap justify-content-around">
          {products.map((product) => (
            <Link
              to={`/${product.category.slug}/${product.slug}`}
              key={product.id}
              state={product}
            >
              <Product product={product} key={product.id} />
            </Link>
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
