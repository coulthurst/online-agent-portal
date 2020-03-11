import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAgents } from "../actions";
import { MDBContainer, MDBRow, MDBCol, MDBAnimation } from "mdbreact";

import img from "../imgs/tempImg.jpg";
import FastStart from "../imgs/fast-start.png";
import SummerPush from "../imgs/end-of-summer-push.png";
import Leader from "../imgs/leader_5.png";
import Legend from "../imgs/legend_5.png";
import Parallax from "../components/Parallax";

class WhosOnTrack extends Component {
  componentDidMount() {
    this.props.fetchAgents();
  }

  render() {
    return (
      <div style={{ marginTop: "30px", background: "#fff" }}>
        <Parallax bg={img} text="LOOK WHO'S ON TRACK!" />
        <MDBContainer style={{ marginTop: "30px" }}>
          <MDBRow className="d-block d-md-none">
            <MDBCol md="3" className="py-4 text-center ">
              <p style={{ fontSize: "30px" }}>Fast Start to 2020</p>
              <img src={FastStart} alt="" />
            </MDBCol>
            <MDBCol md="3" className="py-4 text-center">
              <p style={{ fontSize: "30px" }}>End of Summer Push</p>
              <img src={SummerPush} alt="" />
            </MDBCol>
            <MDBCol md="3" className="py-4 text-center">
              <p style={{ fontSize: "30px" }}>Leader</p>
              <img src={Leader} alt="" />
            </MDBCol>
            <MDBCol md="3" className="py-4 text-center">
              <p style={{ fontSize: "30px" }}>Legend</p>
              <img src={Legend} alt="" />
            </MDBCol>
          </MDBRow>
          <div className="d-none d-md-block">
          <MDBRow >
            <MDBCol md="3" className="pt-4 text-center ">
              <MDBAnimation reveal type="fadeInUp">
              <p style={{ fontSize: "30px" }}>Fast Start to 2020</p>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="3" className="pt-4 text-center ">
            <MDBAnimation reveal type="fadeInUp" delay=".1s">
              <p style={{ fontSize: "30px" }}>End of Summer Push</p>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="3" className="pt-4 text-center ">
            <MDBAnimation reveal type="fadeInUp" delay=".2s">
              <p style={{ fontSize: "30px" }}>Leader</p>
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="3" className="pt-4 text-center ">
            <MDBAnimation reveal type="fadeInUp" delay=".3s">
              <p style={{ fontSize: "30px" }}>Legend</p>
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          <MDBRow >
            <MDBCol md="3" className="py-4 text-center">
            <MDBAnimation reveal type="fadeInUp">
              <img src={FastStart} alt="" />
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="3" className="pb-4 pt-1 text-center">
            <MDBAnimation reveal type="fadeInUp" delay=".1s">
              <img src={SummerPush} alt="" />
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="3" className="py-4 text-center">
            <MDBAnimation reveal type="fadeInUp" delay=".2s">
              <img src={Leader} alt="" />
              </MDBAnimation>
            </MDBCol>
            <MDBCol md="3" className="py-4 text-center">
            <MDBAnimation reveal type="fadeInUp" delay=".3s">
              <img src={Legend} alt="" />
              </MDBAnimation>
            </MDBCol>
          </MDBRow>
          </div>

        </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { agents: state.agents };
};

export default connect(mapStateToProps, { fetchAgents })(WhosOnTrack);
