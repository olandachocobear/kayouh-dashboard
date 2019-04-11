import React, { Component } from 'react';
import {Route, Switch, Link, Redirect} from 'react-router-dom';

import '../styles/App.css';

class AuthedPagesContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
            users: [123],
            isLoggedIn: false
		}
	}

	componentDidMount () {
        // const { dispatch, currentURL } = this.props
        console.log(this.props)
	}

    render() {
        console.log("current location is: " + JSON.stringify(this.props.location))
        console.log("props match url: " + this.props.match.url)
        
        var {location} = this.props;
        
        //define whats going to display..
        if (this.state.isLoggedIn) {
            //....
        }

        else {
            
            console.log(this.props.children)
            return (
                <Redirect to={{
                    pathname: `${this.props.match.url}/`,
                    search: '?show=all',
                    state: {
                        token: this.props.token
                    }
                    }}
                />
            )
        }
        // return this.props.children
    //   } else {
    //     return null
    //   }

    }
}

export default AuthedPagesContainer;