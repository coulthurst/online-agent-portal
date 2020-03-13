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
  MDBDropdownItem,
  MDBContainer
} from "mdbreact";
import Logo from '../imgs/nmb_icon.png';
import SideNav from './SideNav'

class NavBar extends Component {
 
  render() {
    return (
      <div>
      <SideNav />
      <MDBNavbar light expand="md" fixed="top" scrolling>
        <MDBContainer>
        <MDBNavbarBrand>
          <img id="navbar_logo" alt="NMB Logo" src={Logo}/>
        </MDBNavbarBrand>
        <MDBCollapse navbar>
          <MDBNavbarNav left>
           
            <MDBNavItem>
             <MDBNavLink className="font-weight-bold" to={`${process.env.PUBLIC_URL}/`}>HOME</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2 font-weight-bold">TRIP TRACKER</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBNavLink className="font-weight-bold" to={`${process.env.PUBLIC_URL}/whos-on-track`}>WHO'S ON TRACK?</MDBNavLink>
                  <MDBNavLink className="font-weight-bold" to={`${process.env.PUBLIC_URL}/ytd-agent`}>YTD AGENT</MDBNavLink>
                  <MDBNavLink className="font-weight-bold" to={`${process.env.PUBLIC_URL}/ytd-agency`}>YTD AGENCY</MDBNavLink>
                  <MDBNavLink className="font-weight-bold" to={`${process.env.PUBLIC_URL}/ytd-independents`}>YTD INDEPENDENTS</MDBNavLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
             <MDBNavLink className="font-weight-bold" to={`${process.env.PUBLIC_URL}/2020-fast-start-trips`}>2020 FAST START TRIPS</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2 font-weight-bold">DETAILS</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBNavLink className="font-weight-bold" to={`${process.env.PUBLIC_URL}/manager-qualifications`}>MANAGER TRIP QUALIFICATIONS</MDBNavLink>
                  <MDBNavLink className="font-weight-bold" to={`${process.env.PUBLIC_URL}/fast-start-manager-qualifications`}>FAST START MANAGER TRIP QUALIFICATIONS</MDBNavLink>
                  <MDBNavLink className="font-weight-bold" to={`${process.env.PUBLIC_URL}/new-reps`}>NEW REPS</MDBNavLink>
                  <MDBNavLink className="font-weight-bold" to={`${process.env.PUBLIC_URL}/trip-credits`}>TRIP CREDITS</MDBNavLink>
                  <MDBNavLink className="font-weight-bold" to={`${process.env.PUBLIC_URL}/accomodations`}>ACCOMODATIONS</MDBNavLink>
                  <MDBNavLink className="font-weight-bold" to={`${process.env.PUBLIC_URL}/awards`}>AWARDS</MDBNavLink>
                  <MDBNavLink className="font-weight-bold" to={`${process.env.PUBLIC_URL}/terms`}>TERMS</MDBNavLink>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
             <MDBNavLink className="font-weight-bold" to={`${process.env.PUBLIC_URL}/dashboard`}>DASHBOARD</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
          <MDBNavItem>
             <MDBNavLink className="font-weight-bold" to={`${process.env.PUBLIC_URL}/Login`}>LOG IN</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
          
        </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      </div>
    );
  }
}

export default NavBar;
