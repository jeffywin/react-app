import React from 'react'
import {connect} from 'react-redux'

@connect(
	state=>state.user
)

class User extends React.Component {
	render() {
		return <div>个人</div>
	}
}

export default User