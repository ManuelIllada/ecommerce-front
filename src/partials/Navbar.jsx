import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
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
    <div className="container">
      <Navbar
        className="navbar navbar-expand-md navbar-expand-lg fixed-top navbar-scroll"
        bg="dark"
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand href="#">SoFlow</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {category.map((item) => (
                <Link
                  state={item}
                  key={item.id}
                  to={`/category/${item.name}`}
                  className="text-decoration-none ms-2"
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
                <Button variant="outline-success">
                  <img
                    src="https://images.vexels.com/media/users/3/143356/isolated/preview/64e14fe0195557e3f18ea3becba3169b-buscar-lupa.png"
                    alt=""
                    style={{ height: "1.5rem" }}
                  />
                </Button>
              </Form>
              <Cart />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
