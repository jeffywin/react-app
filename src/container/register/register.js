import React from 'react'
import Logo from '../../component/logo/logo.js'
import { List, InputItem, WingBlank, WhiteSpace, Button, Radio} from 'antd-mobile'

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: 'boss'
		}
	}
	onChange = (value) => {
		console.log(value)
		// this.setState({
		// 	value
		// })
	}
	onChange1 = (value) => {
		console.log(value)
		// this.setState({
		// 	value
		// })
	}
	render() {
		const RadioItem = Radio.RadioItem
		return(
			<div>
				<Logo></Logo>
				<WingBlank>
					<List>
						<InputItem>用户名</InputItem>
						<WhiteSpace />
						<InputItem>密码</InputItem>
						<WhiteSpace />
						<InputItem>确定密码</InputItem>
						<WhiteSpace />
						<RadioItem checked={this.state.type === 'boss'} onChange={this.onChange('boss')}>Boss</RadioItem>
						<WhiteSpace />
						<RadioItem checked={this.state.type === 'genius'} onChange={this.onChange1('genius')}>牛人</RadioItem>
						<WhiteSpace />
						<Button type="primary">注册</Button>
				</List>
				</WingBlank>
			</div>
		)
	}
}

export default Register