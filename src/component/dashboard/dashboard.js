import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import {connect} from 'react-redux'
import NavLinkBar from '../navlinkbar/navlinkbar'

function Boss() {
	return <h2>boss</h2>
}
function Genius() {
	return <h2>Genius</h2>
}
function Me() {
	return <h2>Me</h2>
}
function Msg() {
	return <h2>Msg</h2>
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
				component: 'Boss',
				hide: user.type == 'genius'
			},
			{
				path: '/genius',
				text: '求职者',
				title: '求职列表',
				icon: 'job',
				component: 'Genius',
				hide: user.type == 'boss'
			},
			{
				path: '/msg',
				text: '消息',
				title: '消息列表',
				icon: 'msg',
				component: 'Msg'
			},
			{
				path: '/me',
				text: '个人中心',
				title: '个人中心',
				icon: 'user',
				component: 'Me'
			}
		]

		return(
			<div>
				<NavBar>{NavList.find(v=>(pathname === v.path)).title}</NavBar>
				<h2>content</h2>
				<NavLinkBar data={NavList}></NavLinkBar>
			</div>
		)
	}
}

export default Dashboard
