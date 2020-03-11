import React, { Component } from "react";
import { connect } from "react-redux";

import AgentListItem from "./AgentListItem";



class AgentList extends Component {
  renderList() {
    return this.props.agents.map(agent => {
      return (
        <AgentListItem  key={agent.id} {...agent} display={this.props.display} />
      );
    });
  }

  render() {
    return this.renderList();
  }
}

const mapStateToProps = state => {
  return { agents: state.agents };
};

export default connect(mapStateToProps)(AgentList);
