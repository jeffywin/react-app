import React from 'react'
import { Card, WingBlank, WhiteSpace } from 'antd-mobile'
import propTypes from 'prop-types'
import {withRouter} from 'react-router-dom'

@withRouter
class UserCard extends React.Component {
	static propTypes = {
		userlist:propTypes.array.isRequired
	}
	handleClick(v){
		this.props.history.push(`chat/${v._id}`)
	}
	render() {
		const Header = Card.Header
		const Body = Card.Body
		return(
			<WingBlank>
			<WhiteSpace></WhiteSpace>
			{this.props.userlist.map(v=>(
				v.avatar ? (<Card 
					key={v._id}
					onClick={()=>this.handleClick(v)}
					>
					<Header
						title={v.user}
						thumb={require(`../images/${v.avatar}.png`)}
						extra={<span>{v.title}</span>}
					></Header>
					<Body>
					{v.type==='boss'?<div>公司:{v.company}</div>:null}
					{v.desc.split('\n').map(d=>(//空格 '\n'
						<div key={d}>{d}</div>
					))}
					{v.type==='boss'?<div>薪资:{v.money}</div>:null}
					</Body>
				</Card>): null
			))}
			</WingBlank>
		)
	}
}

export default UserCard