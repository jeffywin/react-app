import React from 'react'
import {List,InputItem,Button,NavBar,TextareaItem} from 'antd-mobile'
import AvaSelector from '../avaSelector/avaSelector'
import {connect} from 'react-redux'
import {updata} from '../../redux/user.redux'
import {Redirect} from 'react-router-dom'

@connect(
	state=>state.user,
	{updata}
)
class BossInfo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: ''
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
		return(
			<div>
				{this.props.redirectPath ?<Redirect to={this.props.redirectPath}></Redirect> : null}
				<List>
				<NavBar>BOSSINFO</NavBar>
				<AvaSelector selecAva={this.selecAvatar}></AvaSelector>
					<InputItem
					onChange={v => this.handleChange('title', v)}	
					>
					招聘职位</InputItem>
					<InputItem
					onChange={v => this.handleChange('company', v)}	
					>
					公司名称</InputItem>
					<InputItem
					onChange={v => this.handleChange('money', v)}	
					>
					招聘薪资</InputItem>
					<TextareaItem
					title='职位描述'
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

export default BossInfo