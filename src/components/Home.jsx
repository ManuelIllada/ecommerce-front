import NavBar from "../partials/Navbar";
import React from "react";
import Footer from "../partials/Footer";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import AboutUsButton from "../partials/AboutUsButton";
import CategoryList from "../partials/CategoryList";
import "./Home.css";
function home() {
  return (
    <>
      {/* Hero */}
      <div style={{ backgroundColor: "rgb(65, 61, 61)" }}>
        <section className="position-relative hero-container">
          <NavBar />
          <AboutUsButton />
          <div className="col-lg-12 bg-image">
            <video
              className="w-100"
              preload="metadata"
              autoPlay={true}
              muted={true}
              loop={true}
              src="https://cdn.discordapp.com/attachments/852698000890658876/1088544953866657902/videohome.mp4"
            ></video>
            <div className="mask ">
              <div className="d-flex justify-content-center align-items-center w-100 h-100">
                <div className="d-none  d-md-block text-white d-flex justify-content-center align-items-center flex-column text-center">
                  <img
                    style={{ height: "10rem" }}
                    src="https://cdn.discordapp.com/attachments/992571782294929533/1089839850980642906/logosinnombre.png"
                    alt="logo"
                    className="img-fluid img-responsive"
                  />

                  <h1 className="mb-3">Connen™</h1>
                  <h4 className="mb-3">
                    Electric mobility with pure driving pleasure!
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-white">Aca un Carousel de Marcas</h1>
          <CategoryList />
        </section>

        <section className="mt-5">
          <MDBContainer className="p-4">
            <section>
              <MDBRow className="d-flex justify-content-center">
                <MDBCol lg="6">
                  <div className="ratio ratio-16x9">
                    <iframe
                      className="shadow-1-strong rounded"
                      src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                      title="YouTube video"
                      allowFullScreen
                      data-gtm-yt-inspected-2340190_699="true"
                      id="388567449"
                    ></iframe>
                  </div>
                </MDBCol>
              </MDBRow>
            </section>
          </MDBContainer>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default home;
