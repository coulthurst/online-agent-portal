import React, { Component } from "react";
import { connect } from "react-redux";
import ProgressMeter from "../components/ProgressMeter";
import { Doughnut } from "react-chartjs-2";
import { fetchAgent } from "../actions";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBAnimation
} from "mdbreact";
import OnTrackCounter from "../components/OnTrackCounter";
import CountUp from "react-countup";
import Parallax from "../components/Parallax";
import img from "../imgs/tempImg.jpg";

class AgentDashboard extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchAgent(id);

    // this.setState({
    //   chartDataNafyc: {
    //     datasets: [
    //       {
    //         label: "# of Votes",
    //         data: this.calculateOnTrack("nafyc"),
    //         backgroundColor: [
    //           this.setProgressColor("nafyc"),
    //           "rgba(210, 218, 226,.5)"
    //         ],
    //         borderColor: [this.setProgressColor("nafyc"), "rgba(0, 0, 0,.1)"],
    //         borderWidth: 3
    //       }
    //     ]
    //   },
    //   chartDataApps: {
    //     datasets: [
    //       {
    //         label: "# of Votes",
    //         data: this.calculateOnTrack("applications"),
    //         backgroundColor: [
    //           this.setProgressColor("applications"),
    //           "rgba(210, 218, 226,.5)"
    //         ],
    //         borderColor: [
    //           this.setProgressColor("applications"),
    //           "rgba(0, 0, 0,.1)"
    //         ],
    //         borderWidth: 3
    //       }
    //     ]
    //   },
    //   chartDataMembers: {
    //     datasets: [
    //       {
    //         label: "# of Votes",
    //         data: this.calculateOnTrack("newMembers"),
    //         backgroundColor: [
    //           this.setProgressColor("newMembers"),
    //           "rgba(210, 218, 226,.5)"
    //         ],
    //         borderColor: [
    //           this.setProgressColor("newMembers"),
    //           "rgba(0, 0, 0,.1)"
    //         ],
    //         borderWidth: 3
    //       }
    //     ]
    //   }
    // });
  }

  // calculateOnTrack(category) {
  //   switch (category) {
  //     case "nafyc":
  //       return [
  //         this.state.agent.nafyc,
  //         this.state.agent.nafycCorpGoal - this.state.agent.nafyc
  //       ];
  //     case "newMembers":
  //       return [
  //         this.state.agent.newMembers,
  //         this.state.agent.newMembersCorpGoal - this.state.agent.newMembers
  //       ];
  //     case "applications":
  //       return [
  //         this.state.agent.applications,
  //         this.state.agent.newMembersCorpGoal - this.state.agent.newMembers
  //       ];
  //     default:
  //       break;
  //   }
  // }

  // setProgressColor(category) {
  //   let current, target;

  //   switch (category) {
  //     case "nafyc":
  //       current = this.state.agent.nafyc;
  //       target = this.state.agent.nafycCorpGoal;
  //       break;
  //     case "newMembers":
  //       current = this.state.agent.newMembers;
  //       target = this.state.agent.newMembersCorpGoal;
  //       break;
  //     case "applications":
  //       current = this.state.agent.applications;
  //       target = this.state.agent.newMembersCorpGoal;
  //       break;
  //     default:
  //       break;
  //   }

  //   let total = current / target;
  //   if (total < 0.33) {
  //     return "#FF8E86";
  //   } else if (total < 0.5) {
  //     return "#FFF8A8";
  //   } else {
  //     return "#63E080";
  //   }
  // }

  // options = {
  //   rotation: 1 * Math.PI,
  //   circumference: 1 * Math.PI,
  //   tooltips: false,
  //   cutoutPercentage: 80,
  //   animation: {
  //     animationRotate: true,
  //     duration: 1500
  //   }
  // };
  handleOnChange = e => {
    console.log(e.target.value)
    
  }


  render() {
    return (
      <div style={{ marginTop: "30px" }}>
      <Parallax bg={img} text={this.props.agent.name}/>
      <MDBContainer fluid  className="py-5">
       
        <MDBRow>
          <MDBCol>
          <MDBAnimation type="fadeInUp" >
            <h4 className="text-center">
              View data as:{" "}
              <select
                className="browser-default custom-select"
                style={{ width: "150px" }}
                onChange={(e) => this.handleOnChange(e) }
              >
                <option value="current">Current</option>
                <option value="1">YTD - 2019</option>
                <option value="2">YTD - 2018</option>
                <option value="2">YTD - 2017</option>
              </select>
            </h4>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="4" className="pt-4">
          <MDBAnimation type="fadeInUp">
            <MDBCard>
              <MDBCardBody className="pb-5">
                <MDBCardTitle className="text-center pt-3">NAFYC</MDBCardTitle>
                {/* <Doughnut
                  data={this.state.chartDataNafyc}
                  options={this.options}
                /> */}
                <div className="text-center display-4 speedometer_num">
                  {/* $<CountUp end={this.props.agent.nafyc} /> */}
                </div>
              </MDBCardBody>
            </MDBCard>
            </MDBAnimation>
          </MDBCol>
          <MDBCol md="4" className="pt-4">
          <MDBAnimation type="fadeInUp" delay=".25s">
            <MDBCard>
              <MDBCardBody className="pb-5">
                <MDBCardTitle className="text-center pt-3">
                  New Members
                </MDBCardTitle>
                {/* <Doughnut
                  data={this.state.chartDataMembers}
                  options={this.options}
                /> */}
                <div className="text-center display-4 ">
                  {this.props.agent.newMembers}
                  {/* <CountUp end={this.props.agent.newMembers} /> */}
                </div>
              </MDBCardBody>
            </MDBCard>
            </MDBAnimation>
          </MDBCol>
          <MDBCol md="4" className="pt-4">
          <MDBAnimation type="fadeInUp" delay=".5s">
            <MDBCard>
              <MDBCardBody className="pb-5">
                <MDBCardTitle className="text-center pt-3">
                  Applications
                </MDBCardTitle>
                {/* <Doughnut
                  data={this.state.chartDataApps}
                  options={this.options}
                /> */}
                <div className="text-center display-4 ">
                  {this.props.agent.applications}

                  {/* <CountUp end={this.state.agent.applications} /> */}
                </div>
              </MDBCardBody>
            </MDBCard>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol md="4" className="pt-4">
            <MDBCard>
              {/* <MDBCardBody>
                <MDBCardTitle>Corporate Goals</MDBCardTitle>
                <p className="mb-0 secondary-text">
                  New Members
                  <span className="disabled-text">
                    - {this.state.agent.newMembers}
                  </span>
                </p>
                <ProgressMeter
                  current={this.state.agent.newMembers}
                  target={this.state.agent.newMembersCorpGoal}
                />
                <p className="mb-0 secondary-text">
                  NAFYC
                  <span className="disabled-text">
                    - ${this.state.agent.nafyc}
                  </span>
                </p>
                <ProgressMeter
                  current={this.state.agent.nafyc}
                  target={this.state.agent.nafycCorpGoal}
                />
                <MDBCardTitle className="pt-5">Personal Goals</MDBCardTitle>
                <p className="mb-0 secondary-text">
                  New Members
                  <span className="disabled-text">
                    - {this.state.agent.newMembers}
                  </span>
                </p>
                <ProgressMeter
                  current={this.state.agent.newMembers}
                  target={this.state.agent.newMembersPersGoal}
                />
                <p className="mb-0 secondary-text">
                  NAFYC
                  <span className="disabled-text">
                    - ${this.state.agent.nafyc}
                  </span>
                </p>
                <ProgressMeter
                  current={this.state.agent.nafyc}
                  target={this.state.agent.nafycPersGoal}
                />
              </MDBCardBody> */}
            </MDBCard>
          </MDBCol>

          <MDBCol md="4" className="pt-4">
            <MDBCard>
              {/* <MDBCardBody>
                <p className="secondary-text">
                  Applications
                  <span className="disabled-text">
                    - {this.state.agent.applications}
                  </span>
                </p>
                <p className="secondary-text">
                  Trip Credits
                  <span className="disabled-text">
                    - {this.state.agent.applications}
                  </span>
                </p>
                <p className="secondary-text">
                  Total
                  <span className="disabled-text">
                    - {this.state.agent.applications}
                  </span>
                </p>
                <p className="secondary-text">
                  Pending
                  <span className="disabled-text">
                    - {this.state.agent.applications}
                  </span>
                </p>
              </MDBCardBody> */}
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-5">
          <MDBCol>
            <OnTrackCounter />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { agent: state.agent };
};

export default connect(mapStateToProps, { fetchAgent })(AgentDashboard);
