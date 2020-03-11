import React, { Component } from "react";

class ProgressMeter extends Component {
  getPercentComplete() {
    const barWidth = (this.props.current / this.props.target) * 100;
    return barWidth;
  }

  getBarColor() {
    const p = this.getPercentComplete();
    if ( p < 34) {
        return '#D11925';
    } else if ( p < 67 ) {
        return '#F9B702';
    } else {
        return '#0EB564';
    }
  }
  
  render() {
    return (
      <div className="barBG">
        <div
          className="barProgress"
          style={{ width: `${this.getPercentComplete()}%`, background: this.getBarColor() }}
        />
      </div>
    );
  }
}

export default ProgressMeter;
