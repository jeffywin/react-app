import React from 'react'
import propTypes from 'prop-types'
import { TabBar } from 'antd-mobile'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

@withRouter
@connect(
	state => state.chat
)
class NavLinkBar extends React.Component {
	static propTypes = {//类型检测
		data: propTypes.array.isRequired
	}
	render() {
		const { pathname } = this.props.location
		const NavList = this.props.data.filter(v => !v.hide)
		return(
				<TabBar>
				{NavList.map(v=>(
					<TabBar.Item
						badge={v.path === '/msg' ? this.props.unread: 0}
						title={v.title}
						key={v.text}
						icon={{uri: require(`./img/${v.icon}.png`)}}
						selectedIcon={{uri: require(`./img/${v.icon}-active.png`)}}
						selected={pathname === v.path}
						onPress = {() => {
							this.props.history.push(v.path)
						}}
					>
					</TabBar.Item>
				))}
			</TabBar>
		)
	}
}

export default NavLinkBar