import NavBar from "../partials/Navbar";
import ProductList from "../partials/ProductList";
import React from "react";

function AboutUs() {
  return (
    <div>
      <section>
        <NavBar />
      </section>
      <div
        className="p-5 text-center bg-image mt-5"
        style={{
          backgroundImage:
            "url('https://mdbootstrap.com/img/new/slides/041.webp')",
          height: "20rem",
        }}
      >
        <div>
          <h3>Se usaron tal y cual tecnología</h3>
        </div>
      </div>
      <div className="d-flex justify-content-center my-3">
        <h1>Our Products</h1>
      </div>
      <div className="d-flex justify-content-center ">
        <ProductList />
      </div>
    </div>
  );
}

export default AboutUs;
