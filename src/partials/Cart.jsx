import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaOpencart } from "react-icons/fa";
import CloseButton from "react-bootstrap/CloseButton";

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
                className="d-flex align-items-center mb-2 text-white border p-2 "
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title={item.name}
              >
                <div className="col-5 hover-zoom">
                  <Link to={`/${item.category.slug}/${item.slug}`} state={item}>
                    <img
                      src={item.media[0]}
                      className="img-fluid rounded"
                      alt={item.name}
                      style={{ height: "5rem" }}
                    />
                  </Link>
                </div>
                <div className=" mt-3 col-5">
                  <div>
                    <p>U$S {item.price}</p>
                  </div>
                  <div>
                    <p>Quantity: {item.quantity}</p>
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
