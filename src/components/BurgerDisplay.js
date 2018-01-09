import React, { Component } from 'react';

// Import styling
import '../styles/NumberDisplay.css';

class BurgerDisplay extends Component {
    render() {
        return (
            <img src={require('../assets/if_Food_C206_2427852.png')} alt="burger" />
        );
    }
}

// Enforce the type of props to send to this component
BurgerDisplay.propTypes = {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    value: React.PropTypes.number
}

export default BurgerDisplay;