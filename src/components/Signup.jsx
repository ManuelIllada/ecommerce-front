import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { toast } from "react-hot-toast";

function SignUp() {
  const notifySuccess = (message) =>
    toast.success(message, {
      duration: 2000,
      position: "bottom-right",
    });
  const notifyError = (error) =>
    toast.error(error, {
      duration: 3000,
      position: "bottom-right",
    });
  const [inputFirstname, setInputFirstname] = useState("");
  const [inputLastname, setInputLastname] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputAvatar, setInputAvatar] = useState("");
  /* const user = useSelector((state) => state.user); */
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("firstname", inputFirstname);
    formData.append("lastname", inputLastname);
    formData.append("email", inputEmail);
    formData.append("address", inputAddress);
    formData.append("password", inputPassword);
    formData.append("phone", inputPhone);
    formData.append("avatar", inputAvatar);

    const response = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/users`,
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    response.data.message
      ? notifySuccess(response.data.message)
      : notifyError(response.data.error);

    navigate(-1);
  };

  return (
    <>
      <MDBContainer
        fluid
        className="d-flex justify-content-center overflow-y-auto pb-5 pt-3 px-5 bg-image vh-100"
        style={{
          backgroundImage:
            'url("https://wallpapercrafter.com/desktop/34708-BMW-Motorrad-Concept-Link-Electric-bike-HD-4k.jpg")',
        }}
      >
        <MDBRow>
          <MDBCol
            md="6"
            className="text-center text-md-start d-flex flex-column pt-5"
          >
            <Link to={"/"} className="text-body text-white">
              <h5 className=" text-white">
                <i className="fas fa-long-arrow-alt-left me-2 text-white"></i>
                Go Home
              </h5>
            </Link>
            <h1 className="my-5 display-3 fw-bold ls-tight px-3 text-white">
              Connen™ <br />
              <span>The best offer</span>
            </h1>

            <p
              className="px-3 text-white"
              style={{ color: "hsl(217, 10%, 50.8%)" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              itaque accusantium odio, soluta, corrupti aliquam quibusdam
              tempora at cupiditate quis eum maiores libero veritatis? Dicta
              facilis sint aliquid ipsum atque?
            </p>
          </MDBCol>

          <MDBCol md="6" className="pt-5">
            <MDBCard style={{ opacity: "85%" }}>
              <MDBCardBody className="p-5">
                <form onSubmit={(event) => handleSubmit(event)}>
                  <MDBInput
                    className="form-control"
                    wrapperClass="mb-3"
                    label="Firstname"
                    id="firstname"
                    name="firstname"
                    value={inputFirstname}
                    onChange={(event) => setInputFirstname(event.target.value)}
                  />
                  <MDBInput
                    wrapperClass="mb-3"
                    label="Lastname"
                    id="lastname"
                    className="form-control"
                    name="lastname"
                    value={inputLastname}
                    onChange={(event) => setInputLastname(event.target.value)}
                  />
                  <MDBInput
                    wrapperClass="mb-3"
                    label="Email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={inputEmail}
                    onChange={(event) => setInputEmail(event.target.value)}
                  />
                  <MDBInput
                    className="form-control"
                    wrapperClass="mb-3"
                    label="Address"
                    id="address"
                    name="address"
                    value={inputAddress}
                    onChange={(event) => setInputAddress(event.target.value)}
                  />
                  <MDBInput
                    wrapperClass="mb-3"
                    label="Password"
                    className="form-control"
                    id="password"
                    name="password"
                    type="password"
                    value={inputPassword}
                    onChange={(event) => setInputPassword(event.target.value)}
                  />
                  <MDBInput
                    wrapperClass="mb-3"
                    label="Cell Phone"
                    id="phone"
                    className="form-control"
                    name="phone"
                    value={inputPhone}
                    onChange={(event) => setInputPhone(event.target.value)}
                  />
                  <MDBInput
                    wrapperClass="mb-3"
                    id="avatar"
                    name="avatar"
                    type="file"
                    className="form-control"
                    onChange={(event) => setInputAvatar(event.target.files[0])}
                  />

                  <div className="d-flex justify-content-center mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Subscribe to our newsletter"
                    />
                  </div>
                  <MDBBtn
                    className="w-100 mb-4"
                    size="md"
                    id="submit-btn"
                    type="submit"
                    style={{ backgroundColor: "rgb(65, 61, 61)" }}
                  >
                    Sign Up
                  </MDBBtn>
                </form>
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <p>Already have an account?</p>
                    <Link to="/LogIn" className="ms-2 link-secondary">
                      Sign In
                    </Link>
                  </div>
                  <p>or Sign Up with:</p>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "rgb(65, 61, 61)" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "rgb(65, 61, 61)" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "rgb(65, 61, 61)" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "rgb(65, 61, 61)" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}
export default SignUp;
