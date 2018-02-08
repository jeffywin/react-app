import React from 'react'
import {List, InputItem, Button, NavBar, TextareaItem} from 'antd-mobile'
import AvaSelector from '../avaSelector/avaSelector'
import {connect} from 'react-redux'
import {updata} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

@connect(
	state=>state.user,
	{updata}
)
class GeniusInfo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: '',
			desc: ''
		}
	}
	selecAvatar = (imgName) => {
		this.setState({
			avatar: imgName
		})
	}
	save = () => {
		this.props.updata(this.state) //传给redux
	}
	handleChange(key, val){
		this.setState({
			[key]:val
		})
	}
	render() {
		const redirect = this.props.redirectPath
		const pathName = this.props.location.pathname
		return(
			<div>
				{redirect && redirect!==pathName ?<Redirect to={this.props.redirectPath}></Redirect> : null}
				<List>
				<NavBar>GENIUSINFO</NavBar>
				<AvaSelector selecAva={this.selecAvatar}></AvaSelector>
					<InputItem
					onChange={v => this.handleChange('title', v)}	
					>
					求职职位</InputItem>
					<TextareaItem
					title='个人简介'
					autoHeight
					rows={3}
					onChange={v => this.handleChange('desc', v)}	
					>
					</TextareaItem>
				</List>
				<Button 
				type='primary'
				onClick={this.save}
				>保存</Button>
			</div>
		)
	}
}

export default GeniusInfo