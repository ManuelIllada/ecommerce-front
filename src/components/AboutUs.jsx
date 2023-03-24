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
      ></div>
      <div className="d-flex justify-content-center my-3">
        <h1>The Dream Team</h1>
      </div>
      <div>
        <h3>Some of the implemented technologies...</h3>
        <div>
          <object
            data="../logos/bootstrap.svg"
            width="80"
            height="80"
            aria-label="bootstrap"
          ></object>
          <object
            data="../logos/express.svg"
            width="100"
            height="100"
            aria-label="express"
          ></object>
          <object
            data="../logos/javascript.svg"
            width="80"
            height="80"
            aria-label="javascript"
          ></object>
          <object
            data="../logos/mysql.svg"
            width="100"
            height="100"
            aria-label="mysql"
          ></object>
          <object
            data="../logos/nodejs.svg"
            width="100"
            height="100"
            aria-label="nodejs"
          ></object>
          <object
            data="../logos/react.svg"
            width="90"
            height="90"
            aria-label="react"
          ></object>
          <object
            data="../logos/sequelize.svg"
            width="100"
            height="100"
            aria-label="sequelize"
          ></object>
        </div>
      </div>
      <div className="d-flex justify-content-center ">
        <ProductList />
      </div>
    </div>
  );
}

export default AboutUs;
