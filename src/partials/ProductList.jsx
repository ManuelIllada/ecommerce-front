import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Product } from "./Product";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/products`,
      });
      console.log(response.data);
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {products.map((product) => (
        <Link
          to={`/${product.categoryId.slug}/${product.slug}`}
          key={product.id}
        >
          <Product product={product} />
        </Link>
      ))}
    </div>
  );
}

export default ProductList;
