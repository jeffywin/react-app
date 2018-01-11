
const ADD_STATE = 'vue'
const REMOVE_STAATE = 'react'

// reducer
export function read(state, action) {
	switch(action.type) {
		case ADD_STATE: 
			return state + 1
		case REMOVE_STAATE: 
			return state - 1
		default: 
			return 10
	}
}

export function addNum() {
	return {type: ADD_STATE}
}

export function removeNum() {
	return {type: REMOVE_STAATE}
}

export function addNumAsync() {
	return dispatch => {
		setTimeout(() => {
			dispatch(addNum())
		},2000)
	}
}