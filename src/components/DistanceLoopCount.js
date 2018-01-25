import React from 'react';

const DistanceLoopCount = props => {

		console.log ('number of loop: ' + props.value);
		
		return(
			<div style={{marginTop:'145px'}}>
				<h1>{props.value}x</h1>
				<h3 
				  	style={{
					  verticalAlign: 'bottom',
					  marginTop: '-15px'
				  	}}
				>
					{props.subtext}
				</h3>
			</div>
		);
}


export default DistanceLoopCount;