import axios from 'axios'

const USER_LIST = 'USER_LIST'


const initState = {
	userList: []
}
export function chatuser(state=initState, action){
	switch(action.type) {
		case USER_LIST:
		return {...state, userList:action.palyload}
		default:
		return state
	}
}

function loadData(data) {
	return {type: USER_LIST, palyload: data}
}

export function userList(type){
	return dispatch => { 
		axios.get('/user/list?type='+type).then(res => {
			if(res.data.code === 0) {
				dispatch(loadData(res.data.data))
			} 
		})
	} 
}