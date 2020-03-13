import React, { Component } from "react";
import { Link } from "react-router-dom";

import ProgressMeter from "../ProgressMeter";
import CountUp from "react-countup";

class AgentListItem extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to={`${process.env.PUBLIC_URL}/agents/${this.props.id}`}>{this.props.name} </Link>
          <span className="disabled-text"> 
            - {this.props.display === "nafyc" ? "$" : null}
            <CountUp end={this.props[this.props.display]}/>
          </span>
        </div>
        <ProgressMeter
          current={this.props[this.props.display]}
          target={this.props[`${this.props.display}CorpGoal`]}
        />
      </div>
    );
  }
}

export default AgentListItem;
