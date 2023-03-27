import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

function Cart({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="ms-auto">
      <Button onClick={handleShow} className="me-2" variant="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ height: "1.5rem", width: "1.5rem" }}
          fill="currentColor"
          className="bi bi-cart4"
          color="white"
          viewBox="0 0 20 20"
        >
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
        </svg>
      </Button>
      <Offcanvas placement="end" show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="d-flex align-items-center">
            <img
              src="https://f.fcdn.app/imgs/c759cc/scott-montevideo.com.uy/bscouy/a575/original/catalogo/E-MOB_112_1/460_460/s-pro-e-mob-29-rojo-negro.jpg"
              alt="compra"
              style={{ height: "10rem" }}
            />
            <div className="ms-4 mt-3">
              <h5>Electronic Bike</h5>
              <div>
                <p>U$S 500</p>
                <p></p>
              </div>
            </div>
          </div>
          <hr />

          <div className="d-flex align-items-end">...</div>
          <Link to={"/cart"}>
            <Button onClick={handleShow} className="me-2" variant="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ height: "1.5rem", width: "1.5rem" }}
                fill="currentColor"
                className="bi bi-cart4"
                color="black"
                viewBox="0 0 20 20"
              >
                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
              </svg>
            </Button>
          </Link>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
export default Cart;
