import axios from "axios";
import { useState, useEffect } from "react";
import { Product } from "./Product";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/products`,
      });
      console.log(response.data);
      setProducts(response.data);
    };
    getProducts();
  }, []);

  return (
    <div className="d-flex flex-wrap g-3">
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  );
}

export default ProductList;
