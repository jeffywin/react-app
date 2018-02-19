import React from 'react'
import io from 'socket.io-client'

class Chat extends React.Component {
	componentDidMount(){
		const socket = io('ws://localhost:9010')
	}
	render(){
		return(
			<div>chat页面{this.props.match.params.user}</div>
		)
	}
}

export default Chat