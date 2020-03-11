import React, { Component } from "react";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBInput,
  MDBAnimation,
} from "mdbreact";

class Login extends Component {
  render() {
    return (
      <MDBContainer fluid style={{ marginTop: "90px" }}>
        <MDBRow>
          <MDBCol md="3" ></MDBCol>
          <MDBCol md="6" className="pt-4">
            <MDBAnimation type="fadeInDown">
            <MDBCard>
              <MDBCardBody className="px-5 py-5">
                <MDBCardTitle className="text-center display-4 mb-5">Log In</MDBCardTitle>
                <MDBInput label="Username" icon="user" />
                <MDBInput label="Password" icon="unlock" type="password" className="mb-5" />
                <button className="btn Ripple-parent btn-block btn-primary" onClick={() => console.log('asfd')}>Log In</button>
              </MDBCardBody>
            </MDBCard>
            </MDBAnimation>
          </MDBCol>
          <MDBCol md="3" ></MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Login;
