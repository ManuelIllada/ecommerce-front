import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
/* import { useSelector } from "react-redux"; */
import axios from "axios";

function SignUp() {
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
    const response = await axios({
      method: "post",
      /* headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-Type": "multipart/form-data",
      }, */
      url: "http://localhost:8000/users",
      data: {
        firstname: inputFirstname,
        lastname: inputLastname,
        email: inputEmail,
        address: inputAddress,
        password: inputPassword,
        phone: inputPhone,
        avatar: inputAvatar,
      },
    });
    console.log(response);
    navigate("/login");
  };

  return (
    <section id="background-section" className="vh-100">
      <div className="container text-center p-5">
        <div className="row m-5 g-0  bg-white d-flex justify-content-center">
          <div className="col-sm-12 col-md-7 col-lg-5 pb-5 pt-5 text-center border">
            <h1>Sign up</h1>
            Create and account
            <form onSubmit={handleSubmit}>
              <div className="m-3">
                <input
                  name="firstname"
                  type="text"
                  className="form-control"
                  id="firstname"
                  placeholder="First name"
                  value={inputFirstname}
                  onChange={(event) => setInputFirstname(event.target.value)}
                />
              </div>
              <div className="m-3">
                <input
                  name="lastname"
                  type="text"
                  className="form-control"
                  id="lastname"
                  placeholder="Last name"
                  value={inputLastname}
                  onChange={(event) => setInputLastname(event.target.value)}
                />
              </div>
              <div className="m-3">
                <input
                  name="email"
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  value={inputEmail}
                  onChange={(event) => setInputEmail(event.target.value)}
                />
              </div>
              <div className="m-3">
                <input
                  name="address"
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Address"
                  value={inputAddress}
                  onChange={(event) => setInputAddress(event.target.value)}
                />
              </div>
              <div className="m-3">
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  value={inputPassword}
                  onChange={(event) => setInputPassword(event.target.value)}
                />
              </div>
              <div className="m-3">
                <input
                  name="phone"
                  type="phone"
                  className="form-control"
                  id="phone"
                  placeholder="Phone"
                  value={inputPhone}
                  onChange={(event) => setInputPhone(event.target.value)}
                />
              </div>
              <div className="m-3">
                <input
                  className="form-control"
                  multiple
                  name="avatar"
                  type="file"
                  id="avatar"
                  onChange={(event) => setInputAvatar(event.target.files[0])}
                />
              </div>
              <div className="d-grid gap-2">
                <button
                  id="submit-btn"
                  type="submit"
                  className="btn btn-info m-3 text-light"
                >
                  Sign up
                </button>
              </div>
            </form>
            <span className="m-3">
              Already have an account? <Link to="/login">Sign in</Link>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
export default SignUp;
