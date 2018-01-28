import React from 'react'
import {Grid, List} from 'antd-mobile'
import PropsTypes from 'prop-types'

class AvaSelector extends React.Component {
	static propsTypes = {//类型检测，要求selecAva必须是函数
		selecAva: PropsTypes.func.isRequired
	}

	constructor(props) {
		super(props);
		this.state={}
	}
	render() {
		const avaLists = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'
		.split(',')
		.map(v=>({
			icon: require(`../../component/images/${v}.png`),
			text: v
		}))
		const gridheader = this.state.icon 
											? (<div>
												<span>已选头像</span>
												<img src={this.state.icon} style={{width:20}} alt=""/>
											</div>) 
											: '请选择头像'
		return(
			<div>
				<List renderHeader={()=>gridheader}>
					<Grid data={avaLists}
					columnNum={5}
					onClick={v=> {
						this.setState(v)
						this.props.selecAva(v.text)//接收父组件的函数，并返回所需参数给父组件
					}}
					/>
				</List>
			</div>
		)
	}
}

export default AvaSelector