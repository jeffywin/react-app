import React from 'react'
import { login, getUserData } from './Auth.redux'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

@connect(
	state => state.auth,
	{ login, getUserData }
)

class Auth extends React.Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		person: {}
	// 	}
	// }
	componentDidMount() {
		this.props.getUserData()
		// axios.get('/data').then((res) => {
		// 	if (res.status === 200) {
		// 		this.setState({ person:res.data })
		// 	}
		// })
	}
	// btnClick = () => {
	// 	console.log(this.state)
	// 	if (this.state.person.name === 'jeffywin') {
	// 		return this.props.login
	// 	}
	// }
	render() {
		return (
			<div>
				{this.props.name}
				{this.props.isAuth ? <Redirect to='/Dashboard'></Redirect> : null}
				<h2>请登录,您没有权限</h2>
				<button onClick={this.props.login}>登录</button>
			</div>
		)
	}
}

export default Auth