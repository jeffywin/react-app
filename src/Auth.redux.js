// 登录相关redux页面
import axios from 'axios'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const GET_USERDATA = 'GET_USERDATA'

// reducer
export function auth( state={ isAuth:false, user:'jeffywin'}, action) {
	switch(action.type) {
		case LOGIN:
			return {...state, isAuth:true}
		case LOGOUT:
			return {...state, isAuth:false}
		case GET_USERDATA:
			return {...state, ...action.playload}
		default:
			return state
	}
}
export function getUserData() {
	return dispatch => {
		axios.get('/data').then((res) => {
		if (res.status === 200) {
				dispatch(getData(res.data))
			}
		})
	}
}

export function getData(data) {
	return {type: GET_USERDATA, playload: data}
}

// action creater
export function login() {
	return {type: LOGIN}
}

export function logout() {
	return {type: LOGOUT}
}