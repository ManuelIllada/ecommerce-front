import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiFillEdit } from "react-icons/ai";

function ProfileEdit({ user }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <>
      <div onClick={toggleShow} class="link-secondary dropdown-item text-white">
        {user.firstname}
      </div>

      <Offcanvas
        scroll="true"
        backdrop="true"
        placement="end"
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <h3>Profile Edit</h3>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <table className="table ">
            <thead>
              <tr className="text-center">
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td>
                  <div>Avatar</div>

                  <img
                    src={user.avatar}
                    className="img-fluid"
                    alt="avatar"
                    style={{
                      height: "4rem",
                      width: "4rem",
                    }}
                  />
                </td>
                <td>
                  <AiFillEdit className="text-primary" />
                </td>
              </tr>
              <tr className="">
                <td>
                  <div>Firstame</div>
                  {user.firstname}{" "}
                </td>
                <td>
                  <AiFillEdit className="text-primary" />
                </td>
              </tr>
              <tr className="">
                <td>
                  <div>Lastname</div>
                  {user.lastname}{" "}
                </td>
                <td>
                  <AiFillEdit className="text-primary" />
                </td>
              </tr>
              <tr className="">
                <td>
                  <div>Email</div>
                  {user.email}{" "}
                </td>
                <td>
                  <AiFillEdit className="text-primary" />
                </td>
              </tr>
              <tr className="">
                <td>
                  <div>Address</div>
                  {user.address}{" "}
                </td>
                <td>
                  <AiFillEdit className="text-primary" />
                </td>
              </tr>
              <tr className="">
                <td>
                  <div>Phone</div>
                  {user.phone}{" "}
                </td>
                <td>
                  <AiFillEdit className="text-primary" />
                </td>
              </tr>
            </tbody>
          </table>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ProfileEdit;
