import React from 'react'
import io from 'socket.io-client'

class Chat extends React.Component {
	componentDidMount(){
		const socket = io('ws://localhost:9010')
	}
	render(){
		return(
			<div>chat页面</div>
		)
	}
}

export default Chat