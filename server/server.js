const express = require('express')
const userRouter = require('./user')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const model = require('./model')
const Chat = model.getModel('chat')
//const mongoose = require('mongoose')
// 新建app
const app = express()
const server = require('http').Server(app)
//express 和 socket连起来
const io = require('socket.io')(server)
app.use(cookieParser())
app.use(bodyParser.json())
//io 是全局的请求，socket是当前这次连接的请求
io.on('connection', function(socket){
	//console.log('login success')
	socket.on('sendMsg', function(data){
		const {from, to, msg} = data
		const chatid = [from,to].sort().join('_')
		Chat.create({chatid, from, to, content:msg}, function(err, doc) {
			io.emit('recvMsg', Object.assign({},doc._doc))
		})
		//io.emit('receMsg', data)//广播到全局
	})
})
// 开启中间件
app.use('/user', userRouter)
// 监听端口
server.listen(9010, function() {
	console.log('welome to express home')
})

// 链接mongoDb，并且使用react-app这个
// const DB_URL = 'mongodb://127.0.0.1:27017/react-app'
// mongoose.connect(DB_URL)
// mongoose.connection.on('connected', function() {
// 	console.log('mongo connect success')
// })

//类似mySql中的表，mongoDB中是文档，字段的概念
// const User = mongoose.model('user', new mongoose.Schema({
//  	user:{type: String, require: true},
//  	age:{type: Number,require: true}
// }))
// 新增数据
// User.create({
// 	user: 'lilei',
// 	age: 15
// }, function(err, doc) {
// 	if(!err) {
// 		console.log(doc)
// 	} else {
// 		console.log(err)
// 	}
// })
//删除数据
// User.remove({age: 18}, function(err, doc) {
// 	console.log(doc)
// })
//修改 更新操作
// User.update({user: 'jeffywin'}, {$set: {age: 28}}, function(err, doc) {
// 	console.log(doc)
// })

// 监听默认端口
// app.get('/', function(req, res) { // findOne 只查一条
// 	User.find({user: 'jeffywin'}, function(err, doc) {
// 		res.send(doc)
// 	})
// 	//res.send('<h1>welcome to expresss</h1>')
// })

// app.get('/data', function(req, res) {
// 	res.json({name: 'jeffywin', age: '19'})
// })