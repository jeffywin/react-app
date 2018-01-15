// 用来合并两个state

import { combineReducers } from 'redux'
import { read } from './index.redux'
import { auth } from './Auth.redux'

export default combineReducers({read, auth})