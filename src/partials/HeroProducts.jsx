import React from "react";
import { Link } from "react-router-dom";

export default function HeroProducts({ background, name }) {
  return (
    <div className="bg-image">
      <img src={background} className="img-fluid w-100" alt="hero Section" />
      <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <div className="d-flex justify-content-center align-items-center w-100 h-100">
          <div className="d-none  d-md-block text-white d-flex justify-content-center align-items-center flex-column text-center">
            <img
              style={{ height: "10rem" }}
              src="https://cdn.discordapp.com/attachments/992571782294929533/1089839850980642906/logosinnombre.png"
              alt="logo"
              className="img-fluid"
            />
            <h1 className="mb-3">{name}</h1>
            <h4 className="mb-3">
              Electric mobility with pure driving pleasure!
            </h4>
            <Link className="btn btn-outline-light btn-lg" to="" role="button">
              Discover
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
