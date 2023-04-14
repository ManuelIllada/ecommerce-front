import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  updateQuantity,
  deleteElement,
  EmptyCart,
} from "../redux/productsCartSlice";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

function Shop() {
  const notifySuccess = (message) =>
    toast.success(message, {
      duration: 2000,
      position: "bottom-right",
    });
  const notifyError = (error) =>
    toast.error(error, {
      duration: 2000,
      position: "bottom-right",
    });
  const navigate = useNavigate();
  const stateCart = useSelector((state) => state.productCart);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleUpdateQuantity = (value, id) => {
    dispatch(updateQuantity({ value, id }));
  };
  const handleDeleteElement = (id) => {
    dispatch(deleteElement({ id }));
  };

  const createNewOrder = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ products: stateCart, user: user }),
    }).then((res) => res.json());

    if (response.message) {
      notifySuccess(response.message);
      dispatch(EmptyCart());
      navigate("/thanks");
    } else {
      notifyError(response.error);
    }
  };
  const handleCheckoutClick = async () => {
    if (!user.token) {
      console.log("falta logear");
      Swal.fire({
        text: "Debe logearse para continuar",
        icon: "info",
        showDenyButton: true,
        denyButtonText: "No",
        confirmButtonText: "Si",
      }).then((response) => {
        if (response.isDenied) {
          console.log("negado..");
        } else {
          navigate("/login");
        }
      });
    } else {
      createNewOrder();
    }
  };

  /*   const response = await fetch(`${process.env.REACT_APP_API_URL}/order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ products: stateCart, user: user }),
      }).then((res) => res.json());
    console.log(response); */
  /*   if (user) {
      const tooltip = new window.bootstrap.Tooltip(
        document.getElementById("checkout"),
        {
          title: "¡Compra exitosa!",
          placement: "bottom",
          trigger: "click",
        }
      );
      tooltip.show();
      setTimeout(() => {
        tooltip.hide();
      }, 5000);
    } else {
      const tooltip = new window.bootstrap.Tooltip(
        document.getElementById("checkout"),
        {
          title: "Debes iniciar sesión para continuar",
          placement: "bottom",
          trigger: "click",
        }
      );
      tooltip.show();
      setTimeout(() => {
        tooltip.hide();
      }, 5000);
    } */

  const itemOk = (item) => {
    if (typeof item === "string" && item.includes("https://")) {
      return item;
    } else {
      return `${process.env.REACT_APP_API_URL}/img/${item}`;
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center py-2 overflow-y-auto p-4 bg-image vh-100"
      style={{
        backgroundImage:
          'url("https://wallpapercrafter.com/desktop/34708-BMW-Motorrad-Concept-Link-Electric-bike-HD-4k.jpg")',
      }}
    >
      <div className="container my-5 card  bg-light bg-opacity-50">
        <div className="card-body my-5 row">
          <div className="col-lg-7">
            <h5 className="mb-3">
              <Link to={"/"} className="text-body">
                <i className="fas fa-long-arrow-alt-left me-2"></i>
                Continue shopping
              </Link>
            </h5>
            <hr />

            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <p className="mb-1">Shopping cart</p>
                <p className="mb-0">
                  You have {stateCart.length} items in your cart
                </p>
              </div>
            </div>
            {stateCart.map((product) => (
              <div className="card mb-3" key={product.id}>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                      <div>
                        <img
                          src={itemOk(product.media[0])}
                          className="img-fluid rounded-3"
                          alt="Shopping item"
                          style={{ width: "65px" }}
                        />
                      </div>
                      <div className="ms-3">
                        <h5>{product.name}</h5>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center">
                    <div style={{ width: "75px" }}>
                      <input
                        className="w-75"
                        type="number"
                        min="1"
                        max={product.stock}
                        value={product.quantity}
                        onChange={(event) => {
                          handleUpdateQuantity(event.target.value, product.id);
                        }}
                      />
                    </div>
                    <div style={{ width: "80px" }}>
                      <h5 className="mb-0">
                        ${product.price * product.quantity}
                      </h5>
                    </div>
                    <div
                      onClick={() => {
                        handleDeleteElement(product.id);
                      }}
                      role="button"
                      className="cursor-pointer"
                    >
                      <i className="fas fa-trash-alt text-danger"></i>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-lg-5">
            <div className="card bg-black bg-opacity-75 text-white rounded-3">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h5 className="mb-0">Card details</h5>
                  <div>
                    <img
                      src={
                        user && user.avatar
                          ? itemOk(user.avatar)
                          : "https://icon-library.com/images/no-profile-picture-icon-female/no-profile-picture-icon-female-24.jpg"
                      }
                      className="img-fluid border border-white object-fit-cover rounded-circle"
                      style={{
                        height: "5rem",
                        width: "5rem",
                      }}
                      alt="Avatar"
                    />
                  </div>
                </div>

                <p className="small mb-2">Card type</p>
                <a href="#!" type="submit" className="text-white">
                  <i className="fab fa-cc-mastercard fa-2x me-2"></i>
                </a>
                <a href="#!" type="submit" className="text-white">
                  <i className="fab fa-cc-visa fa-2x me-2"></i>
                </a>
                <a href="#!" type="submit" className="text-white">
                  <i className="fab fa-cc-amex fa-2x me-2"></i>
                </a>
                <a href="#!" type="submit" className="text-white">
                  <i className="fab fa-cc-paypal fa-2x"></i>
                </a>

                <form className="mt-4">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      id="typeName"
                      className="form-control form-control-lg border border-white bg-black text-light"
                      siez="17"
                      placeholder="Cardholder's Name"
                    />
                    <label className="form-label text-light" htmlFor="typeName">
                      Cardholder's Name
                    </label>
                  </div>

                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control form-control-lg border border-white bg-black text-light"
                      siez="17"
                      placeholder="1234 5678 9012 3457"
                    />
                    <label className="form-label text-light" htmlFor="typeText">
                      Card Number
                    </label>
                  </div>

                  <div className="row mb-4">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control form-control-lg border border-white bg-black text-light"
                          placeholder="MM/YYYY"
                          size="7"
                        />
                        <label
                          className="form-label text-light"
                          htmlFor="typeExp"
                        >
                          Expiration
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control form-control-lg border border-white bg-black text-light"
                          placeholder="&#9679;&#9679;&#9679;"
                          size="1"
                        />
                        <label
                          className="form-label text-light"
                          htmlFor="typeText"
                        >
                          Cvv
                        </label>
                      </div>
                    </div>
                  </div>
                </form>

                <hr className="my-4" />

                <div className="d-flex justify-content-between">
                  <p className="mb-2">Subtotal</p>
                  <p className="mb-2">
                    $
                    {stateCart.reduce(
                      (accumulator, currentItem) =>
                        accumulator + currentItem.quantity * currentItem.price,
                      0
                    )}
                  </p>
                </div>

                <div className="d-flex justify-content-between">
                  <p className="mb-2">Shipping</p>
                  <p className="mb-2">
                    ${" "}
                    {stateCart.reduce(
                      (accumulator, currentItem) =>
                        accumulator + currentItem.quantity * 20,
                      0
                    )}
                  </p>
                </div>

                <div className="d-flex justify-content-between mb-4">
                  <p className="mb-2">Total(Incl. taxes)</p>
                  <p className="mb-2">
                    $
                    {stateCart.reduce(
                      (accumulator, currentItem) =>
                        accumulator +
                        (currentItem.quantity * currentItem.price +
                          currentItem.quantity * 20),
                      0
                    )}
                  </p>
                </div>

                <button
                  type="button"
                  className="btn btn-success btn-block btn-md"
                  id="checkout"
                  onClick={() => {
                    handleCheckoutClick();
                  }}
                >
                  <div className="d-flex justify-content-between">
                    <span>
                      $
                      {stateCart.reduce(
                        (accumulator, currentItem) =>
                          accumulator +
                          (currentItem.quantity * currentItem.price +
                            currentItem.quantity * 20),
                        0
                      )}
                    </span>
                    <span>
                      Checkout
                      <i className="fas fa-long-arrow-alt-right ms-2"></i>
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
