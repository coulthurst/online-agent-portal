import React, { Component } from "react";
import {
  MDBIcon,
  MDBListGroup,
  MDBContainer,
  MDBNavLink
} from "mdbreact";

class SideNav extends Component {
  state = { open: false };
  openSideNav() {
    this.setState({ open: true });
  }
  closeSideNav() {
    this.setState({ open: false });
  }
  handleClick() {
    this.closeSideNav();
  }
  render() {
    return (
      <div>
        <div id="sideNav_open" onClick={() => this.openSideNav()}>
          <MDBIcon icon="bars" size="2x" />
        </div>
        <div id="sideNav" className={this.state.open ? "" : "closed"}>
          <div id="sideNav_card">
            <div id="sideNav_close" onClick={() => this.closeSideNav()}>
              <MDBIcon icon="arrow-left" size="2x" />
            </div>
            <div className="sideNav_banner"></div>
            <div style={{height: 'calc(100% - 210px)'}} className="overflow-auto">
            <MDBContainer className="sideNav_container pb-5">
              <MDBListGroup>
                <MDBNavLink onClick={() => this.handleClick()}  to="/"><MDBIcon icon="home" className="mr-3" fixed/>Home</MDBNavLink>
                <MDBNavLink onClick={() => this.handleClick()} to="/whos-on-track"><MDBIcon icon="tachometer-alt" className="mr-3" fixed/>Who's On Track?</MDBNavLink>
                <MDBNavLink onClick={() => this.handleClick()} to="/"><MDBIcon icon="user" className="mr-3" fixed/>YTD Agent</MDBNavLink>
                <MDBNavLink onClick={() => this.handleClick()} to="/"><MDBIcon icon="users" className="mr-3" fixed/>YTD Agency</MDBNavLink>
                <MDBNavLink onClick={() => this.handleClick()} to="/"><MDBIcon icon="user" className="mr-3" fixed/>YTD Independents</MDBNavLink>
                <MDBNavLink onClick={() => this.handleClick()} to="/"><MDBIcon icon="plane" className="mr-3" fixed/>2020 Fast Start Trips</MDBNavLink>
                <MDBNavLink onClick={() => this.handleClick()} to="/"><MDBIcon icon="check-square" className="mr-3" fixed/>Manager Trip Qualifications</MDBNavLink>
                <MDBNavLink onClick={() => this.handleClick()} to="/"><MDBIcon icon="check-square" className="mr-3" fixed/>Fast Start Manager Qualifications</MDBNavLink>
                <MDBNavLink onClick={() => this.handleClick()} to="/"><MDBIcon icon="users" className="mr-3" fixed/>New Reps</MDBNavLink>
                <MDBNavLink onClick={() => this.handleClick()} to="/"><MDBIcon icon="money-bill" className="mr-3" fixed/>Trip Credits</MDBNavLink>
                <MDBNavLink onClick={() => this.handleClick()} to="/"><MDBIcon icon="hotel" className="mr-3" fixed/>Accomadations</MDBNavLink>
                <MDBNavLink onClick={() => this.handleClick()} to="/"><MDBIcon icon="info-circle" className="mr-3" fixed/>Terms</MDBNavLink>


              </MDBListGroup>
            </MDBContainer>
            </div>
          </div>
          <div id="sideNav_shadow" onClick={() => this.closeSideNav()}></div>
        </div>
      </div>
    );
  }
}

export default SideNav;
