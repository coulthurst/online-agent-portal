import React, { Component } from 'react';
import Parallax from "../components/Parallax";
import img from "../imgs/tempImg.jpg";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBDataTable
  } from "mdbreact";
  import OnTrackCounter from "../components/OnTrackCounter";

class YTDIndependents extends Component {
    render() {
        return (<div>
            <Parallax bg={img} text="INDEPENDENT TRIP TRACKER"/>
            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol className="text-center py-5">
                        <h4 ><strong>YTD Agent Results As Of 3/2/2020</strong></h4>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                    <MDBCol>
                        <OnTrackCounter
                         fsA="45"
                         fsNM="35"
                         fsND="35000"
                         spA="47"
                         spNM="34"
                         spND="35000"
                         ldA="44"
                         ldNM="30"
                         ldND="35000"
                         lgA="57"
                         lgNM="38"
                         lgND="46250"
                         />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>



        </div>)
    }
}


// create data table of all agents as of: date

export default YTDIndependents;