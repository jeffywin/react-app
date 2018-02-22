import React from 'react'
import {List, InputItem} from 'antd-mobile'
import io from 'socket.io-client'
const socket = io('ws://localhost:9010')
class Chat extends React.Component {
	constructor(props){
		super(props)
		this.state={
			text: '',
			msg: []
		}
	}
	componentDidMount(){
		socket.on('receMsg', (data)=>{
			this.setState({
				msg:[...this.state.msg, data.text]//将text合并到msg中
			})
		})
	}
	handleChange(key,val) {
		this.setState({
			[key]:val
		})
	}
	handleSubmit(){
		socket.emit('sendMsg',{text: this.state.text})
		this.setState({text: ''})
	}
	render(){
		return(
			<div>
				{this.state.msg.map(v=>{
					return <p key={v}>{v}</p>
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