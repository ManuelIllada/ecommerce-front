import Offcanvas from "react-bootstrap/Offcanvas";
import { TbTruckDelivery } from "react-icons/tb";
import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function ShopList({ user }) {
  const [show, setShow] = useState(false);
  const [orders, setOrders] = useState([]);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  useEffect(() => {
    const getOrders = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/orders/${user.id}`,
      });

      setOrders(response.data);
    };

    getOrders();
  }, []);
  let numerito = 1;
  const incrementarNumerito = () => {
    numerito = numerito + 1;
  };
  return (
    <>
      <div onClick={toggleShow} className="link-dark dropdown-item text-white">
        ShopList
      </div>

      <Offcanvas
        scroll="true"
        placement="end"
        show={show}
        onHide={handleClose}
        className="img-fluid bg-black bg-opacity-25 pt-5"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3 className="text-white" style={{ font: "BlinkMacSystemFont" }}>
              Order List
            </h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-white ">
          <div className="accordion " id="accordionExample">
            <div className="accordion-item bg-black bg-opacity-25 text-white">
              {orders.length > 0 &&
                orders.map((order) => (
                  <div>
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button collapsed bg-black bg-opacity-25 text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <div className="col-6">
                          Order {numerito}
                          <TbTruckDelivery
                            className="ms-3"
                            style={{ fontSize: 40 }}
                          />
                        </div>
                        <div className="col-6 d-flex justify-content-end align-items-center">
                          {order.status.name}
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      data-bs-parent="#accordionExample"
                    >
                      {order.products.map((product) => (
                        <div className="accordion-body d-flex justify-conten-between align-items-center row">
                          <div className="col-10">{product.name}</div>
                          <div className="col-2">${product.price}</div>
                        </div>
                      ))}
                    </div>
                    {incrementarNumerito()}
                  </div>
                ))}
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ShopList;
