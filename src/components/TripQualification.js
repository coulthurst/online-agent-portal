import React, { Component } from "react";
import {
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCard,
  MDBCol
} from "mdbreact";
import icon1 from "../imgs/fast-start.png";
import icon2 from "../imgs/end-of-summer-push.png";

const tripOne = {
  icon: icon1,
  category: "Fast Start to 2020",
  date: "January 1 - March 31, 2020",
  details1: "Two-Night Suite",
  details2: "$300 Visa Gift Card for Travel/Meals/Entertainment",
  resortOneImg: "",
  resortOneName: "The Lodge",
  resortOneLocation: "Deadwood, South Dakota",
  resortTwoImg: "",
  resortTwoName: "The Wilderness",
  resortTwoLocation: "Wisconsin Dells, Wisconsin",
  accomodationsLink: "",
  applicationsAMT: "10",
  newMembersAMT: "8",
  nafycAMT: "7,500"
};

const tripTwo = {
  icon: icon2,
  category: "End of Summer Push",
  date: " January 1 - September 20, 2020",
  details1: "Two-Night Suite",
  details2: "$300 Visa Gift Card for Travel/Meals/Entertainment",
  resortOneImg: "",
  resortOneName: "The Lodge",
  resortOneLocation: "Deadwood, South Dakota",
  resortTwoImg: "",
  resortTwoName: "The Wilderness",
  resortTwoLocation: "Wisconsin Dells, Wisconsin",
  accomodationsLink: "",
  applicationsAMT: "30",
  newMembersAMT: "25",
  nafycAMT: "25,000"
};

class TripQualification extends Component {
  render() {
    let trip = this.props.title === "fastStart" ? tripOne : tripTwo;
    return (
      <MDBCard className="mt-4">
        <div className="text-center pt-4">
          
            <img height="150px" src={trip.icon} />
          
        </div>
        <MDBCardBody className="text-center">
          
            <MDBCardTitle>{trip.category}</MDBCardTitle>
            <MDBCardText>{trip.date}</MDBCardText>
            <MDBCardText className="mt-5 mb-1 font-weight-bold">
              Trip Includes:
            </MDBCardText>
            <MDBCardText className="mb-0">{trip.details1}</MDBCardText>
            <MDBCardText>{trip.details2}</MDBCardText>
            <MDBCardText className="mt-5 mb-3 font-weight-bold">
              Resort Choices
            </MDBCardText>
          
          <MDBRow>
            <MDBCol>
              
                <img style={{ maxWidth: "100%" }} src={this.props.img1} />
              
              <MDBCardText className="font-weight-bold mb-0">
                {trip.resortOneName}
              </MDBCardText>
              
                <MDBCardText>{trip.resortOneLocation}</MDBCardText>
              
            </MDBCol>
            <MDBCol>
              
                <img style={{ maxWidth: "100%" }} src={this.props.img1} />
              
              
                <MDBCardText className="font-weight-bold mb-0">
                  {trip.resortTwoName}
                </MDBCardText>
              
              
                <MDBCardText>{trip.resortTwoLocation}</MDBCardText>
              
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-4">
            <MDBCol>
            
              <a className="btn btn-dark btn-block" href="#">
                Check out the accomodations
              </a>
              
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-3">
                  <MDBCol>
                    
                      <p
                        className="text-center font-weight-bold mb-4"
                        style={{ fontSize: "30px" }}
                      >
                        {this.props.tripTitle}
                      </p>
                    
                  </MDBCol>
                </MDBRow>
                <MDBRow>
                  <MDBCol sm="4">
                    <MDBRow>
                      <MDBCol className="text-center mb-4">
                        
                          <img height="100px" src={icon1} />
                        
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
                            style={{ fontSize: "30px" }}
                          >
                            {this.props.applications}
                          </p>
                        
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol sm="4">
                    <MDBRow>
                      <MDBCol className="text-center mb-4">
                        
                          <img height="100px" src={icon1} />
                        
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
                            style={{ fontSize: "30px" }}
                          >
                            {this.props.newMembers}
                          </p>
                        
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                  <MDBCol sm="4">
                    <MDBRow>
                      <MDBCol className="text-center mb-4">
                        
                          <img height="100px" src={icon1} />
                        
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>
                        
                          <p className="text-center font-weight-bold mb-0">
                            NAFYC
                          </p>
                        
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol>
                        
                          <p
                            className="text-center font-weight-bold"
                            style={{ fontSize: "30px" }}
                          >
                            ${this.props.nafyc}
                          </p>
                        
                      </MDBCol>
                    </MDBRow>
                  </MDBCol>
                </MDBRow>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default TripQualification;
