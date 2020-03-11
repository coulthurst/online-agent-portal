import React, { Component } from "react";
import ProgressMeter from "../ProgressMeter";
import CountUp from "react-countup";

class ManagerListItem extends Component {
  render() {
    return (
      <div>
        <div>
          <a href={`/agents/${this.props.id}`}>{this.props.name} </a>
          <span className="disabled-text">
            - {this.props.display === "nafyc" ? "$" : null}
            <CountUp end={this.props[this.props.display]} />
          </span>
        </div>
        {/* //* Need more data to include progress meter */}
        <ProgressMeter
          current={this.props[this.props.display]}
          // target={this.props[`${this.props.display}CorpGoal`]}
          target="10"

        />
      </div>
    );
  }
}

export default ManagerListItem;
