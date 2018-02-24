// 用来合并两个state

import { combineReducers } from 'redux'
import { user } from './redux/user.redux'
import { chatuser } from './redux/chatUser.redux'
import { chat } from './redux/chat.redux'
export default combineReducers({user, chatuser, chat})


// import { read } from './index.redux'
// import { auth } from './Auth.redux'

// export default combineReducers({read, auth})