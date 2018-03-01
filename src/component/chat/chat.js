import React from 'react'
import {List, InputItem, NavBar} from 'antd-mobile'
import {connect} from 'react-redux'
import {getMsgList, sendMsg, recvMsg} from '../../redux/chat.redux.js'
// import io from 'socket.io-client'
// const socket = io('ws://localhost:9010')

@connect(
	state => state,
	{getMsgList, sendMsg, recvMsg}
)
class Chat extends React.Component {
	constructor(props){
		super(props)
		this.state={
			text: '',
			msg: []
		}
	}
	componentDidMount() {
		this.props.getMsgList()
		//this.props.recvMsg()
		// socket.on('receMsg', (data)=>{
		// 	this.setState({
		// 		msg:[...this.state.msg, data.text]//将text合并到msg中
		// 	})
		// })
	}
	handleChange(key,val) {
		this.setState({
			[key]:val
		})
	}
	handleSubmit(){
		// socket.emit('sendMsg',{text: this.state.text})
		// this.setState({text: ''})
		const from = this.props.user._id
		const to = this.props.match.params.user
		const msg = this.state.text
		this.props.sendMsg({from, to, msg})
		this.setState({text: ''})
	}
	render(){
		const user = this.props.match.params.user
		const Item = List.Item
		return(
			<div id='chat-page'>
				<NavBar>{user}</NavBar>
				{this.props.chat.chatmsg.map(v=>{
					return v.from === user ? (
						<List key={v._id}>
							<Item>
								{v.content}	
							</Item>
						</List>
						) : (
							<List key={v._id}>
								<Item className='chat-me'>
									{v.content}		
								</Item>
							</List>
						)
				})}
				<div className="stick-footer">
				<List>
					<InputItem
					placeholder="请输入信息"
					value={this.state.text}
					onChange={v=>this.handleChange('text',v)}
					extra={<span onClick={()=>this.handleSubmit()}>发送</span>}
					></InputItem>
				</List>
			</div>
			</div>
		)
	}
}

export default Chat