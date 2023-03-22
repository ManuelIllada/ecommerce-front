import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function NavBar({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <nav className="navbar navbar-expand-md bg-dark">
        <div>
          <a className="ms-4" href="/home">
            <img
              className="logo-minimal lazyloaded"
              src="https://www.soflow.com/app/themes/so-flow/assets/img/logo-minimal.svg"
              alt="Europe"
              data-ll-status="loaded"
            />
          </a>
        </div>
        <div className="d-flex gap-4 ms-5 ">
          <a
            href="/e-scooter"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h5>E-SCOOTER</h5>
          </a>
          <a
            href="/e-scooter"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h5>E-BIKE</h5>
          </a>
          <a
            href="/e-scooter"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h5>E-BOARD</h5>
          </a>
          <a
            href="/e-scooter"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h5>JUST FOR FUN</h5>
          </a>
          <a
            href="/e-scooter"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h5>SPARE PARTS</h5>
          </a>
          <a
            href="/e-scooter"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h5>ACCESORIES</h5>
          </a>
          <a
            href="/e-scooter"
            style={{ textDecoration: "none", color: "white" }}
          >
            <h5>SUPPORT</h5>
          </a>
        </div>
        <div className="ms-auto">
          <Button variant="primary" onClick={handleShow} className="me-2">
            <img
              style={{ height: "1.5rem" }}
              className="img-fluid"
              src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg"
              alt="cart"
            />
            {name}
          </Button>
          <Offcanvas show={show} onHide={handleClose} {...props}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
