import React from "react";
import Card from "react-bootstrap/Card";
import { Button, ListGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Product.css";
import { Link } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";

const handleBuy = () => {
  // Lógica para manejar la acción de compra
};

const handleAddToCart = () => {
  // Lógica para manejar la acción de agregar al carrito
};

export const Product = ({ product }) => {
  return (
    <Card
      className="bg-black bg-opacity-25 m-4 rounded mb-5"
      style={{ width: "20rem", height: "40rem", borderRadius: "100px" }}
    >
      <Card.Body>
        <div style={{ height: "18rem" }}>
          <Link
            to={`/${product.category.slug}/${product.slug}`}
            key={product.id}
            state={product}
            className="hover-zoom hover-shadow"
          >
            <Card.Img
              variant="top"
              src={product.media[0]}
              className="img-fluid"
            />
          </Link>
        </div>
      </Card.Body>
      <Card.Body
        className="d-flex align-items-center"
        style={{ height: "5rem" }}
      >
        <Card.Title className="text-light" style={{ height: "10rem" }}>
          <div>{product.name}</div>
        </Card.Title>
      </Card.Body>

      <ListGroup className="list-group-flush ">
        <ListGroup.Item className="d-flex justify-content-center fs-4 fw-bold">
          $ {product.price}
        </ListGroup.Item>
        <ListGroup.Item
          style={{ height: "3.5rem" }}
          className="d-flex justify-content-center fs-4 fw-bold"
        >
          <Button
            variant={product.stock === 0 ? "danger" : "outline-primary"}
            className="mx-2 product-btn"
            onClick={handleBuy}
            disabled={product.stock === 0}
          >
            Buy
          </Button>
          <Button
            variant={product.stock === 0 ? "danger" : "outline-success"}
            className="mx-2 product-btn"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            + <FaOpencart size={25} />
          </Button>
        </ListGroup.Item>
        <ListGroup.Item
          style={{ height: "2.5rem" }}
          className={`d-flex justify-content-center fw-bold ${
            product.stock === 0 ? "withinStock" : ""
          }`}
        >
          In stock: {product.stock}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};
