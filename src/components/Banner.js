import React, { Component } from "react";

class Banner extends Component {
    render() {
    return (
      <div className="banner_container" style={{backgroundImage: `url(${this.props.bg}`}}>
        <h3 className="banner_text">{this.props.text}</h3>
      </div>
    );
  }
}

export default Banner;
