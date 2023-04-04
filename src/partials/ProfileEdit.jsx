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
          <div class="row border m-2">
            <div class="col-4  p-3 bg-body-black bg-opacity-50 rounded">
              Avatar
            </div>
            <div class="col-4 p-3  bg-body-black bg-opacity-50 rounded">
              <img
                src={user.avatar}
                className="img-fluid"
                alt="avatar"
                style={{
                  height: "4rem",
                  width: "4rem",
                }}
              />
            </div>
            <div class="col-4 p-3    bg-body-black bg-opacity-50 rounded">
              <AiFillEdit className="text-light" />
            </div>
          </div>
          <div class="row border m-2">
            <div class="col-4  p-3 bg-body-black bg-opacity-50 rounded">
              Firstname
            </div>
            <div class="col-4 p-3  bg-body-black bg-opacity-50 rounded">
              {user.firstname}
            </div>
            <div class="col-4 p-3    bg-body-black bg-opacity-50 rounded">
              <AiFillEdit className="text-light " />
            </div>
          </div>
          <div class="row border m-2">
            <div class="col-4  p-3 bg-body-black bg-opacity-50 rounded">
              Lastname
            </div>
            <div class="col-4 p-3  bg-body-black bg-opacity-50 rounded">
              {user.lastname}
            </div>
            <div class="col-4 p-3    bg-body-black bg-opacity-50 rounded">
              <AiFillEdit className="text-light" />
            </div>
          </div>
          <div class="row border m-2">
            <div class="col-4  p-3 bg-body-black bg-opacity-50 rounded">
              Email
            </div>
            <div class="col-4 p-3  bg-body-black bg-opacity-50 rounded">
              {user.email}
            </div>
            <div class="col-4 p-3    bg-body-black bg-opacity-50 rounded">
              <AiFillEdit className="text-light" />
            </div>
          </div>
          <div class="row border m-2">
            <div class="col-4  p-3 bg-body-black bg-opacity-50 rounded">
              Address
            </div>
            <div class="col-4 p-3  bg-body-black bg-opacity-50 rounded">
              {user.address}
            </div>
            <div class="col-4 p-3    bg-body-black bg-opacity-50 rounded">
              <AiFillEdit className="text-light" />
            </div>
          </div>
          <div class="row border m-2">
            <div class="col-4  p-3 bg-body-black bg-opacity-50 rounded">
              Phone
            </div>
            <div class="col-4 p-3  bg-body-black bg-opacity-50 rounded">
              {user.phone}
            </div>
            <div class="col-4 p-3    bg-body-black bg-opacity-50 rounded">
              <AiFillEdit className="text-light" />
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default ProfileEdit;
