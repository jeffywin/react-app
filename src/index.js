import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import chunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Auth from './Auth.js'
import Dashboard from './Dashboard'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import {createStore, applyMiddleware, compose } from 'redux'
// import { read, addNum, removeNum, addNumAsync } from './index.redux'
// import { read } from './index.redux'
// import { auth } from './Auth.redux'
import reducers from './reducer'

const devtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{}// 控制台调试redux用
const store = createStore(reducers, compose(
			applyMiddleware(chunk),
			devtools
		)
	)
		
	// function About() {
	// 	return <h1>About</h1>
	// }

	// function Topics() {
	// 	return <h1>Topics</h1>
	// }
	
	ReactDOM.render(
			<Provider store={store}>
				<Router>
					<div>
					<Switch>
						<Route path='/login' exact component={Auth}></Route>
						<Route path='/dashboard' component={Dashboard}></Route>
						<Redirect to='/dashboard'></Redirect> 
					{/*如果都没有选对login或者dash，直接跳转到dashboard*/}
					</Switch>

					{/*	<ul>
						<li> 
							{/*Link跳转专用}
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/about'>About</Link>
						</li>
						<li>
							<Link to='/topics'>Topics</Link>
						</li>
					</ul>
				{Switch 只渲染命中的第一个Route，Route对应渲染的组件，exact只渲染一个组件}
					<Switch> 
						<Route path='/' exact component={App}></Route>
						<Route path='/about' component={About}></Route>
						<Route path='/topics' component={Topics}></Route>
						{/*<Route path=':location' component={Test}></Route>/}
					</Switch>*/}
					</div>					
				</Router>
			</Provider>,
			document.getElementById('root')
		)

// function render() {
// 	ReactDOM.render(<App store={store} addNum={addNum} addNumAsync={addNumAsync} removeNum = {removeNum}/>, document.getElementById('root'))
// }
// render()
// store.subscribe(render)




// import './index.css';
// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();

// 通过ruducer 创建store
// function read(state, action) {
// 	switch(action.type) {
// 		case 'vue': 
// 			return state + 1
// 		case 'react': 
// 			return state - 1
// 		default: 
// 			return 10
// 	}
// }

// const store = createStore(read)

// function listen() {
// 	const current = store.getState()
// 	console.log(`我正在学${current}`)
// }
// 通过subscribe 监听store变化
// store.subscribe(listen)

// 通过dispatch 派发事件
// store.dispatch({type: 'vue'})
// //console.log(store.getState())
// store.dispatch({type: 'react'})
// //console.log(store.getState())

