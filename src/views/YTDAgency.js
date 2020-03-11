import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchAgencies } from "../actions";

import Parallax from "../components/Parallax";
import img from "../imgs/tempImg.jpg";
import OnTrackCounter from "../components/OnTrackCounter";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import YTDAgent from "./YTDAgent";

class YTDAgency extends Component {
  componentDidMount() {
    this.props.fetchAgencies();
  }
  
  render() {
    console.log(this.props)
    return (
      <div>
        <Parallax bg={img} text="AGENCY TRIP TRACKER" />
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol>
              <OnTrackCounter
              fsA={45}
              fsNM={35}
              fsND={35000}
              spA={47}
              spNM={34}
              spND={35000}
              ldA={44}
              ldNM={30}
              ldND={35000}
              lgA={57}
              lgNM={38}
              lgND={46250}
              />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return { agencies: state.agencies };
};

export default connect(mapStateToProps, { fetchAgencies })(YTDAgency);


