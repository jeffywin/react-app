const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')

Router.get('/list', function(req, res) {
	User.find({}, function(err, doc) {
		return res.json(doc)
	})
})

Router.get('/info', function(req, res) {
	return res.json({code:1})
})

Router.post('/register', function(req, res) {
	const {user, pwd, type} = req.body
	User.findOne({user}, function(err, doc) {
		if (doc) {
			return res.json({code: 1, msg: '用户名重复'})
		}
		User.create({user, pwd, type}, function(err, doc) {
			if (err) {
				return res.json({code: 1, msg: '服务器出错了'})
			}
			return res.json({code:0})
		})
	})
})
module.exports = Router