import React from "react";

function ShopCard({ product }) {
  return (
    <tr>
      <td className="col-5">
        <div className="col-4">
          <img src={product.media} alt="img-product" />
        </div>
        <div className="col-4">
          <div>{product.name}</div>
          <div>{product.category}</div>
        </div>
      </td>
      <td className="col-2">U$S {product.price}</td>
      <td className="col-2">
        <button>1</button>
      </td>
      <td className="col-3">
        U$S {product.element.price * 1} <button>x</button>
      </td>
    </tr>
  );
}

export default ShopCard;
