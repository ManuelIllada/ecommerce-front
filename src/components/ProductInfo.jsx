import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import NavBar from "../partials/Navbar";
import { addtoCart } from "../redux/productsCartSlice";
import "./ProductInfo.css";
import { useState } from "react";
import { Modal, Carousel } from "react-bootstrap";

const ProductInfo = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const location = useLocation();
  const { name, description, media, price } = location.state;
  const [showedImage, setShowedImage] = useState(media[0]);
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleAddToCart = (item) => {
    dispatch(addtoCart(item));
  };

  const handleClick = (item) => {
    setShowedImage(item);
  };
  return (
    <>
      <section className=" row">
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
                      className="preView border-1 rounded p-2"
                      onMouseOver={() => handleClick(item)}
                    >
                      <img src={item} alt={name} className="img-fluid" />
                    </div>
                  ))}
                </div>
                <div className="col-9  imageZoom">
                  <img
                    src={showedImage}
                    alt={name}
                    className="img-fluid"
                    onClick={handleShow}
                  />
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

      <Modal show={show} onHide={handleClose} media={media}>
        <Modal.Body>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            indicators="false"
          >
            {media.map((item) => (
              <Carousel.Item key={item}>
                <img className="d-block w-100" src={item} alt="First slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProductInfo;
