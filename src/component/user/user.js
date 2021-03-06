import React from 'react'
import {connect} from 'react-redux'
import { Result, List, WhiteSpace,Button, Modal } from 'antd-mobile';
import browserCookies from 'browser-cookies'
import {Redirect} from 'react-router-dom'
import {logoutSubmit} from '../../redux/user.redux'

@connect(
	state => state.user,
	{logoutSubmit}
)

class User extends React.Component {
	constructor(props){
		super(props)
		this.logout = this.logout.bind(this)
	}
	logout() {
		Modal.alert('删除','确定删除吗？',[
				{text: '取消', onPress: () => {}},
				{text: '确定', onPress: () => {
					browserCookies.erase('userid')
					this.props.logoutSubmit()
				}}
			])
	}
	render() {
		const props = this.props
		const Item = List.Item
		const Brief = Item.Brief
		return (
			props.user ? 
			<div>
				<Result
					img={<img src={require(`../images/${props.avatar}.png`)} style={{width:50}} alt=''/>}
			    title={props.user}
			    message={props.type === 'boss' ? props.company : null}
				/>
				<List renderHeader={()=>'简介'}>
					<Item>
						{props.title}
						{props.desc.split('\n').map(v=><Brief key={v}>{v}</Brief>)}
						{props.money ?<Brief>薪资:{props.money}</Brief> : null}
					</Item>
				</List>
				<WhiteSpace></WhiteSpace>
				<List>
					<Item>
						<Button 
							onClick={this.logout}
							type="primary"
							>退出登录
						</Button>
					</Item>	
				</List>				
			</div>: <Redirect to={props.redirectPath}></Redirect> 
		)
	}
}

export default User