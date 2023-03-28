import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "./Cart";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaUserAstronaut } from "react-icons/fa";
function NavBar() {
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
    if (window.scrollY >= 100) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div>
      <Navbar
        className={`navbar navbar-expand-md navbar-expand-lg fixed-top shadow-none ${
          background ? "bg-black" : "bg-transparent"
        } `}
        style={{ height: "3rem" }}
        expand="lg"
      >
        <Navbar.Brand className="text-white mx-5 fs-2" href="/">
          <img
            className="col-lg-12 col-12 pt-2 pb-2"
            style={{ height: "4rem" }}
            src="https://cdn.discordapp.com/attachments/992571782294929533/1089839115530412063/logo.png"
            alt="logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll "
          style={{ backgroundColor: "white" }}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 gap-4 fw-bold" navbarScroll>
            {category.map((item) => (
              <Link
                state={item}
                key={item.id}
                to={`/${item.slug}`}
                className="text-decoration-none ms-2 text-white"
              >
                {item.name}
              </Link>
            ))}
          </Nav>
          <div className="d-flex">
            <Link
              to={`/about`}
              className="text-decoration-none mt-2 me-4 text-white fw-bold"
            >
              About Us
            </Link>
            <Link
              to={`/login`}
              className="text-decoration-none mt-2 me-4 text-white fw-bold"
            >
              <FaUserAstronaut />
            </Link>

            <Cart />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
