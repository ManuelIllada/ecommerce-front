import React from "react";
import { useLocation } from "react-router-dom";
import HeroProducts from "../partials/HeroProducts";
import NavBar from "../partials/Navbar";

const ProductInfo = () => {
  const location = useLocation();
  const { name, description, media, price } = location.state;
  return (
    <>
      <NavBar />

      <section>
        <HeroProducts />
      </section>
      <div className="container">
        <div className="row">
          <div className="col-5">
            <img src={media} alt={name} className="img-fluid" />
          </div>
          <div className="col-7">
            <h3>{name}</h3>
            <p>{description}</p>
            <small>${price}</small>
            <div>
              <button className="btn btn-primary m-3">Buy</button>
              <button className="btn btn-outline-success m-3">
                Add to Cart +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
