import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import {getUserList} from '../../redux/chatUser.redux'

@connect(
	state => state.chatuser,
	{getUserList}
)

class Boss extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		}
	}
	componentDidMount() {
		this.props.getUserList('genius')
		// axios.get('./user/list?type=genius').then(res=>{
		// 	if(res.data.code === 0) {
		// 		this.setState({data: res.data.data})
		// 	}
		// })
	}
	render() {
		const Header = Card.Header
		const Body = Card.Body  
		console.log(this.props)
		return(
			<WingBlank>
			<WhiteSpace></WhiteSpace>
			{this.props.userlist.map(v=>(
				v.avatar ? (<Card key={v._id}>
					<Header
						title={v.user}
						thumb={require(`../images/${v.avatar}.png`)}
						extra={<span>{v.title}</span>}
					></Header>
					<Body>
					{v.desc.split('\n').map(v=>(//空格 '\n'
						<div key={v}>{v}</div>
					))}
					</Body>
				</Card>): null
			))}
			</WingBlank>
		)
	}
}

export default Boss