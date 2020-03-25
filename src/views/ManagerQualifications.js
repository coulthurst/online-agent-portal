import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Banner from "../components/Banner";
import Parallax from "../components/Parallax";
import img1 from "../imgs/tower.jpg";
import icon1 from "../imgs/fast-start.png";
import person1 from "../imgs/becky-helmberger-final_1.jpg";
import person2 from "../imgs/rutten-bill-5x7-300dpi.jpg";
import person3 from "../imgs/kent-stadler_1.jpg";
class ManagerQualifications extends Component {
  render() {
    return (
      <div style={{ marginTop: "30px" }}>
        <Banner bg={img1} text="MANAGER TRIP QUALIFICATIONS" />
        <MDBContainer className="pt-5">
          <MDBRow>
            <MDBCol>
              <p className="text-center display-1 font-weight-bold">01</p>
              <p className="text-center display-4 font-weight-bold">
                2021 Leader Level - NAFIC Conference
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="py-5">
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
                    175
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
                    120
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
                    $140,000
                  </p>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Parallax bg={img1} />
        <MDBContainer className="pt-5">
          <MDBRow>
            <MDBCol>
              <p className="text-center display-1 font-weight-bold">02</p>
              <p className="text-center display-4 font-weight-bold">
                2021 LegendLevel - Mexico
              </p>
            </MDBCol>
          </MDBRow>
          <MDBRow className="py-5">
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
        </MDBContainer>
        <MDBContainer
          fluid
          className="py-5"
          style={{
            background: "linear-gradient(0deg, #8a8686 0%, #ffffff 100%)"
          }}
        >
          <MDBContainer className="py-5">
            <MDBRow>
              <MDBCol>
                <p className="text-center display-4 font-weight-bold ">
                  The Management Team
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="py-5">
              <MDBCol sm="12" md="4">
                <MDBRow>
                  <MDBCol className="text-center mb-4">
                    <img src={person1} />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <p className="text-center font-weight-bold mb-0">
                      Becky Helmberger
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol sm="12" md="4">
                <MDBRow>
                  <MDBCol className="text-center mb-4">
                    <img src={person2} />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <p className="text-center font-weight-bold mb-0">
                      Bill Rutten
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
              <MDBCol sm="12" md="4">
                <MDBRow>
                  <MDBCol className="text-center mb-4">
                    <img src={person3} />
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol>
                    <p className="text-center font-weight-bold mb-0">
                      Kent Stadler
                    </p>
                  </MDBCol>
                </MDBRow>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
        <MDBContainer className="py-5 text-center">
          <MDBRow>
            <MDBCol>
              <h4 className="mb-5">
                SR VP of Member Acquisition & Engagement Qualifications
              </h4>
              <h2 className="mb-3">2021 Leader Level ​NAFIC Conference</h2>
              <p>MINIMUM QUALIFIERS</p>
              <p>2</p>
              <h2 className="mt-5 mb-3">2021 Legend Level ​Mexico</h2>
              <p>MINIMUM QUALIFIERS</p>
              <p>4</p>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <h4 className="mb-5">
                Sales Director Qualifications
              </h4>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol>
              <h2 className="mb-3">2021 Leader Level
​NAFIC Conference</h2>
              <MDBRow>
                <MDBCol>
                  <MDBRow >
                    <MDBCol className="text-center">
                      <img height="150px" src={icon1} />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className="text-center">
                      <p className="text-center font-weight-bold mb-0">
                        SALES CAPACITY INCREASE
                  </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className="text-center">
                      <p
                        className="text-center font-weight-bold"
                        style={{ fontSize: "48px" }}
                      >
                        10%
                  </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <MDBRow >
                    <MDBCol className="text-center">
                      <img height="150px" src={icon1} />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className="text-center">
                      <p className="text-center font-weight-bold mb-0">
                        NEW MEMBERS
                  </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className="text-center">
                      <p
                        className="text-center font-weight-bold"
                        style={{ fontSize: "48px" }}
                      >
                        700
                  </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <MDBRow >
                    <MDBCol className="text-center">
                      <img height="150px" src={icon1} />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className="text-center">
                      <p className="text-center font-weight-bold mb-0">
                        NAFYC INCREASE OVER 2019
                  </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className="text-center">
                      <p
                        className="text-center font-weight-bold"
                        style={{ fontSize: "48px" }}
                      >
                        10%
                  </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBCol>


            <MDBCol>
              <h2 className="mb-3">2021 Legend Level
​Mexico</h2>
              <MDBRow>
                <MDBCol>
                  <MDBRow >
                    <MDBCol className="text-center">
                      <img height="150px" src={icon1} />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className="text-center">
                      <p className="text-center font-weight-bold mb-0">
                        SALES CAPACITY INCREASE
                  </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className="text-center">
                      <p
                        className="text-center font-weight-bold"
                        style={{ fontSize: "48px" }}
                      >
                        25%
                  </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <MDBRow >
                    <MDBCol className="text-center">
                      <img height="150px" src={icon1} />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className="text-center">
                      <p className="text-center font-weight-bold mb-0">
                        NEW MEMBERS
                  </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className="text-center">
                      <p
                        className="text-center font-weight-bold"
                        style={{ fontSize: "48px" }}
                      >
                        1,000
                  </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
              <MDBRow>
                <MDBCol>
                  <MDBRow >
                    <MDBCol className="text-center">
                      <img height="150px" src={icon1} />
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className="text-center">
                      <p className="text-center font-weight-bold mb-0">
                        NAFYC INCREASE OVER 2019
                  </p>
                    </MDBCol>
                  </MDBRow>
                  <MDBRow>
                    <MDBCol className="text-center">
                      <p
                        className="text-center font-weight-bold"
                        style={{ fontSize: "48px" }}
                      >
                        20%
                  </p>
                    </MDBCol>
                  </MDBRow>
                </MDBCol>
              </MDBRow>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default ManagerQualifications;
