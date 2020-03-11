import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";
import Parallax from "../components/Parallax";
import icon1 from "../imgs/fast-start.png";
import video from "../imgs/banner_video.mp4";
import img from "../imgs/tempImg.jpg";
import signatures from "../imgs/signatures.png";
import symbol from "../imgs/2019-imperative-symbol-final-clear-background_1.png";

class Home extends Component {
  render() {
    return (
      <div>
        sxd
        <Parallax bg={img} text="BECOME A LEADER OR BECOME A LEGEND" />
        <MDBContainer fluid style={{ paddingTop: "30px", background: "#fff" }}>
          <MDBRow>
            <MDBCol />
            <MDBCol md="6" className="py-5 text-center">
              <MDBAnimation reveal type="fadeInUp">
                <h1 className="font-weight-bold display-4">WELCOME</h1>

                <h5>We are thrilled you could join us!</h5>
              </MDBAnimation>
              <MDBAnimation reveal type="fadeInUp">
                <p className="mt-4 ">
                  <i>
                    This is a place specifically designed for you to better
                    serve our field agents and managers with enlightened
                    information and live progress regarding our 2021 Conference
                    Trips. Keep an eye on our site for updates highlighting our
                    latest additions. We look forward to connecting with you in
                    the upcoming 2020 year.
                  </i>
                </p>
              </MDBAnimation>
              <MDBAnimation reveal type="fadeInUp">
                <p>- The NMB Member Acquisition and Engagement Department -</p>
              </MDBAnimation>
              <MDBAnimation reveal type="fadeInUp">
                <img
                  className="py-5"
                  style={{
                    display: "block",
                    margin: "0 auto",
                    maxWidth: "100%"
                  }}
                  src={signatures}
                />
              </MDBAnimation>
              <MDBAnimation reveal type="fadeInUp">
                <img className="pb-5" src={symbol} />
              </MDBAnimation>
            </MDBCol>
            <MDBCol />
          </MDBRow>
        </MDBContainer>
        <Parallax bg={img} />
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBAnimation reveal type="fadeInLeft">
                <p className="display-3 font-weight-bold">Level 01 - Leader</p>
              </MDBAnimation>
              <MDBRow>
                <MDBCol>
                  <MDBAnimation reveal type="fadeInLeft">
                    <img style={{ maxWidth: "100%" }} src={img} />
                  </MDBAnimation>
                </MDBCol>
                <MDBCol>
                  <MDBAnimation reveal type="fadeInRight">
                    <p style={{ fontSize: "30px", fontWeight: "500" }}>
                      KANSAS CITY NAFIC CONFERENCE
                    </p>
                    <p>September 2021</p>
                    <p>
                      Join your fellow Fraternal agents from across the nation
                      to be motivated and inspired to better serve your members
                      and your communities. The NAFIC Conference will be packed
                      full of energizing events including: renowned and
                      influential speakers, volunteer opportunities in the host
                      community, networking and mingling, as well as rest and
                      relaxation. Enjoy a fabulous National Mutual Benefit group
                      dinner in the city along with some sightseeing and
                      recreational activities within the area.
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
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-5">
                <MDBCol>
                  <MDBAnimation reveal type="fadeInUp">
                    <p
                      className="text-center font-weight-bold mb-4"
                      style={{ fontSize: "48px" }}
                    >
                      Qualifications
                    </p>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <MDBRow>
                    <MDBCol className="text-center mb-4">
                      <MDBAnimation reveal type="fadeInUp">
                        <img height="150px" src={icon1} />
                      </MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <MDBAnimation reveal type="fadeInUp">
                        <p className="text-center font-weight-bold mb-0">
                          APPLICATIONS
                        </p>
                      </MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <MDBAnimation reveal type="fadeInUp">
                        <p
                          className="text-center font-weight-bold"
                          style={{ fontSize: "48px" }}
                        >
                          30
                        </p>
                      </MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol>
                  <MDBRow>
                    <MDBCol className="text-center mb-4">
                      <MDBAnimation reveal type="fadeInUp" delay=".1s">
                        <img height="150px" src={icon1} />
                      </MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <MDBAnimation reveal type="fadeInUp"  delay=".1s">
                        <p className="text-center font-weight-bold mb-0">
                          NEW MEMBERS
                        </p>
                      </MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <MDBAnimation reveal type="fadeInUp"  delay=".1s">
                        <p
                          className="text-center font-weight-bold"
                          style={{ fontSize: "48px" }}
                        >
                          25
                        </p>
                      </MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol>
                  <MDBRow>
                    <MDBCol className="text-center mb-4">
                      <MDBAnimation reveal type="fadeInUp"  delay=".2s">
                        <img height="150px" src={icon1} />
                      </MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <MDBAnimation reveal type="fadeInUp"  delay=".2s">
                        <p className="text-center font-weight-bold mb-0">
                          NAFYC
                        </p>
                      </MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <MDBAnimation reveal type="fadeInUp"  delay=".2s">
                        <p
                          className="text-center font-weight-bold"
                          style={{ fontSize: "48px" }}
                        >
                          $35,000
                        </p>
                      </MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Parallax bg={img} />
        <MDBContainer className="py-5">
          <MDBRow>
            <MDBCol>
              <MDBAnimation reveal type="fadeInLeft">
                <p className="display-3 font-weight-bold">Level 02 - Legend</p>
              </MDBAnimation>
              <MDBRow>
                <MDBCol>
                  <MDBAnimation reveal type="fadeInLeft">
                    <p style={{ fontSize: "30px", fontWeight: "500" }}>
                      RIVIERA MAYA, MEXICO
                    </p>
                    <p>May 2021</p>
                    <p>
                      The beach is calling your name! Don't miss out on the
                      opportunity to experience this Caribbean paradise with its
                      spectacular sand beaches and stunning scenery. Discover
                      the endless horizons for relaxation and adventure at the
                      five-star, all-inclusive adult-only{" "}
                      <a
                        className="font-weight-bold"
                        href="https://en.valentinmaya.com/"
                      >
                        <u>Valentin Imperial Riviera Maya</u>
                      </a>
                      . Enjoy the perfect balance of luxury, comfort and freedom
                      at this stunning adults-only resort. Plus delight in an
                      off-site group excursion. You will never want to leave
                      this unforgettable place!
                    </p>
                    <p
                      className="text-center font-weight-bold"
                      style={{ fontSize: "20px" }}
                    >
                      Stay tuned for more details!
                    </p>
                    <a
                      href="https://en.valentinmaya.com/"
                      className="btn btn-dark btn-block font-weight-bold text-center"
                    >
                      VISIT HOTEL VALENTIN IMPERIAL RIVIERA MAYA
                    </a>
                  </MDBAnimation>
                </MDBCol>
                <MDBCol>
                  <MDBAnimation reveal type="fadeInRight">
                    <img style={{ maxWidth: "100%" }} src={img} />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
              <MDBRow className="mt-5">
                <MDBCol>
                  <MDBAnimation reveal type="fadeInUp">
                    <p
                      className="text-center font-weight-bold mb-4"
                      style={{ fontSize: "48px" }}
                    >
                      Qualifications
                    </p>
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <MDBRow>
                    <MDBCol className="text-center mb-4">
                      <MDBAnimation reveal type="fadeInUp">
                        <img height="150px" src={icon1} />
                      </MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <MDBAnimation reveal type="fadeInUp">
                        <p className="text-center font-weight-bold mb-0">
                          APPLICATIONS
                        </p>
                      </MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <MDBAnimation reveal type="fadeInUp">
                        <p
                          className="text-center font-weight-bold"
                          style={{ fontSize: "48px" }}
                        >
                          40
                        </p>
                      </MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol>
                  <MDBRow>
                    <MDBCol className="text-center mb-4">
                      <MDBAnimation reveal type="fadeInUp"  delay=".1s">
                        <img height="150px" src={icon1} />
                      </MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <MDBAnimation reveal type="fadeInUp"  delay=".1s">
                        <p className="text-center font-weight-bold mb-0">
                          NEW MEMBERS
                        </p>
                      </MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <MDBAnimation reveal type="fadeInUp"  delay=".1s">
                        <p
                          className="text-center font-weight-bold"
                          style={{ fontSize: "48px" }}
                        >
                          30
                        </p>
                      </MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
                <MDBCol>
                  <MDBRow>
                    <MDBCol className="text-center mb-4">
                      <MDBAnimation reveal type="fadeInUp"  delay=".2s">
                        <img height="150px" src={icon1} />
                      </MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <MDBAnimation reveal type="fadeInUp"  delay=".2s">
                        <p className="text-center font-weight-bold mb-0">
                          NAFYC
                        </p>
                      </MDBAnimation>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol>
                      <MDBAnimation reveal type="fadeInUp"  delay=".2s">
                        <p
                          className="text-center font-weight-bold"
                          style={{ fontSize: "48px" }}
                        >
                          $55,000
                        </p>
                      </MDBAnimation>
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
