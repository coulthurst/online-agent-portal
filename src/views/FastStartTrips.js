import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBAnimation, MDBCard, MDBCardBody } from "mdbreact";
import Banner from "../components/Banner";
import img from "../imgs/tempImg.jpg";
import TripQualification from "../components/TripQualification";
import icon1 from "../imgs/fast-start.png";

class FastStartTrips extends Component {
  render() {
    return (
      <div>
        <Banner bg={img} text="FAST START PROGRAM" />
        <MDBContainer
          fluid
          style={{ background: "#e2e2e2" }}
          className="py-5 mb-5"
        >
          <MDBRow>
            <MDBCol />
            <MDBCol md="8">
              <MDBAnimation type="fadeInUp" reveal>
                <p className="text-center display-4">2020 Fast Start Program</p>
                <p
                  className="text-center"
                  style={{ fontSize: "32px", color: "rgb(36, 103, 141)" }}
                >
                  Earn a two-night vacation... TWICE in 2020!
                </p>
                ​
                <p className="text-center">
                  National Mutual Benefit has added two additional vacation
                  trips to the mix for 2020. Agents and managers are eligible to
                  earn <span style={{fontWeight: "700"}}>both</span> Fast Start trips if you meet the
                  qualifications for each cycle of the Fast Start Program. The
                  Fast Start Program is broken into two cycles - <span style={{fontWeight: "700"}}>Fast Start to 2020</span> and <span style={{fontWeight: "700"}}>End of Summer Push</span>. Fast Start Program Trips
                  are solely based on Applications, New Members and NAFYC. Trip
                  Credits are excluded from the Fast Start Program. We can't
                  wait to send you on these getaways!
                </p>
              </MDBAnimation>
            </MDBCol>
            <MDBCol />
          </MDBRow>
        </MDBContainer>
        <MDBContainer>
          <MDBRow>
            <MDBCol lg="6">
              <MDBAnimation type="fadeInLeft" reveal>

                  
                <TripQualification title="fastStart" img1={img} img2={img} />
                <MDBCard className="mt-4">
                  <MDBCardBody>
                <MDBRow >
                  <MDBCol>
                    <MDBAnimation reveal type="fadeInUp">
                      <p
                        className="text-center font-weight-bold mb-4"
                        style={{ fontSize: "30px" }}
                      >
                        Fast Start to 2020 Agent Qualifications
                      </p>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol sm="4">
                    <MDBRow>
                      <MDBCol className="text-center mb-4">
                        <MDBAnimation reveal type="fadeInUp">
                          <img height="100px" src={icon1} />
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
                            style={{ fontSize: "30px" }}
                          >
                            10
                          </p>
                        </MDBAnimation>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol sm="4">
                    <MDBRow>
                      <MDBCol className="text-center mb-4">
                        <MDBAnimation reveal type="fadeInUp">
                          <img height="100px" src={icon1} />
                        </MDBAnimation>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>
                        <MDBAnimation reveal type="fadeInUp">
                          <p className="text-center font-weight-bold mb-0">
                            NEW MEMBERS
                          </p>
                        </MDBAnimation>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>
                        <MDBAnimation reveal type="fadeInUp">
                          <p
                            className="text-center font-weight-bold"
                            style={{ fontSize: "30px" }}
                          >
                            8
                          </p>
                        </MDBAnimation>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol sm="4">
                    <MDBRow>
                      <MDBCol className="text-center mb-4">
                        <MDBAnimation reveal type="fadeInUp">
                          <img height="100px" src={icon1} />
                        </MDBAnimation>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>
                        <MDBAnimation reveal type="fadeInUp">
                          <p className="text-center font-weight-bold mb-0">
                            NAFYC
                          </p>
                        </MDBAnimation>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>
                        <MDBAnimation reveal type="fadeInUp">
                          <p
                            className="text-center font-weight-bold"
                            style={{ fontSize: "30px" }}
                          >
                            $7,500
                          </p>
                        </MDBAnimation>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
            <MDBCol lg="6">
              <MDBAnimation type="fadeInRight" reveal>
                <TripQualification title="summerPush" img1={img} img2={img} />
                <MDBCard className="mt-4">
                  <MDBCardBody>
                <MDBRow>
                  <MDBCol>
                    <MDBAnimation reveal type="fadeInUp">
                      <p
                        className="text-center font-weight-bold mb-4"
                        style={{ fontSize: "30px" }}
                      >
                        End of Summer Push Agent Qualifications
                      </p>
                    </MDBAnimation>
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol sm="4">
                    <MDBRow>
                      <MDBCol className="text-center mb-4">
                        <MDBAnimation reveal type="fadeInUp">
                          <img height="100px" src={icon1} />
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
                            style={{ fontSize: "30px" }}
                          >
                            30
                          </p>
                        </MDBAnimation>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol sm="4">
                    <MDBRow>
                      <MDBCol className="text-center mb-4">
                        <MDBAnimation reveal type="fadeInUp">
                          <img height="100px" src={icon1} />
                        </MDBAnimation>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>
                        <MDBAnimation reveal type="fadeInUp">
                          <p className="text-center font-weight-bold mb-0">
                            NEW MEMBERS
                          </p>
                        </MDBAnimation>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>
                        <MDBAnimation reveal type="fadeInUp">
                          <p
                            className="text-center font-weight-bold"
                            style={{ fontSize: "30px" }}
                          >
                            25
                          </p>
                        </MDBAnimation>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol sm="4">
                    <MDBRow>
                      <MDBCol className="text-center mb-4">
                        <MDBAnimation reveal type="fadeInUp">
                          <img height="100px" src={icon1} />
                        </MDBAnimation>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>
                        <MDBAnimation reveal type="fadeInUp">
                          <p className="text-center font-weight-bold mb-0">
                            NAFYC
                          </p>
                        </MDBAnimation>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>
                        <MDBAnimation reveal type="fadeInUp">
                          <p
                            className="text-center font-weight-bold"
                            style={{ fontSize: "30px" }}
                          >
                            $25,000
                          </p>
                        </MDBAnimation>
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
                </MDBCardBody>
                </MDBCard>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer></MDBContainer>
      </div>
    );
  }
}

export default FastStartTrips;
