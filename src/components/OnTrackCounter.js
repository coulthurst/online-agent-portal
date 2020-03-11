import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBAnimation,
} from "mdbreact";
import CountUp from 'react-countup';

class OnTrack extends Component {
  render() {
    return (
      <div>
          <MDBRow>
              <MDBCol>
                  <h2 className="text-center pt-4 pb-2" style={{color: "#24678d", fontWeight: "700"}}>Where I Should Be At To Be On Track For Trip?</h2>
                  <h4 className="text-center pb-4 disabled-text">Agency February YTD</h4>
              </MDBCol>
          </MDBRow>
        <MDBRow>
          <MDBCol lg="6" sm="12">
            <MDBAnimation reveal type="fadeInLeft">
            <MDBCard className="mb-4" >
              <MDBCardBody >
                <h2 className="text-center mb-4" style={{ fontWeight: "700"}}>Fast Start to 2020</h2>
                <MDBRow>
                  <MDBCol>
                    <h3 className="text-center" style={{ fontSize: "50px", color: "rgb(36, 103, 141)"}}><CountUp end={this.props.fsA}/></h3>
                    <p className="text-center secondary-text">Applications</p>
                  </MDBCol>
                  <MDBCol>
                    <h3 className="text-center" style={{ fontSize: "50px", color: "rgb(36, 103, 141)"}}><CountUp end={this.props.fsNM}/></h3>
                    <p className="text-center secondary-text">New Members</p>
                  </MDBCol>
                  <MDBCol>
                    <h3 className="text-center" style={{ fontSize: "50px", color: "rgb(36, 103, 141)"}}><CountUp end={this.props.fsND}/></h3>
                    <p className="text-center secondary-text mb-0">NAFYC Dollars</p>
                    <p className="text-center disabled-text">*Excludes Trip Credit</p>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            </MDBAnimation>
          </MDBCol>
          <MDBCol lg="6" sm="12">
          <MDBAnimation reveal type="fadeInRight">
            <MDBCard className="mb-4" >
              <MDBCardBody>
                <h2 className="text-center mb-4" style={{fontWeight: "700"}}>End of Summer Push</h2>
                <MDBRow>
                  <MDBCol>
                    <h3 className="text-center" style={{ fontSize: "50px", color: "rgb(36, 103, 141)"}}><CountUp end={this.props.spA}/></h3>
                    <p className="text-center secondary-text">Applications</p>
                  </MDBCol>
                  <MDBCol>
                    <h3 className="text-center" style={{ fontSize: "50px", color: "rgb(36, 103, 141)"}}><CountUp end={this.props.spNM}/></h3>
                    <p className="text-center secondary-text">New Members</p>
                  </MDBCol>
                  <MDBCol>
                    <h3 className="text-center" style={{ fontSize: "50px", color: "rgb(36, 103, 141)"}}><CountUp end={this.props.spND}/></h3>
                    <p className="text-center mb-0 secondary-text">NAFYC Dollars</p>
                    <p className="text-center disabled-text">*Excludes Trip Credit</p>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol lg="6" sm="12">
          <MDBAnimation reveal type="fadeInLeft">
            <MDBCard className="mb-4" >
              <MDBCardBody >
                <h2 className="text-center mb-4" style={{fontWeight: "700"}}>Leader Level</h2>
                <MDBRow>
                  <MDBCol>
                    <h3 className="text-center" style={{ fontSize: "50px", color: "rgb(36, 103, 141)"}}><CountUp end={this.props.ldA}/></h3>
                    <p className="text-center secondary-text">Applications</p>
                  </MDBCol>
                  <MDBCol>
                    <h3 className="text-center" style={{ fontSize: "50px", color: "rgb(36, 103, 141)"}}><CountUp end={this.props.ldNM}/></h3>
                    <p className="text-center secondary-text">New Members</p>
                  </MDBCol>
                  <MDBCol>
                    <h3 className="text-center" style={{ fontSize: "50px", color: "rgb(36, 103, 141)"}}><CountUp end={this.props.ldND}/></h3>
                    <p className="text-center secondary-text mb-0">NAFYC Dollars</p>
                    <p className="text-center disabled-text">*Includes Trip Credit</p>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            </MDBAnimation>
          </MDBCol>
          <MDBCol lg="6" sm="12">
          <MDBAnimation reveal type="fadeInRight">
            <MDBCard >
              <MDBCardBody>
                <h2 className="text-center mb-4" style={{ fontWeight: "700"}}>Legend Level</h2>
                <MDBRow>
                  <MDBCol>
                    <h3 className="text-center" style={{ fontSize: "50px", color: "rgb(36, 103, 141)"}}><CountUp end={this.props.lgA}/></h3>
                    <p className="text-center secondary-text">Applications</p>
                  </MDBCol>
                  <MDBCol>
                    <h3 className="text-center" style={{ fontSize: "50px", color: "rgb(36, 103, 141)"}}><CountUp end={this.props.lgNM}/></h3>
                    <p className="text-center secondary-text">New Members</p>
                  </MDBCol>
                  <MDBCol>
                    <h3 className="text-center" style={{ fontSize: "50px", color: "rgb(36, 103, 141)"}}><CountUp end={this.props.lgND}/></h3>
                    <p className="text-center secondary-text mb-0">NAFYC Dollars</p>
                    <p className="text-center disabled-text">*Includes Trip Credit</p>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
        <MDBRow>
            <MDBCol>
                <p className="text-center disabled-text">Note:  Counter only uses whole numbers.</p>
            </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default OnTrack;
