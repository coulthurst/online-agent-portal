import React, { Component } from 'react';
import Parallax from "../components/Parallax";
import img from "../imgs/pool-trees.jpg";
import { MDBContainer, MDBRow, MDBCol } from 'mdbreact';
import OnTrackCounter from "../components/OnTrackCounter";

class YTDAgent extends Component {
    render() {
        return (
        <div>
            <Parallax bg={img} text="AGENT TRIP TRACKER"/>
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol className="text-center py-5">
                        <h4 ><strong>YTD Agent Results As Of 3/2/2020</strong></h4>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <OnTrackCounter
                         fsA="10"
                         fsNM="8"
                         fsND="7500"
                         spA="10"
                         spNM="9"
                         spND="8333"
                         ldA="8"
                         ldNM="7"
                         ldND="8750"
                         lgA="10"
                         lgNM="8"
                         lgND="13750"
                         />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>)
    }
}


// create data table of all agents as of: date

export default YTDAgent;