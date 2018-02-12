import React from 'react'
import Logo from '../../component/logo/logo.js'
import { List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import {login} from '../../redux/user.redux'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

//高阶组件理解 传入一个函数，返回另一个函数

// function read() {
// 	console.log('I love React')
// }

// function WrapperRead(fn) {
// 	return function() {
// 		console.log('before read')
// 		fn()
// 		console.log('after read')
// 	}
// }

// read = WrapperRead(read) //新的fn read
// read()

@connect(
	state => state.user,
	{login}
)

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			pwd: ''
		}
	}
	register = () => {
		this.props.history.push('./register')
	}
	handleChange = (key, val) => {
		this.setState({
			[key]:val
		})
	}
	login = () => { // 登录
		this.props.login(this.state)
	}
	render() {
		return(
			<div>
			{this.props.redirectPath ? <Redirect to={this.props.redirectPath}/> : null}
				<Logo></Logo>
				<WingBlank>
					<List>
						<InputItem
							onChange={ v=>this.handleChange('user',v)}
						>用户名</InputItem>
						<InputItem
							onChange={ v=>this.handleChange('pwd',v)}
						>密码</InputItem>
					</List>
					<WhiteSpace />
					<Button type="primary"
					onClick={this.login}
					>登录</Button>
					<WhiteSpace />
					<Button type="primary" onClick={this.register}>注册</Button>
				</WingBlank>
			</div>
		)		
	}
}

export default Login