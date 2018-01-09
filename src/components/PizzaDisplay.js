import React, { Component } from 'react';

// Import styling
import '../styles/NumberDisplay.css';

class PizzaDisplay extends Component {
    render() {
        return (
            <img src={require('../assets/if_Food_C219_2427861.png')} alt="Pizza" />
        );
    }
}

// Enforce the type of props to send to this component
PizzaDisplay.propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    value: React.PropTypes.number
}

export default PizzaDisplay;