import "../components/ProductInfo.css";
import React from "react";
import { Link } from "react-router-dom";
import "./AboutUsButton.css";

export default function AboutUsButton() {
  return (
    <Link className="link-to-about btn fw-bold" to="/about" role="button">
      <div className="backgrounde bodi">
        <div className="contentr">
          <div className="block x1">About This Project</div>
        </div>
      </div>
    </Link>
  );
}
