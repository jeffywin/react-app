import React from 'react'
import axios from 'axios'

class AuthRoute extends React.Component {
	componentDidMount() {
		// 获取用户信息
		axios.get('./user/info')
	}
	render() {
		return(
			<div>11</div>
		)
	}
}

export default AuthRoute