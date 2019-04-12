import React from 'react';

import {Route, Switch, Link, Redirect} from 'react-router-dom';
import '../styles/App.css';

import Stats from './NewStats';
import UserList from './UserList';
import SignupModal from './SignupModal';
import Signup from './Signup';
import ProtectedPaths from './ProtectedPaths'

//const StatsHome = ({ match}) => { // changed with createClass

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)

const StatsHome = React.createClass({

	componentWillUpdate(nextProps) {
		console.log('going to change Props..')
		console.log(nextProps)
	    const { location } = this.props
	    // set previousLocation if props.location is not modal
	    if (nextProps.history.action !== 'POP' &&
	      (!location.state || !location.state.modal)) 
	    {
	    	this.previousLocation = location
	    }
 	},

	render() {
		let isLoggedIn = false;

		console.log("match" + JSON.stringify(this.props.match))
		console.log("location: " + JSON.stringify(this.props.location))
		const { location } = this.props
	    const isModal = !!(
	      location.state &&
	      location.state.modal &&
	      this.previousLocation !== location // not initial render
	    )
	
		// karena skarang udah React class, put retur under render 
			return( // ditambahin nih karena ada isModal
				<div>
			    <Switch location={isModal ? this.previousLocation : location}>
				    //define different Views, depending of routes..
				    //Route #1..
				    <Route exact path={this.props.match.url} render={()=> (<div>
				    	<h2> Please Select Athletes:</h2>
				    	<UserList />

				    	<br/>
				    	<Link
					        to={{
					          pathname: '/stats/signup',
					          state: { modal: true }
					        }}
					      >
					        <p><u>Signup</u></p>
					      </Link>
				    </div>
				    )} />

				    //Route #2
				    <Route path='/stats/signup/' component={Signup}/>

				    //Route #2b (this original direct to athlete got pushed because now there's stats-signup)..
				    {/* <Route path={`${this.props.match.url}/:athlete_id`} component={Stats}/> */}

						{/* Children option #1 */}
						{/* <Route component={AuthedPagesContainer} children={
							<Switch>
									<Route path={`/stats/:athlete_id`} component={Stats}/>	
									<Route path={`/profile/:athlete_id`} component={Stats}/>							
							</Switch>
						}>		
						</Route> */}

						{/* Children option #2 */}
						{/* <Route children={(props) => // will return 'location', 'match', and 'history'
							{
								if (isLoggedIn) 
									return (
										<Switch>
											<Route path={`/stats/:athlete_id`} component={Stats}/>	
											<Route path={`/profile/:athlete_id`} component={Stats}/>
										</Switch>
								)
								else
									return (<div>You need to be logged in first.</div>)
							}		
						}>
						</Route> */}

						{/* Children option #3 : using custom-made Function */}
						{/* <RouteNest component>
							<RouteNest path={'/stats/:athlete_id'} component={Stats}/>
							<RouteNest path={'/stats/:athlete_id/edit'} component={Stats}/>
						</RouteNest> */}

						{/* Using protectedRoute  */}
						<PrivateRoute path={'/stats/:athlete_id'} component={Stats}/>

				    <Route render={()=> (<h2> Stats missing.</h2>)}/>
				</Switch>

				
				{isModal ? <Route path='/stats/signup/' component={SignupModal} /> : null}

				</div>
			)
		// end of return Render
	}
})

export default StatsHome;