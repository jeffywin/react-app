import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import {connect} from 'react-redux'
import NavLinkBar from '../navlinkbar/navlinkbar'
import {Switch, Route} from 'react-router-dom'

function Boss() {
	return <h2>Boss首页</h2>
}
function Genius() {
	return <h2>牛人</h2>
}
function User() {
	return <h2>个人中心</h2>
}
function Msg() {
	return <h2>消息</h2>
}
@connect(
	state=>state
)
class Dashboard extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const {pathname} = this.props.location
		const user = this.props.user
		const NavList = [
			{
				path: '/boss',
				text: '牛人',
				title: '牛人列表',
				icon: 'boss',
				component: Boss,
				hide: user.type == 'genius'
			},
			{
				path: '/genius',
				text: '求职者',
				title: '求职列表',
				icon: 'job',
				component: Genius,
				hide: user.type == 'boss'
			},
			{
				path: '/msg',
				text: '消息',
				title: '消息列表',
				icon: 'msg',
				component: Msg
			},
			{
				path: '/me',
				text: '个人中心',
				title: '个人中心',
				icon: 'user',
				component: User
			}
		]
		return(
			<div>
				<NavBar className="fixHeader">{NavList.find(v=>pathname === v.path).title}</NavBar>
				<div style={{marginTop:45}}>
					<Switch>
						{NavList.map(v=>(
							<Route key={v.path} path={v.path} component={v.component}></Route>
						))}
					</Switch>
				</div>
				<NavLinkBar data={NavList}></NavLinkBar>
			</div>
		)
	}
}

export default Dashboard
