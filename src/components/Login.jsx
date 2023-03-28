import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { setUser } from "../redux/userSlice";
import Navbar from "../partials/Navbar";

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
    <div className="container p-4">
      <section>
        <Navbar />
      </section>
      <div className="row mt-5 justify-content-center">
        <div className="col-6">
          <form onSubmit={(event) => handleSubmit(event)}>
            <div className="form mb-4">
              <label className="form-label" htmlFor="email">
                Email address
              </label>
              <input
                name="email"
                type="email"
                id="email"
                className="form-control"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form mb-4">
              <label className="form-label " htmlFor="password">
                Password
              </label>
              <input
                name="password"
                type="password"
                id="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="row mb-4">
              <div className="col d-flex justify-content-center"></div>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign in
            </button>

            <div className="text-center">
              <p>
                Not a member? <Link>Register</Link>
              </p>
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
