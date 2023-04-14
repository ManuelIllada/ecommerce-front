import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaOpencart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteElement } from "../redux/productsCartSlice";

function Cart({ name, ...props }) {
  const stateCart = useSelector((state) => state.productCart);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleDeleteElement = (id) => {
    dispatch(deleteElement({ id }));
  };
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
        className="img-fluid bg-dark bg-opacity-75 pt-5"
      >
        <Offcanvas.Header closeButton>
          <Link to={"/cart"}>
            <Button
              onClick={handleShow}
              className="m-2 p-2 text-white opacity-75 hover"
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
                <div className="col-4 rounded hover-zoom d-flex align-items-center justify-content-center p-2">
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
                  <div className="col-12 d-flex align-items-center p-3">
                    <p className="m-0" style={{ fontSize: 20 }}>
                      {item.category.name}{" "}
                    </p>
                    <span
                      onClick={() => {
                        handleDeleteElement(item.id);
                      }}
                      role="button"
                      className="cursor-pointer ms-auto"
                    >
                      <i className="fas fa-trash-alt text-danger"></i>
                    </span>
                  </div>
                  <div className="col-6 d-flex justify-content-start align-items-end">
                    <p className="m-1" style={{ fontSize: 15 }}>
                      x{item.quantity}
                    </p>
                  </div>
                  <div className="col-6 opacity-75 d-flex justify-content-end align-items-end">
                    <p className="m-1" style={{ fontSize: 16 }}>
                      ${item.price}
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
