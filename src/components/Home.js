import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAgents } from "../actions";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle
} from "mdbreact";

class Placeholder extends Component {
  componentDidMount() {
    this.props.fetchAgents();

  }


  render() {
    console.log(this.props);
    return (
      <MDBContainer fluid style={{ marginTop: "30px" }}>
        <MDBRow>
          <MDBCol />
          <MDBCol md="4" className="py-4">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>Online Agent Portal</MDBCardTitle>
               
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol />
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = state => {
  return { agents: state.agents  };
};

export default connect(mapStateToProps, { fetchAgents })(Placeholder);
