import React from 'react'
import {List,InputItem,Button,NavBar} from 'antd-mobile'
import AvaSelector from '../avaSelector/avaSelector'

class BossInfo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			title: '',
			company: '',
			money: '',
			desc: ''
		}
	}
	handleChange(key,val){
		this.setState({
			[key]:val
		})
	}
	render() {
		return(
			<div>
				<List>
				<NavBar>BOSSINFO</NavBar>
				<AvaSelector></AvaSelector>
					<InputItem
					onChange={(v) => this.handleChange('title': v)}	
					>
					招聘职位</InputItem>
					<InputItem
					onChange={(v) => this.handleChange('company': v)}	
					>
					公司名称</InputItem>
					<InputItem
					onChange={(v) => this.handleChange('money': v)}	
					>
					招聘薪资</InputItem>
					<InputItem
					onChange={(v) => this.handleChange('desc': v)}	
					>
					职位描述</InputItem>
				</List>
			</div>
		)
	}
}

export default BossInfo