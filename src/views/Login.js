import React, { Component } from "react";
import img from "../imgs/tempImg.jpg";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBInput
} from "mdbreact";

class Login extends Component {
  render() {
    return (
      <MDBContainer className="bg-img" fluid style={{ paddingTop: "90px", paddingBottom: "90px", marginBottom: "-60px" }}>
        <MDBRow>
          <MDBCol md="3" ></MDBCol>
          <MDBCol md="6" className="pt-4">
            <MDBCard style={{zIndex: "9"}}>
              <MDBCardBody className="px-5 py-5">
                <MDBCardTitle className="text-center display-4 mb-5">Log In</MDBCardTitle>
                <MDBInput label="Username" icon="user" />
                <MDBInput label="Password" icon="unlock" type="password" className="mb-5" />
                <button className="btn Ripple-parent btn-block btn-primary" onClick={() => console.log('asfd')}>Log In</button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="3" ></MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Login;
