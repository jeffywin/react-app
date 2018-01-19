import React from 'react'
import logoImg from './job.png'
import './logo.css'

class Logo extends React.Component {
	render() {
		return(
			<div className="logoDiv">
				<img src={ logoImg }/>
			</div>
		)
	}
}

export default Logo