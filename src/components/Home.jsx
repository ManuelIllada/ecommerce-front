import NavBar from "../partials/Navbar";
import ProductList from "../partials/ProductList";
import React from "react";
import Footer from "../partials/Footer";

function home() {
  return (
    <>
      {/* Hero */}
      <NavBar />
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage:
            "url('https://i1.wp.com/www.soflow.com/app/uploads/2022/09/Soflow_Conda.jpg?ssl=1')",
          height: "69rem",
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

      <h1 className="text-center my-5">Our Products</h1>
      <div>
        <ProductList />
      </div>
      <section>
        <Footer />
      </section>
    </>
  );
}

export default home;
