import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiFillEdit } from "react-icons/ai";

function ProfileEdit({ user }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <div
        onClick={toggleShow}
        className="link-secondary dropdown-item text-white"
      >
        {user.firstname}
      </div>

      <Offcanvas
        scroll="true"
        placement="end"
        show={show}
        onHide={handleClose}
        className="img-fluid bg-dark bg-opacity-75 pt-5"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3
              className="text-white opacity-75"
              style={{ font: "BlinkMacSystemFont" }}
            >
              Profile Edit
            </h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="accordion " id="accordionExample">
            <div className="accordion-item bg-dark bg-opacity-50 text-white">
              <h2 className="accordion-header">
                <button
                  className="accordion-button bg-dark bg-opacity-25 text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Avatar
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body d-flex justify-conten-between align-items-center row">
                  <div className="col-6">
                    <img
                      src={user.avatar}
                      className="img-fluid rounded"
                      alt="avatar"
                      style={{
                        height: "4rem",
                        width: "4rem",
                      }}
                    />
                  </div>
                  <div className="col-6 d-flex justify-content-end align-items-center">
                    <AiFillEdit className="text-light opacity-50" size="25" />
                  </div>
                </div>
              </div>
            </div>
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
                  Firstname
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body d-flex justify-conten-between align-items-center row">
                  <div className="col-6">{user.firstname}</div>
                  <div className="col-6 d-flex justify-content-end align-items-center">
                    <AiFillEdit className="text-light opacity-50" size="25" />
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item bg-dark bg-opacity-50 text-white">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-dark bg-opacity-25 text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Lastname
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body d-flex justify-conten-between align-items-center row">
                  <div className="col-6">{user.lastname}</div>
                  <div className="col-6 d-flex justify-content-end align-items-center">
                    <AiFillEdit className="text-light opacity-50" size="25" />
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item bg-dark bg-opacity-50 text-white">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-dark bg-opacity-25 text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  Email
                </button>
              </h2>
              <div
                id="collapseFour"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body d-flex justify-conten-between align-items-center row">
                  <div className="col-6">{user.email}</div>
                  <div className="col-6 d-flex justify-content-end align-items-center">
                    <AiFillEdit className="text-light opacity-50" size="25" />
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item bg-dark bg-opacity-50 text-white">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-dark bg-opacity-25 text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  Address
                </button>
              </h2>
              <div
                id="collapseFive"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body d-flex justify-conten-between align-items-center row">
                  <div className="col-6">{user.address}</div>
                  <div className="col-6 d-flex justify-content-end align-items-center">
                    <AiFillEdit className="text-light opacity-50" size="25" />
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item bg-dark bg-opacity-50 text-white">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed bg-dark bg-opacity-25 text-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  Phone
                </button>
              </h2>
              <div
                id="collapseSix"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body d-flex justify-conten-between align-items-center row">
                  <div className="col-6">{user.phone}</div>
                  <div className="col-6 d-flex justify-content-end align-items-center">
                    <AiFillEdit className="text-light opacity-50" size="25" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ProfileEdit;
