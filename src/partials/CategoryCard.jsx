import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <div className="contect ">
      <Link state={category} to={`/${category.slug}`}>
        <Card
          className="bg-image hover-zoom hover-shadow"
          style={{ width: "18rem" }}
        >
          <img variant="top" src={category.cardImage} />
          <div className="mask d-flex justify-content-center align-items-center h-100 mt-5">
            <Button variant="primary">{category.name}</Button>
          </div>
        </Card>
      </Link>
    </div>
  );
}

export default CategoryCard;
