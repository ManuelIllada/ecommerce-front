import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/categories`,
      });
      setCategories(response.data);
    };
    getCategories();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}

export default CategoryList;
