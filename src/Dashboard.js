import React from 'react'
import { connect } from 'react-redux'
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch,
	Redirect
} from 'react-router-dom'
import App from './App'
import { logout, login } from './Auth.redux'

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
			const redirecLogin = <Redirect to='/login'></Redirect>
			const page = (
				<div>
				<ul>
						<li> 
							<Link to='/dashboard'>Home</Link>
						</li>
						<li>
							<Link to='/dashboard/about'>About</Link>
						</li>
						<li>
							<Link to='/dashboard/topics'>Topics</Link>
						</li>
					</ul>
					<Switch> 
						<Route path='/dashboard/' exact component={App}></Route>
						<Route path='/dashboard/about' component={About}></Route>
						<Route path='/dashboard/topics' component={Topics}></Route>
					</Switch>
					<button onClick={this.props.logout}>注销</button>
			</div>
		)
			return this.props.isAuth ? page : redirecLogin
	}
}

export default Dashboard