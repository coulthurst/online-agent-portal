import React, { Component } from "react";

class Parallax extends Component {
  render() {
 
    return (
      <div className="parallax_container" style={{backgroundImage: `url(${this.props.bg}`}} >
        <h3 className="parallax_text">{this.props.text}</h3>
      </div>
    );
  }
}

export default Parallax;
