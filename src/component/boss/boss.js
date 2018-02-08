import React from 'react'
//import axios from 'axios'
import {connect} from 'react-redux'
//import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import {getUserList} from '../../redux/chatUser.redux'
import UserCard from '../userCard/userCard'

@connect(
	state => state.chatuser,
	{ getUserList }
)

class Boss extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		data: []
	// 	}
	// }
	componentDidMount() {
		this.props.getUserList('genius')
		// axios.get('./user/list?type=genius').then(res=>{
		// 	if(res.data.code === 0) {
		// 		this.setState({data: res.data.data})
		// 	}
		// })
	}
	render() {
		return(
			<UserCard userlist={this.props.userlist}></UserCard>
		)
	}
}

export default Boss