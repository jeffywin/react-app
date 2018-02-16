import React from 'react'
import Logo from '../../component/logo/logo.js'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'
import highOrder from '../../component/highOrder/highOrder.js'

@connect(
	state => state.user,
	{ register }
)
@highOrder

class Register extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	type: 'boss',
		// 	user: '',
		// 	pwd: '',
		// 	rpwd: ''
		// }
	}
	componentDidMount(){
		this.props.handleChange('type','genius')
	}
	// handleChange = (key,val) => {
	// 	this.setState({
	// 		[key]:val
	// 	})
	// }
	handleReigister = () => { // 注册
		this.props.register(this.props.state)
	}
	render() {
		const RadioItem = Radio.RadioItem
		return(
			<div>
				{this.props.redirectPath ? <Redirect to={this.props.redirectPath}/> : null}
				<Logo></Logo>
				<WingBlank>
					<List>
						<InputItem
							onChange={ v=>this.props.handleChange('user',v)}
						>用户名</InputItem>
						<WhiteSpace />
						<InputItem
							type="password"
							onChange={ v=>this.props.handleChange('pwd',v)}
						>密码</InputItem>
						<WhiteSpace />
						<InputItem
							type="password"
							onChange={ v=>this.props.handleChange('rpwd',v)}
						>确定密码</InputItem>
						<WhiteSpace />
						<RadioItem 
						checked={this.props.state.type === 'boss'}
						onChange={ ()=>this.props.handleChange('type', 'boss')}
						>Boss</RadioItem>
						<WhiteSpace />
						<RadioItem 
						checked={this.props.state.type === 'genius'}
						onChange={ ()=>this.props.handleChange('type', 'genius')}
						>牛人</RadioItem>
						<WhiteSpace />
						<Button type="primary"
						onClick={this.handleReigister}
						>注册</Button>
				</List>
				</WingBlank>
			</div>
		)
	}
}

export default Register