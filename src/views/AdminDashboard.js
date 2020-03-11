import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAgents, fetchAgencies } from "../actions";

import AgentList from "../components/Agent/AgentList";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBDataTable,
  MDBBtn,
  MDBAnimation
} from "mdbreact";



class AdminDashboard extends Component {
  componentDidMount() {
    this.props.fetchAgents();
    this.props.fetchAgencies();
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
          label: "Agency",
          field: "agency",
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
        {
          label: "View Agent",
          field: "view",
          sort: "asc"
        }
        // {
        //   label: "New Members (Corporate Goal)",
        //   field: "newMembersCorpGoal",
        //   sort: "asc",
        // },
        // {
        //   label: "New Members (Personal Goal)",
        //   field: "newMembersPersGoal",
        //   sort: "asc",
        // },
        // {
        //   label: "NAFYC",
        //   field: "nafyc",
        //   sort: "asc",
        // },
        // {
        //   label: "NAFYC (Corporate Goal)",
        //   field: "nafycCorpGoal",
        //   sort: "asc",
        // },
        // {
        //   label: "NAFYC (Personal Goal)",
        //   field: "nafycPersGoal",
        //   sort: "asc",
        // },
        // {
        //   label: "Trip Credits",
        //   field: "tripCredits",
        //   sort: "asc",
        // },
        // {
        //   label: "Total",
        //   field: "total",
        //   sort: "asc",
        // },
        // {
        //   label: "Pending",
        //   field: "pending",
        //   sort: "asc",
        // }
      ],
      rows: this.renderTableRows()
    };
  }

  renderTableRows() {
    return this.props.agents.map(agent => {
      return {
        name: agent.name,
        agency: agent.agency,
        applications: agent.applications,
        newMembers: agent.newMembers,
        view: <div><a href={`/agents/${agent.id}`} className="btn btn-primary btn-sm m-0 mr-1" size="sm">View Agent</a><a href={`/agencies/${agent.agency}`} className="btn btn-primary btn-sm m-0" size="sm">View Agency</a></div>
      };
    });
  }

  render() {
    return (
      <div style={{ marginTop: "30px" }}>
      <MDBContainer fluid >
        <MDBRow>
          <MDBCol md="4" className="pt-4">
            <MDBAnimation reveal type="fadeInUp">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>New Members</MDBCardTitle>
                <AgentList display="newMembers" />
              </MDBCardBody>
            </MDBCard>
            </MDBAnimation>
          </MDBCol>
          <MDBCol md="4" className="pt-4">
          <MDBAnimation reveal type="fadeInUp" delay=".1s">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>Applications</MDBCardTitle>
                <AgentList display="applications" />
              </MDBCardBody>
            </MDBCard>
            </MDBAnimation>
          </MDBCol>
          <MDBCol md="4" className="pt-4">
          <MDBAnimation reveal type="fadeInUp" delay=".2s">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>NAFYC</MDBCardTitle>
                <AgentList display="nafyc" />
              </MDBCardBody>
            </MDBCard>
            </MDBAnimation>
          </MDBCol>
        </MDBRow>
        <MDBRow className="py-4">
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
      </MDBContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { agents: state.agents, agencies: state.agencies };
};

export default connect(mapStateToProps, { fetchAgents, fetchAgencies })(
  AdminDashboard
);
