import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
//import Button from "react-bootstrap/esm/Button";

export const Product = ({ product }) => {
  const imageOk = () => {
    if (
      typeof product.media[0] === "string" &&
      product.media[0].includes("https://")
    ) {
      return product.media[0];
    } else {
      return `${process.env.REACT_APP_API_URL}/img/${product.media[0]}`;
    }
  };
  return (
    <Card
      className="bg-black bg-opacity-25 m-4 rounded hover-zoom hover-shadow"
      style={{ width: "18rem", height: "30rem", borderRadius: "100px" }}
    >
      <Card.Body>
        <div style={{ height: "18rem" }}>
          <Card.Img variant="top" src={imageOk()} className="img-fluid" />
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
