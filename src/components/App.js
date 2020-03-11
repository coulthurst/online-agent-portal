import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "../history";

//* Views
import AdminDashboard from "../views/AdminDashboard";
import ManagerDashboard from "../views/ManagerDashboard";
import AgentDashboard from "../views/AgentDashboard";
import Login from "../views/Login";
import Footer from "./Footer";
import NavBar from "./NavBar";
// import Home from "./Home";
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
        <Router history={history}>
          <div style={{ paddingBottom: "33px" }} />
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/dashboard" exact component={AdminDashboard} />
            <Route path="/agencies/:id" component={ManagerDashboard} />
            <Route path="/agents/:id" component={AgentDashboard} />
            <Route path="/login" exact component={Login}/>
            <Route path="/whos-on-track" exact component={WhosOnTrack}/>
            <Route path="/ytd-agent" exact component={YTDAgent}/>
            <Route path="/ytd-agency" exact component={YTDAgency}/>
            <Route path="/ytd-independents" exact component={YTDIndependents}/>
            <Route path="/2020-fast-start-trips" exact component={FastStartTrips}/>
            <Route path="/manager-qualifications" exact component={ManagerQualifications}/>
            <Route path="/fast-start-manager-qualifications" exact component={FastStartManagerQualifications}/>
            <Route path="/new-reps" exact component={NewReps}/>
            <Route path="/trip-credits" exact component={TripCredits}/>
            <Route path="/accomodations" exact component={Accomodations}/>
            <Route path="/terms" exact component={Terms}/>
            <Route path="/awards" exact component={Awards}/>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
