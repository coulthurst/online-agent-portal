import React, { Component } from "react";
import { MDBContainer } from "mdbreact";

class Banner extends Component {
    render() {
    return (
      <div className="banner_container" style={{backgroundImage: `url(${this.props.bg}`}}>
        <MDBContainer className="text-center"><h3 className="banner_text">{this.props.text}</h3></MDBContainer>
      </div>
    );
  }
}

export default Banner;
