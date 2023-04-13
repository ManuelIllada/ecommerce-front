import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiFillEdit } from "react-icons/ai";
import { edit } from "../redux/userSlice";
/* import { actualize } from "../redux/resetSlice"; */
/* import { Link } from "react-router-dom"; */

function ProfileEdit({ user }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [avatar, setAvatar] = useState(user.avatar);
  const [firstname, setFirstname] = useState(user.firstname);
  const [lastname, setLastname] = useState(user.lastname);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.address);
  const [phone, setPhone] = useState(user.phone);

  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  useEffect(() => {
    setAvatar(user.avatar);
    setFirstname(user.firstname);
    setLastname(user.lastname);
    setEmail(user.email);
    setAddress(user.address);
    setPhone(user.phone);
  }, [user]);
  const patchUser = async (e) => {
    dispatch(edit({ avatar, firstname, lastname, email, address, phone }));
    /*  dispatch(actualize()); */
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", avatar);
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("phone", phone);

    await axios({
      url: `${process.env.REACT_APP_API_URL}/users/${user.id}`,
      method: "PATCH",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };
  const avatarOk = () => {
    if (typeof user.avatar === "string" && user.avatar.includes("https://")) {
      return user.avatar;
    } else {
      return `${process.env.REACT_APP_API_URL}/img/${user.avatar}`;
    }
  };

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
                    {
                      <img
                        src={avatarOk()}
                        className=" img-fluid object-fit-cover rounded"
                        alt="avatar"
                        style={{ height: "4rem", width: "4rem" }}
                      />
                    }
                    <input
                      type="file"
                      className="form-control w-50"
                      name="avatar"
                      onChange={(event) => setAvatar(event.target.files[0])}
                    />
                  </div>
                  <button
                    type="button"
                    className="col-2 btn btn-success btn-block btn-lg"
                    id="checkout"
                    onClick={patchUser}
                  >
                    <div className="d-flex justify-content-end align-items-center">
                      <AiFillEdit className="text-light opacity-50" size="25" />
                    </div>
                  </button>
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
                <div className="p-0 accordion-body d-flex justify-content-center align-items-center row">
                  <form className="col-10">
                    <input
                      onChange={(e) => setFirstname(e.target.value)}
                      type="firstname"
                      id="firstname"
                      name="firstname"
                      className="form-control form-control-lg bg-black bg-opacity-75 text-light"
                      placeholder={user.firstname}
                    />
                    <label
                      className="form-label text-light"
                      htmlFor="typeName"
                    ></label>
                  </form>

                  <button
                    type="button"
                    className="col-2 btn btn-success btn-block btn-lg"
                    id="checkout"
                    onClick={patchUser}
                  >
                    <div className="d-flex justify-content-end align-items-center">
                      <AiFillEdit className="text-light opacity-50" size="25" />
                    </div>
                  </button>
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
                <div className="p-0 accordion-body d-flex justify-content-center align-items-center row">
                  <form className="col-10">
                    <input
                      onChange={(e) => setLastname(e.target.value)}
                      type="lastname"
                      id="lastname"
                      name="lastname"
                      className="form-control form-control-lg bg-black bg-opacity-75 text-light"
                      placeholder={user.lastname}
                    />
                    <label
                      className="form-label text-light"
                      htmlFor="typeName"
                    ></label>
                  </form>

                  <button
                    type="button"
                    className="col-2 btn btn-success btn-block btn-lg"
                    id="checkout"
                    onClick={patchUser}
                  >
                    <div className="d-flex justify-content-end align-items-center">
                      <AiFillEdit className="text-light opacity-50" size="25" />
                    </div>
                  </button>
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
                <div className="p-0 accordion-body d-flex justify-content-center align-items-center row">
                  <form className="col-10">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      id="email"
                      name="email"
                      className="form-control form-control-lg bg-black bg-opacity-75 text-light"
                      placeholder={user.email}
                    />
                    <label
                      className="form-label text-light"
                      htmlFor="typeName"
                    ></label>
                  </form>

                  <button
                    type="button"
                    className="col-2 btn btn-success btn-block btn-lg"
                    id="checkout"
                    onClick={patchUser}
                  >
                    <div className="d-flex justify-content-end align-items-center">
                      <AiFillEdit className="text-light opacity-50" size="25" />
                    </div>
                  </button>
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
                <div className="p-0 accordion-body d-flex justify-content-center align-items-center row">
                  <form className="col-10">
                    <input
                      onChange={(e) => setAddress(e.target.value)}
                      type="address"
                      id="address"
                      name="address"
                      className="form-control form-control-lg bg-black bg-opacity-75 text-light"
                      placeholder={user.address}
                    />
                    <label
                      className="form-label text-light"
                      htmlFor="typeName"
                    ></label>
                  </form>

                  <button
                    type="button"
                    className="col-2 btn btn-success btn-block btn-lg"
                    id="checkout"
                    onClick={patchUser}
                  >
                    <div className="d-flex justify-content-end align-items-center">
                      <AiFillEdit className="text-light opacity-50" size="25" />
                    </div>
                  </button>
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
                <div className="p-0 accordion-body d-flex justify-content-center align-items-center row">
                  <form className="col-10">
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      type="phone"
                      id="phone"
                      name="phone"
                      className="form-control form-control-lg bg-black bg-opacity-75 text-light"
                      placeholder={user.phone}
                    />
                    <label
                      className="form-label text-light"
                      htmlFor="typeName"
                    ></label>
                  </form>

                  <button
                    type="button"
                    className="col-2 btn btn-success btn-block btn-lg"
                    id="checkout"
                    onClick={patchUser}
                  >
                    <div className="d-flex justify-content-end align-items-center">
                      <AiFillEdit className="text-light opacity-50" size="25" />
                    </div>
                  </button>
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
