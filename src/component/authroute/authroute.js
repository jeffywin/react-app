import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { userInfo } from '../../redux/user.redux'
import { connect } from 'react-redux'

@withRouter // 来获取this.props的信息
@connect(
	null,
	{userInfo}
)
class AuthRoute extends React.Component {
	componentDidMount() {
		const publicList = ['/login','/register']
		const pathname = this.props.location.pathname
		if(publicList.indexOf(pathname) > -1) {
			return null
		}
		// 获取用户信息
		axios.get('/user/info').then(res => {
			if (res.status === 200) {
				if (res.data.code === 0) {// 有登录信息cookie
					console.log(1)
					this.props.userInfo(res.data.data)
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