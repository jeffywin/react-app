import React from 'react'
import {List,InputItem,Button,NavBar,TextareaItem} from 'antd-mobile'
import AvaSelector from '../avaSelector/avaSelector'

class BossInfo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: '',
			// company: '',
			// money: '',
			// desc: '',
			// avatar: ''
		}
	}
	selecAvatar = (imgName) => {
		this.setState({
			avatar: imgName
		})
	}
	handleChange(key, val){
		this.setState({
			[key]:val
		})
	}
	render() {
		return(
			<div>
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
				<Button type='primary'>保存</Button>
			</div>
		)
	}
}

export default BossInfo