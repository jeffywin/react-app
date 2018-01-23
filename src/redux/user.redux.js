import axios from 'axios'

const REGUST_SUCCESS = 'REGUST_SUCCESS'
const ERROR_LOG = 'ERROR_LOG'

const initState = {
	isAuth: false,
	user: '',
	pwd: '',
	type: '',
	msg: ''
}

//reducer
export function user(state=initState, action) {
	switch(action.type) {
		case REGUST_SUCCESS: 
			return {...state, isAuth: true, ...action.payload}
		case ERROR_LOG: 
			return {...state, isAuth: false, msg: action.msg }
		default: 
			return state
	}
}

function registSuccess(data) {
	return {type: REGUST_SUCCESS, plyload: data}
}

function errorLog(msg) {
	return {msg, type: ERROR_LOG}
}

export function register({user, pwd, rpwd, type}) {
	if (!user || !pwd || !type) {
		return errorLog('请输入用户名和密码')
	}
	if (pwd !== rpwd) {
		return errorLog('两次密码不一致')
	}

	return dispatch => {
		axios.post('/user/register',{user, pwd, type})
		.then(res => {
			if(res.status === 200 && res.data.code === 1) {
				dispatch(registSuccess(user, pwd, type))
			} else {
				dispatch(errorLog(res.data.msg))
			}
		})
	} 
}

