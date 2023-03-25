import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import NavBar from "../partials/Navbar";
import { addtoCart } from "../redux/productsCartSlice";
/* import Zoom from "react-img-hover-zoom"; */
import "./ProductInfo.css";
import { useState } from "react";
import { Modal } from "react-bootstrap";

const ProductInfo = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const location = useLocation();
  const { name, description, media, price } = location.state;
  const [showedImage, setShowedImage] = useState(media[0]);

  const handleAddToCart = (item) => {
    dispatch(addtoCart(item));
  };

  const handleClick = (item) => {
    setShowedImage(item);
  };
  return (
    <>
      <section className="bg-dark row">
        <section>
          <NavBar />
        </section>
        <section>
          <div className="mt-5 px-5 row">
            <div className="col-5">
              <div className="row">
                <div className="col-3">
                  {media.map((item) => (
                    <div
                      key={item}
                      className="preView border-1 rounded"
                      onMouseOver={() => handleClick(item)}
                    >
                      <img src={item} alt={name} className="img-fluid" />
                    </div>
                  ))}
                </div>
                <div className="col-9  imageZoom">
                  <Zoom
                    img={showedImage}
                    zoomScale={2}
                    width={600}
                    height={600}
                    onClick={handleShow}
                    className="img-fluid"
                  />
                  {/* <img
                  src={showedImage}
                  alt={name}
                  className="img-fluid"
                  onClick={handleShow}
                /> */}
                </div>
              </div>
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
        </section>
      </section>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Aca va la foto</Modal.Body>
      </Modal>
    </>
  );
};

export default ProductInfo;
