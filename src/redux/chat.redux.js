import axios from 'axios'
import io from 'socket.io-client'
const socket = io('ws://localhost:9010')

// 获取聊天信息列表
const MSG_LIST = 'MSG_LIST'
// 读取信息
const MSG_RECV = 'MSG_RECV'
// 标识已读
const MSG_READ = 'MSG_READ'

const initState = {
	chatmsg: [],
	unread: 0
}

export function chat(state=initState, action) {
	switch(action.type) {
		case MSG_LIST:
			return {...state, chatmsg: action.payload, unread: action.payload.filter(v=>!v.read).length}
		case MSG_RECV:
			return {...state, chatmsg: [...state.chatmsg, action.payload], unread: state.unread +1}
		case MSG_READ:
		default: 
			return state
	}
}
function msgRecv(data) {
	return {type: MSG_RECV, payload: data}
}

function msgList(data) {
	return {type: MSG_LIST, payload: data}
}

export function recvMsg() { //redux 接收信息，然后socket接收广播消息
	return dispatch => {
		socket.on('recvMsg', function(data){
			dispatch(msgRecv(data))
		})
	}
}

export function sendMsg({from, to, msg}) {
	return dispatch => {
		socket.emit('sendMsg',{from, to, msg}) //socket 广播全局
	}
}

export function getMsgList() {
	return dispatch => {
		axios.get('/user/getmsglist').then(res => {
			if(res.status === 200 && res.data.code === 0) {
				dispatch(msgList(res.data.data))
			}
		})
	}
}

