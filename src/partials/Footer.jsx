import React from "react";
import { Button } from "react-bootstrap";
import { MDBFooter, MDBContainer, MDBIcon } from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBFooter
      className=" text-center text-white"
      style={{ backgroundColor: "#383a33" }}
    >
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
        <section className="mb-4 ">
          <Button
            className="m-1 rounded-circle text-center"
            style={{
              border: "#3b5998",
              backgroundColor: "#3b5998",
              width: "40px",
              height: "40px",
            }}
            href="facebook"
            role="button"
          >
            <MDBIcon fab icon="facebook-f" />
          </Button>

          <Button
            className="m-1 rounded-circle text-center"
            style={{
              border: "#55acee",
              backgroundColor: "#55acee",
              width: "40px",
              height: "40px",
            }}
            href="twitter"
            role="button"
          >
            <MDBIcon fab icon="twitter" />
          </Button>

          <Button
            className="m-1 rounded-circle text-center"
            style={{
              border: "#dd4b39",
              backgroundColor: "#dd4b39",
              width: "40px",
              height: "40px",
            }}
            href="google"
            role="button"
          >
            <MDBIcon
              fab
              icon="google"
              style={{
                boxShadow: "#fffff",
              }}
            />
          </Button>
          <Button
            className="m-1 rounded-circle text-center"
            style={{
              border: "#ac2bac",
              backgroundColor: "#ac2bac",
              width: "40px",
              height: "40px",
            }}
            href="instagram"
            role="button"
          >
            <MDBIcon fab icon="instagram" />
          </Button>

          <Button
            className="m-1 rounded-circle text-center"
            style={{
              border: "#0082ca",
              backgroundColor: "#0082ca",
              width: "40px",
              height: "40px",
            }}
            href="linkedin"
            role="button"
          >
            <MDBIcon fab icon="linkedin-in" />
          </Button>

          <Button
            className="m-1 rounded-circle text-center  "
            style={{
              border: "rgb(38, 38, 38)",
              backgroundColor: "rgb(38, 38, 38)",
              width: "40px",
              height: "40px",
            }}
            href="github"
            role="button"
          >
            <MDBIcon fab icon="github" />
          </Button>
        </section>
      </MDBContainer>

      <div className="text-center p-3" style={{ backgroundColor: "#1b1f19" }}>
        © 2023 Copyright: Team 9 Hack Academy
      </div>
    </MDBFooter>
  );
}
