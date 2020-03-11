import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";
import Parallax from "../components/Parallax";
import img from "../imgs/tempImg.jpg";

class Awards extends Component {
  render() {
    return (
      <div>
        <Parallax bg={img} text="Awards" />

        <MDBContainer className="mt-5">
          <MDBRow>
            <MDBCol>
                <MDBAnimation reveal type="fadeInUp">
              <h1 className="text-center font-weight-bold">
                ANNUAL BANQUET AWARDS
              </h1>
              </MDBAnimation>
              <MDBAnimation reveal type="fadeInUp">
              
              <p className="text-center mb-0 mt-5">
                Excellence deserves distinctive recognition.
              </p>
              <p className="text-center mb-0">
                National Mutual Benefit takes pride in honoring the significant
                accomplishments of our agents and managers in 2019.
              </p>
              <p className="text-center mb-0">
                See below for our complete award listing.
              </p>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-5">
            <MDBCol>
            <MDBAnimation reveal type="fadeInUp">

              <h3 className="text-center font-weight-bold mb-3">
                CONFERENCE CLUB AWARDS
              </h3>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow>

            <MDBCol className="mx-3">
          <MDBAnimation reveal type="fadeInUp">
              <MDBRow>
                <img style={{ maxWidth: "100%" }} src={img} />
              </MDBRow>
              <MDBRow>
                <p className="font-weight-bold mt-3 mb-0">MDRT AWARD</p>
                <p>
                  This award honors those exceptional agent(s) who earn
                  membership to the industry recognized accomplishment. The
                  award is based on a minimum of 55 apps and $97,000 NAFYC
                  (excluding trip credits).
                </p>
              </MDBRow>
            </MDBAnimation>
            </MDBCol>

            <MDBCol className="mx-3">
            <MDBAnimation reveal type="fadeInUp" delay=".1s">
              <MDBRow>
                <img style={{ maxWidth: "100%" }} src={img} />
              </MDBRow>
              <MDBRow>
                <p className="font-weight-bold mt-3 mb-0">LEGEND AWARD</p>
                <p>
                  ​This award honors those agent(s) who earned Legend Level
                  Conference Trip with a minimum of 40 apps, 30 new members and
                  $55,000 NAFYC (includes trip credits). Manager(s) earn this
                  award with a minimum of 225 apps, 150 new members and $185,000
                  NAFYC (includes trip credits).
                </p>
              </MDBRow>
            </MDBAnimation>
            </MDBCol>
            <MDBCol className="mx-3">
            <MDBAnimation reveal type="fadeInUp" delay=".2s">

              <MDBRow>
                <img style={{ maxWidth: "100%" }} src={img} />
              </MDBRow>
              <MDBRow>
                <p className="font-weight-bold mt-3 mb-0">LEADER AWARD</p>
                <p>
                  This award honors those agent(s) who earned Leader Level
                  Conference Trip with a minimum of 30 apps, 25 new members and
                  $35,000 NAFYC (includes trip credits). Manager(s) earn this
                  award with a minimum of 175 apps, 120 new members and $140,000
                  NAFYC (includes trip credits).
                </p>
              </MDBRow>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-5">
            <MDBCol>
            <MDBAnimation reveal type="fadeInUp">

              <h3 className="text-center font-weight-bold mb-3">
                ACHIEVEMENT AWARDS
              </h3>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol className="mx-3">
            <MDBAnimation reveal type="fadeInUp">

              <MDBRow>
                <img style={{ maxWidth: "100%" }} src={img} />
              </MDBRow>
              <MDBRow>
                <p className="font-weight-bold mt-3 mb-0">LIFE LEADER AWARD</p>
                <p>
                This award is presented to agent(s) producing a minimum of 100 net issued new life (only) applications.
                </p>
              </MDBRow>
              </MDBAnimation>
            </MDBCol>
            <MDBCol className="mx-3">
            <MDBAnimation reveal type="fadeInUp" delay=".1s">

              <MDBRow>
                <img style={{ maxWidth: "100%" }} src={img} />
              </MDBRow>
              <MDBRow>
                <p className="font-weight-bold mt-3 mb-0">MEMBERSHIP AWARD</p>
                <p>
                This award is presented to the agent with the most net issued new members (minimum of 50).
                </p>
              </MDBRow>
              </MDBAnimation>
            </MDBCol>
            <MDBCol className="mx-3">
            <MDBAnimation reveal type="fadeInUp" delay=".2s">

              <MDBRow>
                <img style={{ maxWidth: "100%" }} src={img} />
              </MDBRow>
              <MDBRow>
                <p className="font-weight-bold mt-3 mb-0">ROOKIE OF THE YEAR</p>
                <p>
                This award is presented to a new agent with two years or less of NMB insurance experience. It can only be won once and the agent must qualify for Conference Trip.
                </p>
              </MDBRow>
              </MDBAnimation>
            </MDBCol>
            <MDBCol className="mx-3">
            <MDBAnimation reveal type="fadeInUp" delay=".3s">

              <MDBRow>
                <img style={{ maxWidth: "100%" }} src={img} />
              </MDBRow>
              <MDBRow>
                <p className="font-weight-bold mt-3 mb-0">TOP LIFE PRODUCER</p>
                <p>
                This award is presented to the agent who produced the most net issued life (only) commissions.
                </p>
              </MDBRow>
              </MDBAnimation>
            </MDBCol>
            <MDBCol className="mx-3">
            <MDBAnimation reveal type="fadeInUp" delay=".4s">

              <MDBRow>
                <img style={{ maxWidth: "100%" }} src={img} />
              </MDBRow>
              <MDBRow>
                <p className="font-weight-bold mt-3 mb-0">VISION AWARD</p>
                <p>
                This award recognizes the agent who best exemplifies the concept of fraternalism and philosophy of NMB. The award is based on member growth and satisfaction, teamwork, continuing education, and fraternalism.
                </p>
              </MDBRow>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Awards;
