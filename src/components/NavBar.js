import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem
} from "mdbreact";
import Logo from '../imgs/nmb_icon.png';
import SideNav from './SideNav'

class NavBar extends Component {
 
  render() {
    return (
      <div>
      <SideNav />
      <MDBNavbar light expand="md" fixed="top">
        <MDBNavbarBrand>
          <img id="navbar_logo" alt="NMB Logo" src={Logo}/>
        </MDBNavbarBrand>
        <MDBCollapse navbar>
          <MDBNavbarNav left>
           
            <MDBNavItem>
             <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Trip Tracker</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/whos-on-track">Who's On Track?</MDBDropdownItem>
                  <MDBDropdownItem href="/ytd-agent">YTD Agent</MDBDropdownItem>
                  <MDBDropdownItem href="/ytd-agency">YTD Agnecy</MDBDropdownItem>
                  <MDBDropdownItem href="/ytd-independents">YTD Independents</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
             <MDBNavLink to="/2020-fast-start-trips">2020 Fast Start Trips</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Details</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="/manager-qualifications">Manager Trip Qualifications</MDBDropdownItem>
                  <MDBDropdownItem href="/fast-start-manager-qualifications">Fast Start Manager Trip Qualifications</MDBDropdownItem>
                  <MDBDropdownItem href="/new-reps">New Reps</MDBDropdownItem>
                  <MDBDropdownItem href="/trip-credits">Trip Credits</MDBDropdownItem>
                  <MDBDropdownItem href="/accomodations">Accomodations</MDBDropdownItem>
                  <MDBDropdownItem href="/awards">Awards</MDBDropdownItem>
                  <MDBDropdownItem href="/terms">Terms</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
             <MDBNavLink to="/dashboard">Dashboard</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          <MDBNavItem>
             <MDBNavLink to="/Login">Log In</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          
        </MDBCollapse>
      </MDBNavbar>
      </div>
    );
  }
}

export default NavBar;
