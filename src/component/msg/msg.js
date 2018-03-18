import React from 'react'
import {Button, List} from 'antd-mobile'
import {connect} from 'react-redux'

@connect ( 
	state => state
)
class Msg extends React.Component {
	constructor(props){
		super(props);
	}
	getLast(arr) {
		return arr[arr.length - 1]
	}
	render() {
		const Item = List.Item
		const Brief = Item.Brief
		const chatGroup = []
		if(this.props.chat.chatmsg.length != 0) {
			this.props.chat.chatmsg.forEach((v)=>{
				chatGroup[v.chatid] = chatGroup[v.chatid] || []
				chatGroup[v.chatid].push(v)
			})
		}
		const chatList = Object.values(chatGroup)
		return (
			<div>
				<List>
					{chatList.map(v => {
						const lastItem = this.getLast(v)
						return (
							<Item
							key = {lastItem._id}
							>
								{lastItem.content}
								<Brief>用户名</Brief>
							</Item>
						)
					})}
				</List>
			</div>
		)
	}
}

export default Msg