import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";
import Parallax from "../components/Parallax";
import icon1 from "../imgs/fast-start.png";
import video from "../imgs/banner_video.mp4";
import img from "../imgs/tempImg.jpg";
import img2 from "../imgs/beach-sand.jpeg";
import img3 from "../imgs/skyline.jpg";
import signatures from "../imgs/signatures.png";
import symbol from "../imgs/2019-imperative-symbol-final-clear-background_1.png";

class Home extends Component {
  render() {
    return (
      <div>
        <Parallax bg={img} text="BECOME A LEADER OR BECOME A LEGEND" />
        <MDBContainer fluid style={{ paddingTop: "30px", background: "#fff" }}>
          <MDBRow>
            <MDBCol />
            <MDBCol md="6" className="py-5 text-center">
              <h1 className="font-weight-bold display-4">WELCOME</h1>

              <h5>We are thrilled you could join us!</h5>

              <p className="mt-4 ">
                <i>
                  This is a place specifically designed for you to better serve
                  our field agents and managers with enlightened information and
                  live progress regarding our 2021 Conference Trips. Keep an eye
                  on our site for updates highlighting our latest additions. We
                  look forward to connecting with you in the upcoming 2020 year.
                </i>
              </p>

              <p>- The NMB Member Acquisition and Engagement Department -</p>

              <img
                className="py-5"
                style={{
                  display: "block",
                  margin: "0 auto",
                  maxWidth: "100%"
                }}
                src={signatures}
              />

              <img className="pb-5" src={symbol} />
            </MDBCol>
            <MDBCol />
          </MDBRow>
        </MDBContainer>
        <Parallax bg={img3} />
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <p className="display-3 font-weight-bold">Level 01 - Leader</p>

              <MDBRow>
                <MDBCol sm="12" md="6">
                  <img style={{ maxWidth: "100%" }} src={img} />
                </MDBCol>
                <MDBCol>
                  <p style={{ fontSize: "30px", fontWeight: "500" }}>
                    KANSAS CITY NAFIC CONFERENCE
                  </p>
                  <p>September 2021</p>
                  <p>
                    Join your fellow Fraternal agents from across the nation to
                    be motivated and inspired to better serve your members and
                    your communities. The NAFIC Conference will be packed full
                    of energizing events including: renowned and influential
                    speakers, volunteer opportunities in the host community,
                    networking and mingling, as well as rest and relaxation.
                    Enjoy a fabulous National Mutual Benefit group dinner in the
                    city along with some sightseeing and recreational activities
                    within the area.
                  </p>
                  <p
                    className="text-center font-weight-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Stay tuned for more details!
                  </p>
                  <a
                    href="https://www.nafic.org/"
                    className="btn btn-dark btn-block font-weight-bold text-center"
                  >
                    Visit the NAFIC CONFERENCE SITE
                  </a>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-5">
                <MDBCol>
                  <p
                    className="text-center font-weight-bold mb-4"
                    style={{ fontSize: "48px" }}
                  >
                    Qualifications
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <MDBRow>
                    <MDBCol className="text-center mb-4">
                      <img height="150px" src={icon1} />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <p className="text-center font-weight-bold mb-0">
                        APPLICATIONS
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <p
                        className="text-center font-weight-bold"
                        style={{ fontSize: "48px" }}
                      >
                        30
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol sm="12" md="4">
                  <MDBRow>
                    <MDBCol className="text-center mb-4">
                      <img height="150px" src={icon1} />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <p className="text-center font-weight-bold mb-0">
                        NEW MEMBERS
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <p
                        className="text-center font-weight-bold"
                        style={{ fontSize: "48px" }}
                      >
                        25
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol sm="12" md="4">
                  <MDBRow>
                    <MDBCol className="text-center mb-4">
                      <img height="150px" src={icon1} />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <p className="text-center font-weight-bold mb-0">NAFYC</p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <p
                        className="text-center font-weight-bold"
                        style={{ fontSize: "48px" }}
                      >
                        $35,000
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Parallax bg={img2} />
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <p className="display-3 font-weight-bold">Level 02 - Legend</p>

              <MDBRow>
                <MDBCol sm="12" md="6">
                  <p style={{ fontSize: "30px", fontWeight: "500" }}>
                    RIVIERA MAYA, MEXICO
                  </p>
                  <p>May 2021</p>
                  <p>
                    The beach is calling your name! Don't miss out on the
                    opportunity to experience this Caribbean paradise with its
                    spectacular sand beaches and stunning scenery. Discover the
                    endless horizons for relaxation and adventure at the
                    five-star, all-inclusive adult-only{" "}
                    <a
                      className="font-weight-bold"
                      href="https://en.valentinmaya.com/"
                    >
                      <u>Valentin Imperial Riviera Maya</u>
                    </a>
                    . Enjoy the perfect balance of luxury, comfort and freedom
                    at this stunning adults-only resort. Plus delight in an
                    off-site group excursion. You will never want to leave this
                    unforgettable place!
                  </p>
                  <p
                    className="text-center font-weight-bold"
                    style={{ fontSize: "20px" }}
                  >
                    Stay tuned for more details!
                  </p>
                  <a
                    href="https://en.valentinmaya.com/"
                    className="btn btn-dark btn-block font-weight-bold text-center mb-5"
                  >
                    VISIT HOTEL VALENTIN IMPERIAL RIVIERA MAYA
                  </a>
                </MDBCol>
                <MDBCol>
                  <img style={{ maxWidth: "100%" }} src={img} />
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-5">
                <MDBCol>
                  <p
                    className="text-center font-weight-bold mb-4"
                    style={{ fontSize: "48px" }}
                  >
                    Qualifications
                  </p>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol sm="12" md="4">
                  <MDBRow>
                    <MDBCol className="text-center mb-4">
                      <img height="150px" src={icon1} />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <p className="text-center font-weight-bold mb-0">
                        APPLICATIONS
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <p
                        className="text-center font-weight-bold"
                        style={{ fontSize: "48px" }}
                      >
                        40
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol sm="12" md="4">
                  <MDBRow>
                    <MDBCol className="text-center mb-4">
                      <img height="150px" src={icon1} />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <p className="text-center font-weight-bold mb-0">
                        NEW MEMBERS
                      </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <p
                        className="text-center font-weight-bold"
                        style={{ fontSize: "48px" }}
                      >
                        30
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol sm="12" md="4">
                  <MDBRow>
                    <MDBCol className="text-center mb-4">
                      <img height="150px" src={icon1} />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <p className="text-center font-weight-bold mb-0">NAFYC</p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <p
                        className="text-center font-weight-bold"
                        style={{ fontSize: "48px" }}
                      >
                        $55,000
                      </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Parallax bg={img} />
      </div>
    );
  }
}

export default Home;
