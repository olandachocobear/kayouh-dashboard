import React from 'react';
import MtSvgLines from 'react-mt-svg-lines'; 

const DistanceLoopCount = props => {

		console.log ('number of loop: ' + props.value);
		
		return(
			<div>
				<h1>{props.value}x</h1>
				<h3 
				  	style={{
					  display: 'inline',
					  verticalAlign: 'bottom'	
				  	}}
				>
					{props.subtext}
				</h3>
			</div>
		);
}


export default DistanceLoopCount;