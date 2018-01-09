import React, { Component } from 'react';

import NumberWidgetContainer from '../components/NumberWidgetContainer';
/*import GraphWidgetContainer from '../components/GraphWidgetContainer';*/
import ActivitiesWidgetContainer from '../components/ActivitiesWidgetContainer';
import ProfileWidgetContainer from '../components/ProfileWidgetContainer';
import MealsWidgetContainer from '../components/MealsWidgetContainer';
import SpeedWidgetContainer from '../components/SpeedWidgetContainer';

import '../styles/App.css';
import Home from './Home';

class Stats extends Component {
	
    render() {
  	console.log(this.props.location.state); // ==> getting State declared from previous Link
    console.log(this.props.match.params.athlete_id) // ==> params from URL/path

      return (
		<div className="App">
  
			<ActivitiesWidgetContainer href="" heading="Activities (Last 6)" rowspan={3} token={this.props.location.state.token}/>

			<NumberWidgetContainer href="" target="count" metric="" heading="Number of Rides (on 2017)" token={this.props.location.state.token} athlete_id={this.props.match.params.athlete_id}/>
			
			<ProfileWidgetContainer href="" heading="Profile" colspan={2} rowspan={1} token={this.props.location.state.token}/>
			
			<SpeedWidgetContainer href="" heading="Average Speed" colspan={2} rowspan={1} token={this.props.location.state.token}/>
			
			<NumberWidgetContainer href="" metric="km" convertUnit="1000" target="distance" heading="Total KM ridden"  token={this.props.location.state.token} athlete_id={this.props.match.params.athlete_id}/>
			
			<NumberWidgetContainer href="" metric="hours" convertUnit="3600" target="moving_time" heading="Total Time Spent on saddle" token={this.props.location.state.token} athlete_id={this.props.match.params.athlete_id}/>

			<MealsWidgetContainer href="" metric="kg" convertUnit="" target="total_cal" heading="Calories Burned (this month)" colspan={2} rowspan={1} token={this.props.location.state.token}/>
			
			<div>
			 <center>
			  <img src={require('../assets/api_logo_pwrdBy_strava_horiz_light.png')} alt="strava-logo" />
			 </center>
			</div>

		</div>
      );
    }
}

export default Stats;