import React from 'react'
import {Button} from 'antd-mobile'

class Msg extends React.Component {
	constructor(props){
		super(props)
		this.logout = this.logout.bind(this)
	}
	logout() {
		console.log(11)
	}
	render() {
		return (
			<div>
				<Button onClick={this.logout}>点击</Button>
			</div>
		)
	}
}

export default Msg