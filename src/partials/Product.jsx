import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";

export const Product = ({ product }) => {
  return (
    <div className="shadow-lg p-3 mb-5 bg-body rounded">
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
          <Button variant="outline-success " type="submit">
            <Card.Link href="#" style={{ textDecoration: "none" }}>
              Buy Now
            </Card.Link>
          </Button>
          <Button type="submit" variant="outline-success " className="ms-auto">
            <Card.Link href="#" style={{ textDecoration: "none" }}>
              Add Cart
            </Card.Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
