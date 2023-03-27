import React from "react";

function ShopCard({ product }) {
  return (
    <tr>
      <td>
        <img
          src={product.media[0]}
          style={{ width: "50px" }}
          alt={product.name}
        />
      </td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>{product.quantity}</td>
      <td>{product.quantity * product.price}</td>
    </tr>
  );
}

export default ShopCard;
