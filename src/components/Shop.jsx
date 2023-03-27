import React from "react";
import NavBar from "../partials/Navbar";
import Table from "react-bootstrap/Table";
/* import axios from "axios";
import { useState, useEffect } from "react"; 
import { ShopCard } from "../partials/ShopCard"; */

function Shop() {
  /*   const [productlist, setProductList] = useState([]);

  useEffect(() => {
    const getProductList = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/user/productlist`,
      });

      setProductList(response.data);
    };
    getProductList();
  }, []); */

  return (
    <div>
      <section>
        <NavBar />
      </section>
      <section className="p-5 text-center bg-image mt-5 container">
        <Table hover>
          <thead>
            <tr>
              <th className="col-5  me-auto">Product</th>
              <th className="col-2">Price</th>
              <th className="col-2">Quantity</th>
              <th className="col-3">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {/* {productlist.map((product) => (
              <ShopCard product={product} key={product.id} />
            ))} */}
          </tbody>
        </Table>
      </section>
    </div>
  );
}

export default Shop;
