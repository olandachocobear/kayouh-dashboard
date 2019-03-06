import React, { Component } from 'react';
import PizzaDisplay from '../components/PizzaDisplay';

// Import styling
import '../styles/NumberDisplay.css';
import '../styles/NumberWidget.css';
import Configs from '../dash_config';

class PizzaDisplayDelayed extends Component {

    render() {
    	var last = 0, addition = 220;

    	return (
    		<div>
    		{ 
    			this.props.items.map(function (satuan, idx){

    				// make sure its time of show gradually increase
    				last = last + addition;
					addition=addition/Configs.DELAY.PIZZA;
    				
    				return (
    					<div key={idx} className="mealItem" >
    						<PizzaDisplay wait={last} />
    					</div>
    				);

    			})
			}
    		</div>
		)
        
    }
}

// Enforce the type of props to send to this component
PizzaDisplayDelayed.propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    value: React.PropTypes.number
}

export default PizzaDisplayDelayed;