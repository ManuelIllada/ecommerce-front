import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link
      state={category}
      className="m-3 bg-image rounded hover-zoom hover-shadow col-9 col-sm-5 col-lg-3 col-xl-2"
      to={`/${category.slug}`}
    >
      <Card>
        <img
          variant="top"
          src={category.cardImage}
          className="img-fluid rounded"
          alt={category.name}
        />
      </Card>
    </Link>
  );
}

export default CategoryCard;
