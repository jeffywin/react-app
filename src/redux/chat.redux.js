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
			return {...state, chatmsg: action.payload.msgs,users:action.payload.users, unread: action.payload.msgs.filter(v=>!v.read && v.to === action.payload.userid).length}
		case MSG_RECV:
			const n = action.payload.to === action.userid ? 1 : 0
			return {...state, chatmsg: [...state.chatmsg, action.payload], unread: state.unread +n}
		case MSG_READ:
		default: 
			return state
	}
}
function msgRecv(data, userid) {
	return {userid, type: MSG_RECV, payload: data}
}

function msgList(msgs, users, userid) {
	return {type: MSG_LIST, payload: {msgs, users, userid}}
}

export function recvMsg() { //redux 接收信息，然后socket接收广播消息
	return (dispatch, getState) => {
		const userid = getState().user._id
		socket.on('recvMsg', function(data){
			dispatch(msgRecv(data, userid))
		})
	}
}

export function sendMsg({from, to, msg}) {
	return dispatch => {
		socket.emit('sendMsg',{from, to, msg}) //socket 广播全局
	}
}

export function getMsgList() {
	return (dispatch, getState) => {
		axios.get('/user/getmsglist').then(res => {
			const userid = getState().user._id
			if(res.status === 200 && res.data.code === 0) {
				dispatch(msgList(res.data.data,res.data.users, userid))
			}
		})
	}
}

