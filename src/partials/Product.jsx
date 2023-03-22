import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export const Product = ({ product }) => {
  return (
    <div className="">
      <Card className="m-4" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.media} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <hr />
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>U$S {product.price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Buy Now</Card.Link>
          <Card.Link href="#">Add Cart</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};
