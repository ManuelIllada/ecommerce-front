import React from "react";
import "./HeroProduct.css";

export default function HeroProducts({ background, name }) {
  const bgOk = () => {
    if (typeof background === "string" && background.includes("https://")) {
      return background;
    } else {
      return `${process.env.REACT_APP_API_URL}/img/${background}`;
    }
  };
  return (
    <div className="bg-image hero-product">
      <img src={bgOk()} className="img-fluid w-100" alt="hero Section" />
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
          </div>
        </div>
      </div>
    </div>
  );
}
