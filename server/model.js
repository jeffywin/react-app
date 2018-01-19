const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017/react-app'
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function() {
	console.log('mongo connect success')
})