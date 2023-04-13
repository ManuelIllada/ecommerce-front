import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Product } from "./Product";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/products`,
      });

      setProducts(response.data);
    };
    getProducts();
  }, []);

  const stock = (item) => {
    // setProducts(
    //   products.map((p) => {
    //     if (p.id !== item.id) return p;
    //     return { ...p, stock: p.stock - 1 };
    //   })
    // );
    console.log("prueba");
  };

  return (
    products.length > 0 && (
      <div className="col-12 d-flex flex-wrap justify-content-around">
        {products.map((product) => (
          <Product product={product} key={product.id} stock={stock} />
        ))}
      </div>
    )
  );
}

export default ProductList;
