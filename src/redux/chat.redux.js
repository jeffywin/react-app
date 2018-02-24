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
			return {...state, chatmsg: action.payload}
		case MSG_RECV:
		case MSG_READ:
		default: 
			return state
	}
}

function msgList(msgs) {
	return {type: MSG_LIST, playload: msgs}
}

export function getMsgList() {
	return dispatch => {
		axios.get('user/getmsglist').then(res => {
			if(res.status === 200 && res.data.code === 0) {
				dispatch(msgList(res.data.data))
			}
		})
	}
}

