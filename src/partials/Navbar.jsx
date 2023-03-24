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

  return (
    <div>
      <Navbar
        className="navbar navbar-expand-md navbar-expand-lg fixed-top shadow-none"
        bg="transparent"
        style={{ height: "3rem" }}
        expand="lg"
      >
        <Navbar.Brand className="text-white mx-5" href="/">
          SoFlow
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll "
          style={{ backgroundColor: "white" }}
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 " navbarScroll>
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
            <Form className="d-flex me-3">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-dark">
                <img
                  src="https://svgsilh.com/svg/1093183.svg"
                  alt=""
                  style={{ height: "1.5rem" }}
                  variant="outline-light"
                />
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
