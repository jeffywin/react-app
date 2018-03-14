import React from 'react'
import { NavBar } from 'antd-mobile';
import {connect} from 'react-redux'
import NavLinkBar from '../navlinkbar/navlinkbar'
import {Switch, Route} from 'react-router-dom'
import Boss from '../../component/boss/boss'
import Genius from '../../component/genius/genius'
import User from '../../component/user/user'
import Msg from '../../component/msg/msg'
import {getMsgList, recvMsg} from '../../redux/chat.redux.js'

@connect(
	state=>state,
	{getMsgList, recvMsg}
)
class Dashboard extends React.Component {
	// constructor(props) {
	// 	super(props)
	// }
	componentDidMount() {
		if(!this.props.chat.chatmsg.length) {//没有数据再去获取
			this.props.getMsgList()
			this.props.recvMsg()
		}
	}
	render() {
		const {pathname} = this.props.location
		const user = this.props.user
		const NavList = [
			{
				path: '/boss',
				text: '公司',
				title: '求职者列表',
				icon: 'boss',
				component: Boss,
				hide: user.type === 'boss'
			},
			{
				path: '/genius',
				text: '求职者',
				title: 'BOSS列表',
				icon: 'job',
				component: Genius,
				hide: user.type === 'genius'
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
