import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function Cart({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="ms-auto">
      <Button onClick={handleShow} className="me-2" variant="outline-success">
        <img
          style={{ height: "1.5rem" }}
          className="img-fluid"
          src="https://www.svgrepo.com/show/80543/shopping-cart-outline.svg"
          alt="cart"
        />
        {name}
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
            <div>
              <h5>Bicicleta Electrica</h5>
              <div>
                <p>U$S 500</p>
                <p>cant</p>
              </div>
            </div>
          </div>
          <hr />

          <div className="d-flex align-items-end">...</div>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
export default Cart;
