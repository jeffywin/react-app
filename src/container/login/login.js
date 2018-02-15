import React from 'react'
import Logo from '../../component/logo/logo.js'
import { List, InputItem, WingBlank, WhiteSpace, Button} from 'antd-mobile'
import {login} from '../../redux/user.redux'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import highOrder from '../../component/highOrder/highOrder.js'

//高阶组件理解 传入一个函数，返回另一个函数
// 1. 属性代理 2.反向继承

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

// function WrapperH(Comp) {
// 	class WrapperHello extends React.Component{
// 		render(){
// 			return(
// 				<div>
// 					<p>高阶组件HOC特有</p>
// 					<Comp {...this.props}></Comp>
// 				</div>
// 			)
// 		}
// 	}
// 	return WrapperHello
// }	

// function WrapperHello(Comp) {
// 	class WrapComp extends Comp{
// 		componentDidMount(){
// 			console.log('高阶组件新增继承Comp')
// 		}
// 		render() { 
// 			return <Comp></Comp>
// 		}
// 	}
// }

// @WrapperHello
// class Hello extends React.Component {
// 	render(){
// 		return(
// 			<h2>test React</h2>
// 		)
// 	}
// }

//Hello = WrapperH(Hello)

@connect(
	state => state.user,
	{login}
)
@highOrder
class Login extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	user: '',
		// 	pwd: ''
		// }
	}
	register = () => {
		this.props.history.push('./register')
	}
	// handleChange = (key, val) => {
	// 	this.setState({
	// 		[key]:val
	// 	})
	// }
	login = () => { // 登录
		this.props.login(this.props.state)
	}
	render() {
		return(
			<div>
			{this.props.redirectPath ? <Redirect to={this.props.redirectPath}/> : null}
				<Logo></Logo>
				<WingBlank>
					<List>
						<InputItem
							onChange={ v=>this.props.handleChange('user',v)}
						>用户名</InputItem>
						<InputItem
							onChange={ v=>this.props.handleChange('pwd',v)}
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