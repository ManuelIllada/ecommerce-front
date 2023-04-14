import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { setUser } from "../redux/userSlice";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios({
      url: `${process.env.REACT_APP_API_URL}/users/login`,
      data: { email, password },
      method: "POST",
    });
    console.log(response.data);
    dispatch(setUser(response.data));
    navigate(-1);
  };

  return (
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
            <h5 className="text-white">
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
            itaque accusantium odio, soluta, corrupti aliquam quibusdam tempora
            at cupiditate quis eum maiores libero veritatis? Dicta facilis sint
            aliquid ipsum atque?
          </p>
        </MDBCol>
        <MDBCol md="6" className="pt-5">
          <MDBCard className="my-5 " style={{ opacity: "85%" }}>
            <form onSubmit={(event) => handleSubmit(event)}>
              <MDBCardBody className="p-5 ">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
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
                  type="submit"
                  style={{ backgroundColor: "rgb(65, 61, 61)" }}
                >
                  Sign In
                </MDBBtn>
                <div className="text-center">
                  <div className="d-flex justify-content-center">
                    <p>Dont you have an account?</p>
                    <Link to="/SignUp" className="ms-2 link-secondary">
                      Sign Up
                    </Link>
                  </div>
                  <div className="d-flex justify-content-center">
                    <Link
                      to={"http://localhost:3005/"}
                      className="ms-2 link-secondary"
                    >
                      Go to Admin Panel
                    </Link>
                  </div>
                </div>
              </MDBCardBody>
            </form>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
