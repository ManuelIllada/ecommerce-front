import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { setUser } from "../redux/userSlice";
import Navbar from "../partials/Navbar";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
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
    navigate("/");
  };

  return (
    <MDBContainer
      fluid
      className="p-4 bg-image vh-100"
      style={{
        backgroundImage:
          'url("https://wallpapercrafter.com/desktop/34708-BMW-Motorrad-Concept-Link-Electric-bike-HD-4k.jpg")',
      }}
    >
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <Link to={"/"} className="text-body text-white">
            <h5 className="mb-3 text-white">
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

        <MDBCol md="6">
          <MDBCard className="my-5 " style={{ opacity: "85%" }}>
            <form onSubmit={(event) => handleSubmit(event)}>
              <MDBCardBody className="p-5 ">
                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form1"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form1"
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
                  size="md"
                  type="submit"
                  style={{ backgroundColor: "rgb(65, 61, 61)" }}
                >
                  sign up
                </MDBBtn>

                <div className="text-center">
                  <p>or sign up with:</p>

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
            </form>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );

  // return (
  //   <div className="container p-4">
  //     <div className="row mt-5 justify-content-center">
  //       <div className="col-6">
  //         <form onSubmit={(event) => handleSubmit(event)}>
  //           <div className="form mb-4">
  //             <label className="form-label" htmlFor="email">
  //               Email address
  //             </label>
  //             <input
  //               name="email"
  //               type="email"
  //               id="email"
  //               className="form-control"
  //               value={email}
  //               onChange={(event) => setEmail(event.target.value)}
  //             />
  //           </div>

  //           <div className="form mb-4">
  //             <label className="form-label " htmlFor="password">
  //               Password
  //             </label>
  //             <input
  //               name="password"
  //               type="password"
  //               id="password"
  //               className="form-control"
  //               value={password}
  //               onChange={(event) => setPassword(event.target.value)}
  //             />
  //           </div>

  //           <div className="row mb-4">
  //             <div className="col d-flex justify-content-center"></div>
  //           </div>

  //           <button type="submit" className="btn btn-primary btn-block mb-4">
  //             Sign in
  //           </button>

  //           <div className="text-center">
  //             <p>
  //               Not a member? <Link to="/register">Register</Link>
  //             </p>
  //             <p>or sign up with:</p>
  //             <button type="button" className="btn btn-link btn-floating mx-1">
  //               <i className="fab fa-facebook-f"></i>
  //             </button>

  //             <button type="button" className="btn btn-link btn-floating mx-1">
  //               <i className="fab fa-google"></i>
  //             </button>

  //             <button type="button" className="btn btn-link btn-floating mx-1">
  //               <i className="fab fa-twitter"></i>
  //             </button>

  //             <button type="button" className="btn btn-link btn-floating mx-1">
  //               <i className="fab fa-github"></i>
  //             </button>
  //           </div>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );
}

export default Login;
