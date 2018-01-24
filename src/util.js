

export function getRediPath({type, avatar}) {
	let url = (type === 'boss') ? '/boss' : '/genius'
	if(!avatar) { //假如头像不存在，去头像设置界面
		url += 'info' 
	}
	return url
}