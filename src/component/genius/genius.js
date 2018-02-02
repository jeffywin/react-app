import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import {getUserList} from '../../redux/chatUser.redux'
import UserCard from '../userCard/userCard'

@connect(
	state=>state.chatuser,
	{ getUserList }
)
class Genius extends React.Component {
	componentDidMount() {
		this.props.getUserList('boss')
	}
	render() {
		return(
			<UserCard userlist={this.props.userlist}></UserCard>
		)
	}
}

export default Genius