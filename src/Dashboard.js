import React from 'react'
import { connect } from 'react-redux'
import {
	Link,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import App from './App'
import { logout } from './Auth.redux'

function About() {
	return <h1>About</h1>
}

function Topics() {
	return <h1>Topics</h1>
}

@connect(
	state => state.auth,
	{ logout }
)

class Dashboard extends React.Component {
	render() {
			const match = this.props.match.url
			const redirecLogin = <Redirect to='/login'></Redirect>
			const page = (
				<div>
				<ul>
						<li> 
							<Link to={`${match}`}>Home</Link>
						</li>
						<li>
							<Link to={`${match}/about`}>About</Link>
						</li>
						<li>
							<Link to={`${match}/topics`}>Topics</Link>
						</li>
					</ul>
					<Switch> 
						<Route path={`${match}`} exact component={App}></Route>
						<Route path={`${match}/about`} component={About}></Route>
						<Route path={`${match}/topics`} component={Topics}></Route>
					</Switch>
					<button onClick={this.props.logout}>注销</button>
			</div>
		)
			return this.props.isAuth ? page : redirecLogin
	}
}

export default Dashboard