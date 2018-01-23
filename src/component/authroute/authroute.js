import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

@withRouter // 来获取this.props的信息
class AuthRoute extends React.Component {
	componentDidMount() {
		// 获取用户信息
		axios.get('/user/info').then(res => {
			if (res.status === 200) {
				if (res.data.code === 0) {// 有登录信息cookie
				} else {
					this.props.history.push('/login')// 没有登录信息
				}
			}
		})
	}
	render() {
		return(
			null
		)
	}
}

export default AuthRoute