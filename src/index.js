import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux'
import { read } from './index.redux'

const store = createStore(read)

function render() {
	ReactDOM.render(<App store={store}/>, document.getElementById('root'))
}
render()
store.subscribe(render)

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

