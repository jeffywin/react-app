import React from 'react'
import {Button} from 'antd-mobile'
import {connect} from 'react-redux'

@connect ( 
	state => state
)
class Msg extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		const chatGroup = []
		this.props.chat.chatmsg.forEach((v)=>{
			chatGroup[v.chatid] = chatGroup[v.chatid] || []
		})
		return (
			<div>
				消息列表
			</div>
		)
	}
}

export default Msg