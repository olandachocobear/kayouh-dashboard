import React, { Component } from 'react';

import Widget from "./Widget";
import DistanceWidget from "./DistanceWidget";

import axios from 'axios';

class DistanceWidgetContainer extends Component {

	// cannot work if Class extend other class...
	/*
	getDefaultProps() {
		return {
			foodArr: []
		}
	}
	*/

	constructor() {
		super();

		this.state = {
			metric: [
				{
					unit: 'km',
					convertUnit: 1000
				},
				{	
					unit: 'miles',
					convertUnit: 1609.34
				}
			],
			destination: [
				{	
					city: 'Bogor',
					distance: 80
				},
				{
					city: 'Bandung',
					distance: 200
				},
				{
					city: 'Jogja',
					distance: 400,
				},
			],
			selectedCityIdx: 0,
			selectedMetricIdx: 0,
			calculatedLoop: null
		}

		this.fetchData = this.fetchData.bind(this);
	}

	static defaultProps = {
		displayTotalDistance: true
	}

	componentwillUpdate(nextProps, nextState){
		console.log('received total Distance traveled..')
	}

	componentDidMount() {
		this.fetchData() // kickStart it all!!
	}


    fetchData() {
        // Show loading indicator while initial data is being fetched
        this.setState({ loading: true });

        // Fetching speed data
        let url = `${process.env.REACT_APP_STRAVA_API_STATS_URL}?_id=${this.props.token}&athlete_id=${this.props.athlete_id}&metric=${this.state.metric}`;

        return axios.get(url)
            .then(response => {
                // Update state with data
                this.setState({ 
                	loading: false
                 }); 

                // Strava API returns distance in meter..
                this.convertMetric (response.data.ytd_ride_totals.distance);

            })
            .catch(error => {
                // At least tell the Widget component we have stopped loading
                console.log(error);
                this.setState({ loading: false });
            });
    }

    convertMetric(dist) {

		// getting the metric chosen by user
		let metricUsed = this.state.metric[this.state.selectedMetricIdx];

		// convert the distance into necessary metric
		let convertedDistance = parseInt(dist) / metricUsed.convertUnit;
		console.log ('================' + convertedDistance)
			
        // Update state with real distance
        this.setState({
        	distance: convertedDistance,
        });

        // count how many loop we've been travelling..
        this.calculateLoopCount(this.state.distance);
    }

	calculateLoopCount(distance) {
		let selectedCity = this.state.destination[this.state.selectedCityIdx]
		let calculatedLoop = distance / selectedCity.distance
		
		this.setState ({
			calculatedLoop: calculatedLoop
		});

	}

    render() {
        return (
        	<Widget loading={this.state.loading}
        		 heading={this.props.heading} colspan={this.props.colspan} 
        		 rowspan={this.props.rowspan}>
				
				<DistanceWidget origin="Jakarta"
					destination={this.state.destination[this.state.selectedCityIdx].city}
					loop={(!this.state.calculatedLoop) ? '' : this.state.calculatedLoop } 
					metric={this.state.metric[this.state.selectedMetricIdx].unit} 
					legend={this.props.displayTotalDistance} />

			</Widget>			
        );
    }
}

export default DistanceWidgetContainer;