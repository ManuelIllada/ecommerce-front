import React from "react";

import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <hr />
        <section>
          <div className="row justify-content-between  d-flex align-items-center justify-content-center my-4">
            <div className="footerColumn col">
              <h3>Local</h3>
              <p>
                Av 18 de Julio 1704 . Montevideo
                <br />M to F: 9 to 18 hs.
              </p>
            </div>
            <div className="footerColumn col d-none d-md-block">
              <img
                src="https://cdn.discordapp.com/attachments/992571782294929533/1089839115530412063/logo.png"
                className="img-fluid"
                style={{ height: "8rem" }}
                alt="conen"
              />
            </div>
            <div className="footerColumn col ">
              <form className="w-100">
                <h3 className="titleFooter">Newsletter</h3>
                <p>Suscribe to recive our promotions and new</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />

                  <button className="bg-dark text-white" type="button">
                    Suscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <hr />
        <section className="mb-4">
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#3b5998" }}
            href="facebook"
          >
            <MDBIcon fab icon="facebook-f" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#55acee" }}
            href="twitter"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#dd4b39" }}
            href="google"
            role="button"
          >
            <MDBIcon fab icon="google" />
          </MDBBtn>
          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#ac2bac" }}
            href="instagram"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="linkedin"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </MDBBtn>

          <MDBBtn
            floating
            className="m-1"
            style={{ backgroundColor: "dark" }}
            href="github"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright: Team 9 Hack Academy
      </div>
    </MDBFooter>
  );
}
