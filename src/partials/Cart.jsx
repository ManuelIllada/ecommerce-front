import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaOpencart } from "react-icons/fa";

function Cart({ name, ...props }) {
  const stateCart = useSelector((state) => state.productCart);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <FaOpencart
        onClick={handleShow}
        className="text-decoration-none text-white fw-bold "
        size={25}
      />

      <Offcanvas
        placement="end"
        show={show}
        onHide={handleClose}
        {...props}
        className="img-fluid"
        style={{
          backgroundImage:
            'url("https://cdn.discordapp.com/attachments/992571782294929533/1091085727468621934/mars-plex-Rqqh0DH_3js-unsplash.jpg")',
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-white">
            <h3>My Cart</h3>
          </Offcanvas.Title>
          <Link to={"/cart"}>
            <Button
              onClick={handleShow}
              className=" p-1 me-2 text-white"
              variant="dark"
              size="sm"
            >
              Go to Cart
            </Button>
          </Link>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {stateCart &&
            stateCart.map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center mb-2 text-white bg-dark bg-opacity-50 rounded py-2 px-4 "
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title={item.name}
              >
                <div className="col-4 rounded bg-light bg-opacity-25 hover-zoom d-flex align-items-center justify-content-center p-2">
                  <Link to={`/${item.category.slug}/${item.slug}`} state={item}>
                    <img
                      src={item.media[0]}
                      className="img-fluid"
                      alt={item.name}
                      style={{ height: "5rem" }}
                    />
                  </Link>
                </div>
                <div className="col-8 rounded my-2 mx-1 row">
                  <div className="col-12 d-flex align-items-center justify-content-start p-3">
                    <p className="m-0" style={{ fontSize: 20 }}>
                      {item.category.name}: {item.name}
                    </p>
                  </div>
                  <div className="col-6 d-flex justify-content-start align-items-end">
                    <p className="m-1" style={{ fontSize: 15 }}>
                      x{item.quantity}
                    </p>
                  </div>
                  <div className="col-6 opacity-75 d-flex justify-content-end align-items-end">
                    <p className="m-1" style={{ fontSize: 16 }}>
                      U$S {item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
export default Cart;
