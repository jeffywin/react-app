import React from 'react'
import { login } from './Auth.redux'
import { connect } from 'react-redux'

@connect(
	state => state.auth,
	{ login }
)

class Auth extends React.Component {
	render() {
		return (
			<div>
				<h2>请登录,您没有权限</h2>
				<button onClick={this.props.login}>登录</button>
			</div>
		)
	}
}

export default Auth