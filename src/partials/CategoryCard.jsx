import React from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  return (
    <div>
      <Link state={category} to={`/${category.slug}`}>
        <Card
          className="bg-image hover-zoom hover-shadow"
          style={{ width: "18rem" }}
        >
          <img variant="top" src={category.cardImage} alt={category.name} />
        </Card>
      </Link>
    </div>
  );
}

export default CategoryCard;
