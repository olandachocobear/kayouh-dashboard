import React, { Component } from 'react';

// Import request module
import axios from 'axios';

// Import components
import MealsWidget from '../components/MealsWidget';

class MealsWidgetContainer extends Component {
    constructor() {
        super();

        // Set initial state
        this.state = {
            loading: false,
            min: undefined,
            max: undefined,
            value: undefined
        }

        // Bind function to refer to component
        this.getData = this.getData.bind(this);
    }

    // Fetch data when the component is added
    componentDidMount() {
        this.getData().then(_ => {
            // Re-fetch every minute
            //this.interval = setInterval(this.getData, 60000);
        });
    }

    // Fetch new data
    getData() {
		
		let url = this.props.href !== '' ? this.props.href : 'http://localhost:3001/strava/calories?_id=' + this.props.token

        // Tell the Widget component we're currently loading
        this.setState({ loading: true });

        // Fetch Calorie data..
        return axios.get(url)
            .then(response => {
                // Build a new state
                let newState = { loading: false };

				newState.value = response['data'][this.props.target]
					
                // Update state with data
                this.setState(newState);
            })
            .catch(error => {
                // At least tell the Widget component we have stopped loading
                console.log(error);
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            // Render the number widget
            <MealsWidget heading={this.props.heading} colspan={this.props.colspan} rowspan={this.props.rowspan} value={this.state.value} loading={this.state.loading} metric={this.props.metric}/>
        );
    }
}

// Enforce the type of props to send to this component
MealsWidgetContainer.propTypes = {
    heading: React.PropTypes.string,
    colspan: React.PropTypes.number,
    rowspan: React.PropTypes.number,
	target: React.PropTypes.string,
    href: React.PropTypes.string.isRequired,
	metric: React.PropTypes.string
}

export default MealsWidgetContainer;