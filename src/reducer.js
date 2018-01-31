// 用来合并两个state

import { combineReducers } from 'redux'
import { user } from './redux/user.redux'
import { chatuser } from './redux/chatUser.redux'
export default combineReducers({user, chatuser})


// import { read } from './index.redux'
// import { auth } from './Auth.redux'

// export default combineReducers({read, auth})