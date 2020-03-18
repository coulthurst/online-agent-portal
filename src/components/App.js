import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";
import ScrollToTop from "react-router-scroll-top";
import ScrollToTopB from "react-scroll-up";

import { MDBIcon } from "mdbreact";

//* Views
import AdminDashboard from "../views/AdminDashboard";
import ManagerDashboard from "../views/ManagerDashboard";
import AgentDashboard from "../views/AgentDashboard";
import Login from "../views/Login";
import Footer from "./Footer";
import NavBar from "./NavBar";
import WhosOnTrack from "../views/WhosOnTrack";
import YTDAgent from "../views/YTDAgent";
import YTDAgency from "../views/YTDAgency";
import YTDIndependents from "../views/YTDIndependents";
import FastStartTrips from "../views/FastStartTrips";
import Home from "../views/Home";
import ManagerQualifications from "../views/ManagerQualifications";
import FastStartManagerQualifications from "../views/FastStartManagerQualifications";
import TripCredits from "../views/TripCredits";
import Accomodations from "../views/Accomodations";
import NewReps from "../views/NewReps";
import Terms from "../views/Terms";
import Awards from "../views/Awards";
//* Components

class App extends Component {
  render() {
    return (
      <div>
        <Router basename={"/NMB_Online_Agent_Portal"} history={history}>
          <ScrollToTop>
            <div style={{ paddingBottom: "33px" }} />
            <NavBar />
            <Switch>
              <Route
                path={`${process.env.PUBLIC_URL}/`}
                exact
                component={Home}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/dashboard`}
                exact
                component={AdminDashboard}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/agencies/:id`}
                component={ManagerDashboard}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/agents/:id`}
                component={AgentDashboard}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/login`}
                exact
                component={Login}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/whos-on-track`}
                exact
                component={WhosOnTrack}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/ytd-agent`}
                exact
                component={YTDAgent}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/ytd-agency`}
                exact
                component={YTDAgency}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/ytd-independents`}
                exact
                component={YTDIndependents}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/2020-fast-start-trips`}
                exact
                component={FastStartTrips}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/manager-qualifications`}
                exact
                component={ManagerQualifications}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/fast-start-manager-qualifications`}
                exact
                component={FastStartManagerQualifications}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/new-reps`}
                exact
                component={NewReps}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/trip-credits`}
                exact
                component={TripCredits}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/accomodations`}
                exact
                component={Accomodations}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/terms`}
                exact
                component={Terms}
              />
              <Route
                path={`${process.env.PUBLIC_URL}/awards`}
                exact
                component={Awards}
              />
            </Switch>
            <Footer />
          </ScrollToTop>
        </Router>
        <ScrollToTopB showUnder={160} style={{zIndex: "999999999"}}>
          <MDBIcon icon="chevron-circle-up" size="3x" />
        </ScrollToTopB>
      </div>
    );
  }
}

export default App;
