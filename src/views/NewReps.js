import React, { Component } from 'react';
import Parallax from "../components/Parallax";
import img from "../imgs/beach-rocks.jpg";

class NewReps extends Component {
    render() {
        return (<div>
            <Parallax bg={img} />
        </div>)
    }
}

export default NewReps;