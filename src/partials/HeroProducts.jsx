import React from "react";

export default function HeroProducts() {
  return (
    <div
      className="p-5 text-center bg-image"
      style={{
        backgroundImage:
          "url('https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2021/09/mujer-montada-bicicleta-electrica-mirando-mar-2467819.jpg')",
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
            <a className="btn btn-outline-light btn-lg" href="#!" role="button">
              Discover
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
