import React from 'react';
import MtSvgLines from 'react-mt-svg-lines'; 

const DistanceCurve = ({origin, destination} ) => {

		console.log (`drawing curve from ${origin} to ${destination}..`);
		
		// `animate` must have diff value to be re-Rendered.. 
		return(
			<MtSvgLines animate={ String( Date.now() ) } duration={ 2100 }>
			  <svg viewBox="60 70 400 400" 
			  	   style={{height: '250px'}}
			  >
				<path stroke="gray" strokeWidth="18" fill="none" d="M104,258 C108,111 397,73 405,352" />
			  </svg>
			</MtSvgLines>
		);
}


export default DistanceCurve;