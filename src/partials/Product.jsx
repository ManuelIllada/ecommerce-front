import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
//import Button from "react-bootstrap/esm/Button";

export const Product = ({ product }) => {
  return (
    <div className="shadow-lg p-3 mb-5 bg-body rounded">
      <Card className="m-4" style={{ width: "18rem", height: "40rem" }}>
        <Card.Body>
          <div style={{ height: "18rem" }}>
            <Card.Img
              variant="top"
              src={product.media[0]}
              className="img-fluid"
            />
          </div>
        </Card.Body>
        <Card.Body>
          <Card.Title
            className="d-flex align-items-end justify-content-center "
            style={{ height: "3rem" }}
          >
            {product.name}
          </Card.Title>
        </Card.Body>
        <hr />
        <ListGroup className="list-group-flush">
          <ListGroup.Item>U$S {product.price}</ListGroup.Item>
        </ListGroup>
        {/* <Card.Body>
          <Button
            variant="outline-dark"
            type="submit"
            className="btn btn-outline-light btn-lg me-1"
          >
            Buy Now
          </Button>
          <Button
            variant="outline-dark"
            type="submit"
            className="btn btn-outline-light btn-lg"
          >
            Add Cart
          </Button>
        </Card.Body> */}
      </Card>
    </div>
  );
};
