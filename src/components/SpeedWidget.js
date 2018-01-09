import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer";

class SpeedWidget extends Component {
	
	render(){
		if (this.props.avgSpeed=='') {
            return <p>Loading...</p>;
        }

		return (
				  <ReactSpeedometer
					  fluidwidth
					  maxValue={100}
					  value={this.props.avgSpeed}
					  needleColor="lightbrown"
					  needleTransitionDuration={11000}
					  needleTransition="easeElastic"
					  startColor="navy"
					  segments={6}
					  endColor="blue"
					  textColor="brown"
				  />
		)
	}
}

export default SpeedWidget;
