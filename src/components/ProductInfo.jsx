import React from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import NavBar from "../partials/Navbar";
import { addtoCart } from "../redux/productsCartSlice";
import "./ProductInfo.css";
import { useState } from "react";
import { Modal, Carousel, Button } from "react-bootstrap";
import Footer from "../partials/Footer";

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
      <body className="bg-dark">
        <section className=" bg-dark">
          <NavBar />
        </section>
        <section>
          <div className="px-5 row d-flex justify-content-center py-5">
            <div className="my-3"></div>
            <div className="col-12 col-md-6 col-lg-4 my-5">
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
            <div className="col-lg-6 col-md-8 col-sm-10  d-flex justify-content-center align-items-center flex-column ms-5 text-center">
              <h3 className="mb-4">{name}</h3>
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
        <hr className="mx-5" />
        <div>
          <div className="container">
            <h4 className="semi-bold">Payment Methods</h4>
            <Button></Button>
            <p>Credit cards</p>
            <small>Interest free installments with selected banks!</small>
          </div>
          <div></div>
        </div>
        <section className="mt-auto">
          <Footer />
        </section>
      </body>

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
