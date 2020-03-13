import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchAgency, fetchAgents  } from "../actions";

import { Line } from "react-chartjs-2";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBDataTable,
  MDBAnimation
} from "mdbreact";
import Parallax from "../components/Parallax";
import img from "../imgs/tempImg.jpg";

import ManagerList from "../components/Manager/ManagerList";
import OnTrackCounter from "../components/OnTrackCounter";

class ManagerDashboard extends Component {
  data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        label: "New Members",
        data: [3, 6, 4, 8, 9, 7],
        backgroundColor: [
          "rgba(99, 211, 245, .3)",
          "rgba(99, 211, 245, .3)",
          "rgba(99, 211, 245, .3)",
          "rgba(99, 211, 245, .3)",
          "rgba(99, 211, 245, .3)",
          "rgba(99, 211, 245, .3)"
        ],
        borderColor: ["rgba(99, 211, 245, 1)"],
        borderWidth: 4
      }
    ]
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchAgents();
    this.props.fetchAgency(id);
  }

  renderTableData() {
    return {
      columns: [
        {
          label: "Name",
          field: "name",
          sort: "asc"
        },
        {
          label: "Applications",
          field: "applications",
          sort: "asc"
        },
        {
          label: "New Members",
          field: "newMembers",
          sort: "asc"
        },
        // {
        //   label: "New Members (Corporate Goal)",
        //   field: "newMembersCorpGoal",
        //   sort: "asc"
        // },
        // {
        //   label: "New Members (Personal Goal)",
        //   field: "newMembersPersGoal",
        //   sort: "asc"
        // },
        // {
        //   label: "NAFYC",
        //   field: "nafyc",
        //   sort: "asc"
        // },
        // {
        //   label: "NAFYC (Corporate Goal)",
        //   field: "nafycCorpGoal",
        //   sort: "asc"
        // },
        // {
        //   label: "NAFYC (Personal Goal)",
        //   field: "nafycPersGoal",
        //   sort: "asc"
        // },
        // {
        //   label: "Trip Credits",
        //   field: "tripCredits",
        //   sort: "asc"
        // },
        // {
        //   label: "Total",
        //   field: "total",
        //   sort: "asc"
        // },
        // {
        //   label: "Pending",
        //   field: "pending",
        //   sort: "asc"
        // },
        {
          label: "View",
          field: "view"
        }
      ],
      rows: this.renderTableRows()
    };
  }

  renderTableRows() {

      return this.props.agents.map(agent => {
        return {
          name: agent.name,
          applications: agent.applications,
          newMembers: agent.newMembers,
          // newMembersCorpGoal: agent.newMembersCorpGoal,
          // newMembersPersGoal: agent.newMembersPersGoal,
          // nafyc: agent.nafyc,
          // nafycCorpGoal: agent.nafycCorpGoal,
          // nafycPersGoal: agent.nafycPersGoal,
          // tripCredits: agent.tripCredits,
          // total: agent.total,
          // pending: agent.pending,
          view: <Link to={`${process.env.PUBLIC_URL}/agents/${agent.id}`}>View</Link>
        };
      });
    }

  render() {
    return (
      <div style={{ marginTop: "30px" }}>
      <Parallax bg={img} text={this.props.agency.name}/>

      <MDBContainer fluid >
        <MDBRow>
          <MDBCol md="4" className="pt-4">
            <MDBAnimation type="fadeInUp">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>New Members</MDBCardTitle>
                <ManagerList
                  display="newMembers"
                  location={this.props.agency}
                />
              </MDBCardBody>
            </MDBCard>
            </MDBAnimation>
          </MDBCol>
          <MDBCol md="4" className="pt-4">
          <MDBAnimation reveal type="fadeInUp" delay=".1s">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>Applications</MDBCardTitle>
                <ManagerList
                  location={this.props.agency}
                  display="applications"
                />
              </MDBCardBody>
            </MDBCard>
            </MDBAnimation>
          </MDBCol>
          <MDBCol md="4" className="pt-4">
            <MDBAnimation reveal type="fadeInUp" delay=".2s">
            <MDBCard>
              <MDBCardBody><Line data={this.data} /></MDBCardBody>
            </MDBCard>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
        <MDBRow className="pt-4">
          <MDBCol>
          <MDBAnimation reveal type="fadeInUp" delay=".3s">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>Agents</MDBCardTitle>
                <MDBDataTable
                  noBottomColumns
                  striped
                  hover
                  responsive
                  data={this.renderTableData()}
                />
              </MDBCardBody>
            </MDBCard>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
        <MDBRow className="py-4">
          <MDBCol>
                <OnTrackCounter 
                fsA="45"
                fsNM="35"
                fsND="35000"
                spA="47"
                spNM="34"
                spND="35000"
                ldA="44"
                ldNM="30"
                ldND="35000"
                lgA="57"
                lgNM="38"
                lgND="46250"
                />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    agents: state.agents.filter(agent => agent.agency === state.agency.id),
    agency: state.agency
  };
};

export default connect(mapStateToProps, { fetchAgents, fetchAgency })(
  ManagerDashboard
);
