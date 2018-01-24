import React from 'react'
import Logo from '../../component/logo/logo.js'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

@connect(
	state => state.user,
	{ register }
)

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: 'boss',
			user: '',
			pwd: '',
			rpwd: ''
		}
	}

	handleChange = (key,val) => {
		this.setState({
			[key]:val
		})
	}
	handleReigister = () => { // 注册
		this.props.register(this.state)
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
							onChange={ v=>this.handleChange('user',v)}
						>用户名</InputItem>
						<WhiteSpace />
						<InputItem
							type="password"
							onChange={ v=>this.handleChange('pwd',v)}
						>密码</InputItem>
						<WhiteSpace />
						<InputItem
							type="password"
							onChange={ v=>this.handleChange('rpwd',v)}
						>确定密码</InputItem>
						<WhiteSpace />
						<RadioItem 
						checked={this.state.type === 'boss'}
						onChange={ ()=>this.handleChange('type', 'boss')}
						>Boss</RadioItem>
						<WhiteSpace />
						<RadioItem 
						checked={this.state.type === 'genius'}
						onChange={ ()=>this.handleChange('type', 'genius')}
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