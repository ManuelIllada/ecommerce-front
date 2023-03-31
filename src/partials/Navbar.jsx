import React from "react";
import Cart from "./Cart";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserAstronaut } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { RxDropdownMenu } from "react-icons/rx";
import { Button } from "react-bootstrap";
import { logOut } from "../redux/userSlice";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [background, setBackground] = useState(false);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/categories`,
      });
      setCategory(response.data);
    };
    getCategory();
  }, []);
  const changeBackground = () => {
    if (window.scrollY > 100) {
      setBackground(true);
    } else if (window.innerWidth < 992 && window.scrollY < 100) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };
  window.addEventListener("resize", changeBackground);
  window.addEventListener("scroll", changeBackground);
  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <nav
      id="prueba"
      className={` fixed-top navbar navbar-expand-lg ${
        background ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            className="col-lg-12 col-12"
            style={{ height: "3rem" }}
            src="https://cdn.discordapp.com/attachments/992571782294929533/1089839115530412063/logo.png"
            alt="logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>
            <RxDropdownMenu size={40} color="white" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-align-right">
            {category.map((item) => (
              <li
                key={item.id}
                className="nav-item ms-3 d-flex justify-content-end"
              >
                <Link
                  state={item}
                  key={item.id}
                  to={`/${item.slug}`}
                  className="text-decoration-none  text-white fw-bold "
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-3 d-flex justify-content-end">
              <AiOutlineSearch
                className="text-decoration-none text-white fw-bold"
                size={24}
              />
            </li>

            <li className="nav-item ms-3 d-flex justify-content-end">
              <div>
                <Button className="bg-transparent p-0 me-auto" variant="link">
                  <Cart />
                </Button>
              </div>
            </li>

            <li className="nav-item ms-3 d-flex justify-content-end">
              <Link
                to={`/login`}
                className="text-decoration-none text-white fw-bold"
              >
                <FaUserAstronaut size={20} />
              </Link>
            </li>
            <li className="d-flex justify-content-end nav-item ms-3">
              <Button
                onClick={() => handleLogOut()}
                className="bg-transparent p-0 m-1 text-white  "
                variant="link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-box-arrow-right bg-transparent"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                  />
                </svg>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
