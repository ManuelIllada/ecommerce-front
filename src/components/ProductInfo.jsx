import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import NavBar from "../partials/Navbar";
import { addtoCart } from "../redux/productsCartSlice";

const ProductInfo = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { name, description, media, price } = location.state;

  const handleAddToCart = (item) => {
    dispatch(addtoCart(item));
  };
  return (
    <>
      <NavBar className="mb-5" />

      <div className="container mt-5">
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
              <button
                onClick={() => handleAddToCart(location.state)}
                className="btn btn-outline-success m-3"
              >
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
