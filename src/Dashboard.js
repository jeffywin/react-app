import React from 'react'
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch
} from 'react-router-dom'
import App from './App'

function About() {
	return <h1>About</h1>
}

function Topics() {
	return <h1>Topics</h1>
}

class Dashboard extends React.Component {
	render() {
		// const url = this.props.match.url
		return(
			<Router>
				<div>
				<ul>
						<li> 
							{/*Link跳转专用*/}
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
			</div>
			</Router>
		)
	}
}

export default Dashboard