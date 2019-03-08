import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import '../styles/App.css';

const UserLink = React.createClass({

	render() {
		console.log(location)
		return(
		  <li>
			<Link to={{
			   pathname	: `${location.pathname}/${this.props.id}`,
			   search: '?show=all',
			   state: {
			   	  token: this.props.token
			   }
			  }}>
				  {this.props.nama}
			</Link>
			<a href="#" onClick={() => this.deleteProfile(this.props.id)}> [x] </a>
		  </li>
		)
	},

	deleteProfile (profile_id) {
		let url = "http://localhost:3001/user/" + profile_id;

		// Post request ..
		return axios.delete(url)
				.then(response => {
					if (response.data.ok) // check if success delete
						this.props.toRefresh();
		}).catch(failure => {
			console.log (failure)
		});
	}
})

export default UserLink;