import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./CategoryCard.css";

function CategoryCard({ category }) {
  return (
    <Link
      state={category}
      className="m-3 bg-image rounded hover-zoom hover-shadow hover-overlay col-9 col-sm-5 col-lg-3 col-xl-2"
      to={`/${category.slug}`}
    >
      <Card>
        <div className="image-container">
          <h2 className="title">{category.name}</h2>
          <img
            variant="top"
            src={category.cardImage}
            className="img-fluid rounded"
            alt={category.name}
          />
        </div>
      </Card>
      <div
        className="mask w-100 h-100 hover-zoom position-absolute top-0 start-0"
        style={{ backgroundColor: "hsla(0, 0%, 0%, 0.5)" }}
      ></div>
    </Link>
  );
}

export default CategoryCard;
