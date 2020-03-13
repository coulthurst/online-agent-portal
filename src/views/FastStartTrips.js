import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody } from "mdbreact";
import Parallax from "../components/Parallax";
import img from "../imgs/waterpark.jpg";
import img2 from "../imgs/tempImg.jpg";

import TripQualification from "../components/TripQualification";
import icon1 from "../imgs/fast-start.png";


class FastStartTrips extends Component {
  render() {
    return (
      <div>
        <Parallax bg={img} text="FAST START PROGRAM" />
        <MDBContainer
          fluid
          style={{ background: "#e2e2e2" }}
          className="py-5 mb-5"
        >
          <MDBRow>
            <MDBCol />
            <MDBCol md="8">
              
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
              
            </MDBCol>
            <MDBCol />
          </MDBRow>
        </MDBContainer>
        <MDBContainer>
          <MDBRow>
            <MDBCol lg="6">
              

                  
                <TripQualification title="fastStart" img1={img2} img2={img2} applications={10} newMembers={8} nafyc={'7,500'}/>
                
            </MDBCol>
            <MDBCol lg="6">
                <TripQualification img1={img2} img2={img2} applications={30} newMembers={25} nafyc={'25,000'}/>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default FastStartTrips;
