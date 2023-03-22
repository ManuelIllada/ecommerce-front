import NavBar from "../partials/Navbar";
import ProductList from "../partials/ProductList";
import React from "react";

function home() {
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
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">So Flow</h1>
              <h4 className="mb-3">
                Electric mobility with pure driving pleasure!
              </h4>
              <a
                className="btn btn-outline-light btn-lg"
                href="#!"
                role="button"
              >
                Discover
              </a>
            </div>
          </div>
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

export default home;
