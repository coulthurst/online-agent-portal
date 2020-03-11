import React, { Component } from "react";
import { connect } from "react-redux";

import ManagerListItem from "./ManagerListItem";



class ManagerList extends Component {
  renderList() {
    return this.props.agents.map(agent => {
      if (this.props.location.id === agent.agency) {
        return (
          <ManagerListItem  key={agent.id} {...agent} display={this.props.display} />
        );
      }
    });
  }

  render() {
    return this.renderList();
  }
}

const mapStateToProps = state => {
  return { agents: state.agents };
};

export default connect(mapStateToProps)(ManagerList);
