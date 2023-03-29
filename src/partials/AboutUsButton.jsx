import "../components/ProductInfo.css";
import React from "react";
import { Link } from "react-router-dom";

export default function AboutUsButton() {
  return (
    <Link className="link-to-about btn fw-bold" to="/about" role="button">
      About This Project
    </Link>
  );
}
