import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";

function CategoryCard({ category }) {
  return (
    <div className="contect ">
      <Card
        className="bg-image hover-zoom hover-shadow"
        style={{ width: "18rem" }}
      >
        <img
          variant="top"
          src="https://www.soflow.com/app/uploads/blogs/9/2020/09/2-600x1011.jpg"
        />
        <div className="mask d-flex justify-content-center align-items-center h-100 mt-5">
          <Button variant="primary">{category.name}</Button>
        </div>
      </Card>
    </div>
  );
}

export default CategoryCard;
