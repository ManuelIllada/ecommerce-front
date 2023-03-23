import NavBar from "../partials/Navbar";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Product } from "../partials/Product";

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
      <section className="px-3">
        <NavBar />
      </section>
      {/* Hero */}
      <section>
        <div
          className="p-5 text-center bg-image mt-5"
          style={{
            backgroundImage:
              "url('https://mdbootstrap.com/img/new/slides/041.webp')",
            height: "20rem",
          }}
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
          >
            <div className="d-flex justify-content-center align-items-center h-100">
              <div className="text-white">
                <h1 className="mb-3">{location.state.name}</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <h1 className="text-center my-5">Our Products</h1>

      <div className="d-flex flex-wrap justify-content-around">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </>
  );
}

export default Category;
