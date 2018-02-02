import React from 'react'
import {connect} from 'react-redux'

@connect(
	state=>state.user
)

class User extends React.Component {
	render() {
		return <div>个人中心</div>
	}
}

export default User