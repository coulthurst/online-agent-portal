import React, { Component } from "react";
import { MDBContainer } from "mdbreact";


class Parallax extends Component {
  render() {
 
    return (
      <div className="parallax_container" style={{backgroundImage: `url(${this.props.bg}`}} >
        <MDBContainer className="text-center"><h3 className="parallax_text">{this.props.text}</h3></MDBContainer>
      </div>
    );
  }
}

export default Parallax;
