const express = require('express')
const mongoose = require('mongoose')

// 链接mongoDb
const DB_URL = 'mongodb://127.0.0.1:27017'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
	console.log('mongo connect success')
})

// 新建app
const app = express()

// 监听端口
app.listen(9010, function() {
	console.log('welome to express home')
})
// 监听默认端口
app.get('/', function(req, res) {
	res.send('<h1>welcome to expresss</h1>')
})

app.get('/data', function(req, res) {
	res.json({name: 'jeffywin', age: '19'})
})