import React from 'react';
import MtSvgLines from 'react-mt-svg-lines'; 

const DistanceCurve = ({origin, destination} ) => {

		console.log (`drawing curve from ${origin} to ${destination}..`);
		
		return(
			<MtSvgLines animate={ true } duration={ 2400 }>
			  <svg viewBox="0 80 1000 1000">
				<path stroke="gray" strokeWidth="18" fill="none" d="M104,258 C108,111 397,73 405,332" />
			  </svg>
			</MtSvgLines>
		);
}


export default DistanceCurve;