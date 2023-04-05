import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { TbTruckDelivery } from "react-icons/tb";

function ShopList({ user }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <div onClick={toggleShow} class="link-secondary dropdown-item text-white">
        ShopList
      </div>

      <Offcanvas
        scroll="true"
        placement="end"
        show={show}
        onHide={handleClose}
        className="img-fluid"
        style={{
          backgroundImage:
            'url("https://cdn.discordapp.com/attachments/992571782294929533/1091085727468621934/mars-plex-Rqqh0DH_3js-unsplash.jpg")',
        }}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-white">
            <h3>Profile Edit</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-white ">
          <div className="accordion " id="accordionExample">
            <div className="accordion-item bg-dark bg-opacity-50 text-white">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-dark bg-opacity-25 text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <div className="col-6">
                    Order #1
                    <TbTruckDelivery
                      className="ms-3"
                      style={{ fontSize: 40 }}
                    />
                  </div>
                  <div className="col-6 d-flex justify-content-end align-items-center">
                    In Coming
                  </div>
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body d-flex justify-conten-between align-items-center row">
                  Lista de productos del pedido
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ShopList;
