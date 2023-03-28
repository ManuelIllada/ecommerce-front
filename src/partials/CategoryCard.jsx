import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <Link state={category} to={`/${category.slug}`} style={{ width: "20%" }}>
      <Card className=" m-3 bg-image hover-zoom hover-shadow">
        <img
          variant="top"
          src={category.cardImage}
          className="img-fluid "
          alt={category.name}
        />
      </Card>
    </Link>
  );
}

export default CategoryCard;
