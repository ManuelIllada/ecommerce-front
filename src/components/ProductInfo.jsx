import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../partials/Navbar";
import { addToCart } from "../redux/productsCartSlice";
import "./ProductInfo.css";
import { useState } from "react";
import { Modal, Carousel } from "react-bootstrap";
import Footer from "../partials/Footer";
import { toast } from "react-hot-toast";
import { FaOpencart } from "react-icons/fa";

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
      dispatch(addToCart(item));
    } else if (match && item.stock > itemStore.quantity) {
      dispatch(addToCart(item));
    } else {
      toast.error("No tenemos mas Stock disponible 😢", {
        position: "bottom-right",
        duration: 3000,
      });
    }
  };

  const handleBuy = (item) => {
    const match = stateCart.some((product) => item.id === product.id);
    const itemStore = stateCart.find((product) => item.id === product.id);
    if (item.stock > 0 && !match) {
      dispatch(addToCart(item));
      navigate("/cart");
    } else if (match && item.stock > itemStore.quantity) {
      dispatch(addToCart(item));

      navigate("/cart");
    } else {
      toast.error("No tenemos mas Stock disponible 😢", {
        position: "bottom-right",
        duration: 3000,
      });
    }
  };

  const handleClick = (item) => {
    setShowedImage(item);
  };

  const itemOk = (item) => {
    if (typeof item === "string" && item.includes("https://")) {
      return item;
    } else {
      return `${process.env.REACT_APP_API_URL}/img/${item}`;
    }
  };

  return (
    <>
      <body style={{ backgroundColor: "rgb(63, 65, 61)" }}>
        <section style={{ backgroundColor: "rgb(63, 65, 61)" }}>
          <NavBar />
        </section>
        <div
          className="p-5 text-center bg-image hero-container "
          style={{
            backgroundImage:
              "url('https://cdn.discordapp.com/attachments/852698000890658876/1095357036595777586/berkay-gumustekin-hRg1KL4-AUE-unsplash.jpg')",
            backgroundPosition: "bottom",
            width: "100%",
            height: "16rem",
          }}
        ></div>
        <section className="container d-flex justify-content-center align-items-center  p-5">
          <div className=" col-12 col-md-6 col-lg-4 my-5">
            <div className="row">
              <div className="col-3">
                {media.map((item) => (
                  <div
                    key={item}
                    className="preView m-3"
                    onMouseOver={() => handleClick(item)}
                  >
                    <img
                      src={itemOk(item)}
                      alt={name}
                      className="img-fluid object-fit-cover bg-dark rounded bg-opacity-25 shadow"
                      style={{ width: "3rem", height: "3rem" }}
                    />
                  </div>
                ))}
              </div>
              <div className="col-9  imageZoom ">
                <img
                  src={itemOk(showedImage)}
                  alt={name}
                  className="img-fluid object-fit-cover bg-dark rounded bg-opacity-25 shadow"
                  onClick={handleShow}
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-8 col-12  d-flex justify-content-center align-items-center flex-column  ms-5 text-center  shadow">
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
                + <FaOpencart size={25} />
              </button>
            </div>
          </div>
        </section>
        <hr className="mx-5" />
        <div className=" text-white container d-flex justify-content-around my-5">
          <div className="p-3 col-3 shadow text-center">
            <h4 className="semi-bold">Payment Methods</h4>
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
          <div className="p-3 col-3 shadow text-center">
            <h4>Protected Purchase with Mercado Pago</h4>
            <div>
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
