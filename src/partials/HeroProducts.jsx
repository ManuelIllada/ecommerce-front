import React from "react";

export default function HeroProducts({ background, name }) {
  return (
    <div className="text-left bg-image">
      <div>
        <img src={background} className="img-fluid" alt="hero Section" />
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">{name}</h1>
              <h4 className="mb-3">
                Electric mobility with pure driving pleasure!
              </h4>
              <a className="btn btn-outline-light btn-lg" href="" role="button">
                Discover
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
