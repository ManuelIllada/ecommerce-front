import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../partials/Navbar";
import { addToCart } from "../redux/productsCartSlice";
import "./ProductInfo.css";
import { useState } from "react";
import { Modal, Carousel, Button } from "react-bootstrap";
import Footer from "../partials/Footer";

const ProductInfo = () => {
  const stateCart = useSelector((state) => state.productCart);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
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
    const match = stateCart.some((product) => item.id === product.id);
    const itemStore = stateCart.find((product) => item.id === product.id);
    if (item.stock > 0 && !match) {
      console.log("agregar", match);
      dispatch(addToCart(item));
    } else if (match && item.stock > itemStore.quantity) {
      console.log("match", match);
      dispatch(addToCart(item));
    } else {
      console.log("imposible seguir");
    }
  };

  const handleBuy = (item) => {
    dispatch(addToCart(item));
    navigate("/cart");
  };

  const handleClick = (item) => {
    setShowedImage(item);
  };
  return (
    <>
      <body style={{ backgroundColor: "rgb(65, 61, 61)" }}>
        <section style={{ backgroundColor: "rgb(65, 61, 61)" }}>
          <NavBar />
        </section>
        <div
          className="p-5 text-center bg-image hero-container"
          style={{
            backgroundImage:
              "url('https://cdn.discordapp.com/attachments/852698000890658876/1090763480115712163/portada.jpg')",
            backgroundPosition: "bottom",
            width: "100%",
            height: "16rem",
          }}
        ></div>
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
              <h3 className="mb-4 text-white">{name}</h3>
              <p className="text-white">{description}</p>
              <small className="text-white">${price}</small>
              <div>
                <button
                  onClick={() => handleBuy(location.state)}
                  className="btn btn-primary m-3"
                >
                  Buy
                </button>
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
        <div className=" text-white container d-flex justify-content-around">
          <div className="p-3 col-3 shadow">
            <h4 className="semi-bold">Payment Methods</h4>
            <Button></Button>
            <p>Credit cards</p>
            <small>Interest free installments with selected banks!</small>
            <div>
              <img
                src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg"
                alt="visa"
                className="me-2"
              />
              <img
                src="https://http2.mlstatic.com/storage/logos-api-admin/d7e372a0-f39b-11eb-8e0d-6f4af49bf82e-m.svg"
                alt="Oca"
                className="me-2"
              />
              <img
                src="https://http2.mlstatic.com/storage/logos-api-admin/fbf867c0-9108-11ed-87b1-fd4dd99fac51-m.svg"
                alt="American Express"
                className="me-2"
              />
              <img
                src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg"
                alt="masterCard"
              />
            </div>
            <p>Debit cards</p>
            <img
              src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg"
              alt="visa"
              className="me-2"
            />
            <img
              src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg"
              alt="masterCard"
            />
          </div>
          <div className="p-3 col-3 shadow">
            <h4>Protected Purchase with Mercado Pago</h4>
            <div className="">
              <p>Receive the product you were expecting or your money back.</p>
              <p>Learn more about warranty</p>
            </div>
          </div>
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
