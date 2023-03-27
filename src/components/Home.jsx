import NavBar from "../partials/Navbar";
import React from "react";
import Footer from "../partials/Footer";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import CategoryList from "../partials/CategoryList";

function home() {
  return (
    <>
      {/* Hero */}
      <div style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
        <section>
          <NavBar />
          <div className="col-lg-12">
            <video
              className="col-lg-12 col-12"
              preload="metadata"
              autoPlay={true}
              muted={true}
              loop={true}
              src="https://cdn.discordapp.com/attachments/852698000890658876/1088544953866657902/videohome.mp4"
            ></video>
            <div className="mask">
              <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                  <h1 className="mb-3">SoFlow</h1>
                  <h4 className="mb-3">
                    Electric mobility with pure driving pleasure!
                  </h4>
                  <a
                    className="btn btn-outline-light btn-lg"
                    href=""
                    role="button"
                  >
                    Discover
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h1 className="text-center text-light my-5">Our Products</h1>
          <CategoryList />
        </section>

        <section>
          <MDBContainer className="p-4">
            <section className="">
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
