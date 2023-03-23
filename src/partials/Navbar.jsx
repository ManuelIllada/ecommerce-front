import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cart from "./Cart";

function NavBar() {
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
              <Nav.Link href="#action1">About Us</Nav.Link>
              <Nav.Link href="#action2">Support</Nav.Link>
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">E-SCOOTER</NavDropdown.Item>
                <NavDropdown.Item href="#action4">E-BIKE</NavDropdown.Item>
                <NavDropdown.Item href="#action5">E-BOARD</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  JUST FOR FUN
                </NavDropdown.Item>
              </NavDropdown>
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
