import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Cart from "./Cart";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
            <Form className="d-flex me-3">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ height: "1.5rem", width: "1.5rem" }}
                  fill="currentColor"
                  color="white"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </Button>
            </Form>
            <Cart />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;
