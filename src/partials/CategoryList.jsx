import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Product } from "../partials/Product";
import CategoryCard from "./CategoryCard";

function CategoryList() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/categories`,
      });
      console.log(response.data);
      setCategories(response.data);
    };
    getCategories();
  }, []);

  return (
    <div className="d-flex justify-content-around">
      {categories.map((category) => (
        <CategoryCard category={category} />
      ))}
    </div>
  );
}

export default CategoryList;
