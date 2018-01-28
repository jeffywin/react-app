import axios from 'axios'
import {getRediPath} from '../util'

//const REGUST_SUCCESS = 'REGUST_SUCCESS'
const ERROR_LOG = 'ERROR_LOG'
const AUTH_SUCCESS = 'AUTH_SUCCESS' //验证成功
//const LOGIN_SUCCESS = 'LIGIN_SUCCESS'
const LOAD_DATA = 'LOAD_DATA'

const initState = {
	redirectPath: '',
	//isAuth: false,
	user: '',
	pwd: '',
	type: '',
	msg: ''
}

//reducer
export function user(state=initState, action) {
	switch(action.type) {
		// case REGUST_SUCCESS: 
		// 	return {...state, isAuth: true, redirectPath: getRediPath(action.payload), ...action.payload}
		case AUTH_SUCCESS: 
			return {...state, redirectPath: getRediPath(action.payload), ...action.payload}
		case ERROR_LOG: 
			return {...state, isAuth: false, msg: action.msg }
		// case LOGIN_SUCCESS: 
		// 	return {...state, isAuth: true, redirectPath: getRediPath(action.payload), ...action.payload}
		case LOAD_DATA:
			return {...state, ...action.payload}
		default: 
			return state
	}
}

// function registSuccess(data) {
// 	return {type: REGUST_SUCCESS, payload: data}
// }

// function loginSuccess(data) {
// 	return {type: LOGIN_SUCCESS, payload: data}
// }

function authSuccess(data) {
	return {type: AUTH_SUCCESS, payload: data}
}

function loadData(info) {
	return {type: LOAD_DATA, payload: info}
}

function errorLog(msg) {
	return {msg, type: ERROR_LOG}
}

export function userInfo() {
	return dispatch => { 
		axios.get('/user/info').then(res => {
			if(res.status === 200 && res.data.code === 0) {
				dispatch(loadData(res.data.data))
			} else {
				this.props.history.push('/login')
			}
		})
	} 
}

export function updata(data) {
	return dispatch => {// post 别忘记传data
		axios.post('/user/updata',data).then(res => {
			if(res.status === 200 && res.data.code === 0) {
				dispatch(authSuccess(res.data.data))
			} else {
				dispatch(errorLog(res.data.msg))
			}
		})
	}
}

export function login({user, pwd}) {
	if (!user || !pwd) {
		return errorLog('请输入用户名和密码')
	}
	return dispatch => { 
		axios.post('/user/login',{user, pwd}).then(res => {
			if(res.status === 200 && res.data.code === 0) {
				dispatch(authSuccess(res.data.data))//后端返回的data字段,通过loginSuccess存储redux，state中
			} else {
				dispatch(errorLog(res.data.msg))
			}
		})
	} 
}

export function register({user, pwd, rpwd, type}) {
	if (!user || !pwd || !type) {
		return errorLog('请输入用户名和密码')
	}
	if (pwd !== rpwd) {
		return errorLog('两次密码不一致')
	}

	return dispatch => { 
		axios.post('/user/register',{user, pwd, type}).then(res => {
			if(res.status === 200 && res.data.code === 0) {
				dispatch(authSuccess({user, pwd, type}))
			} else {
				dispatch(errorLog(res.data.msg))
			}
		})
	} 
}

