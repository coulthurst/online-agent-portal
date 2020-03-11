import React, { Component } from "react";
import {
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCard,
  MDBCol,
  MDBAnimation
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
      <MDBCard>
        <div className="text-center pt-4">
          <MDBAnimation type="fadeInUp" reveal>
            <img height="150px" src={trip.icon} />
          </MDBAnimation>
        </div>
        <MDBCardBody className="text-center">
          <MDBAnimation type="fadeInUp" reveal>
            <MDBCardTitle>{trip.category}</MDBCardTitle>
            <MDBCardText>{trip.date}</MDBCardText>
            <MDBCardText className="mt-5 mb-1 font-weight-bold">
              Trip Includes:
            </MDBCardText>
            <MDBCardText className="mb-0">{trip.details1}</MDBCardText>
            <MDBCardText>{trip.details2}</MDBCardText>
            <MDBCardText className="mt-5 font-weight-bold">
              Resort Choices
            </MDBCardText>
          </MDBAnimation>
          <MDBRow>
            <MDBCol>
              <MDBAnimation type="fadeInUp" reveal>
                <img style={{ maxWidth: "100%" }} src={this.props.img1} />
              </MDBAnimation>
              <MDBCardText className="font-weight-bold mb-0">
                {trip.resortOneName}
              </MDBCardText>
              <MDBAnimation type="fadeInUp" reveal>
                <MDBCardText>{trip.resortOneLocation}</MDBCardText>
              </MDBAnimation>
            </MDBCol>
            <MDBCol>
              <MDBAnimation type="fadeInUp" reveal>
                <img style={{ maxWidth: "100%" }} src={this.props.img1} />
              </MDBAnimation>
              <MDBAnimation type="fadeInUp" reveal>
                <MDBCardText className="font-weight-bold mb-0">
                  {trip.resortTwoName}
                </MDBCardText>
              </MDBAnimation>
              <MDBAnimation type="fadeInUp" reveal>
                <MDBCardText>{trip.resortTwoLocation}</MDBCardText>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-3">
            <MDBCol>
            <MDBAnimation type="fadeInUp" reveal>
              <a className="btn btn-dark btn-block" href="#">
                Check out the accomodations
              </a>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    );
  }
}

export default TripQualification;
