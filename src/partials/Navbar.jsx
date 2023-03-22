import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Cart from "./Cart";

function NavBar() {
  return (
    <div>
      <Navbar
        className="navbar navbar-expand-md bg-dark navbar navbar-expand-lg fixed-top navbar-scroll"
        bg="light"
        expand="lg"
      >
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Link</Nav.Link>
              <NavDropdown title="Link" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>

            <Cart />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;

{
  /* <div>
<nav className="navbar navbar-expand-md bg-dark navbar navbar-expand-lg fixed-top navbar-scroll">
  <div>
    <a className="ms-4" href="/home">
      <img
        className="logo-minimal lazyloaded"
        src="https://www.soflow.com/app/themes/so-flow/assets/img/logo-minimal.svg"
        alt="Europe"
        data-ll-status="loaded"
      />
    </a>
  </div>
  <div className="d-flex gap-4 ms-5 ">
    <a
      href="/e-scooter"
      style={{ textDecoration: "none", color: "white" }}
    >
      <h5>E-SCOOTER</h5>
    </a>
    <a
      href="/e-scooter"
      style={{ textDecoration: "none", color: "white" }}
    >
      <h5>E-BIKE</h5>
    </a>
    <a
      href="/e-scooter"
      style={{ textDecoration: "none", color: "white" }}
    >
      <h5>E-BOARD</h5>
    </a>
    <a
      href="/e-scooter"
      style={{ textDecoration: "none", color: "white" }}
    >
      <h5>JUST FOR FUN</h5>
    </a>
    <a
      href="/e-scooter"
      style={{ textDecoration: "none", color: "white" }}
    >
      <h5>SPARE PARTS</h5>
    </a>
    <a
      href="/e-scooter"
      style={{ textDecoration: "none", color: "white" }}
    >
      <h5>ACCESORIES</h5>
    </a>
    <a
      href="/e-scooter"
      style={{ textDecoration: "none", color: "white" }}
    >
      <h5>SUPPORT</h5>
    </a>
  </div>
</nav>
</div> */
}
