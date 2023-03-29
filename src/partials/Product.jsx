import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
//import Button from "react-bootstrap/esm/Button";

export const Product = ({ product }) => {
  return (
    <Card
      className="m-4 rounded hover-zoom hover-shadow"
      style={{ width: "18rem", height: "30rem", borderRadius: "100px" }}
    >
      <Card.Body>
        <div style={{ height: "18rem" }}>
          <Card.Img
            variant="top"
            src={product.media[0]}
            className="img-fluid"
          />
        </div>
      </Card.Body>
      <Card.Body
        className="d-flex align-items-center"
        style={{ height: "5rem" }}
      >
        <Card.Title style={{ height: "5rem" }}>{product.name}</Card.Title>
      </Card.Body>
      <hr />
      <ListGroup className="list-group-flush">
        <ListGroup.Item>U$S {product.price}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
};
