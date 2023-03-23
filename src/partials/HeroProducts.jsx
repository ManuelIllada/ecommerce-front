import React from "react";

export default function HeroProducts({ background }) {
  return (
    <div className="p-5 text-center bg-image">
      <img src={background} className="img-fluid" alt="hero Section" />
    </div>
  );
  /* 
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">So Flow</h1>
            <h4 className="mb-3">
              Electric mobility with pure driving pleasure!
            </h4>
            <a className="btn btn-outline-light btn-lg" href="#!" role="button">
              Discover
            </a>
          </div>
        </div>
      </div> */
}
