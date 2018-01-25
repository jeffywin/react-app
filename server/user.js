// mongoDb 模型

const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const util = require('utility') // md5加密

Router.get('/list', function(req, res) {
	//User.remove({},function(err,doc){})
	User.find({}, function(err, doc) {
		return res.json(doc)
	})
})

Router.get('/info', function(req, res) {
	return res.json({code:1})
})

Router.post('/login', function(req, res) {// 服务器接受登录的信息
	const {user, pwd} = req.body
	User.findOne({user,pwd:md5Pwd(pwd)}, function(err, doc) {
		if (!doc) {//如果没找到
			return res.json({code: 1, msg: '用户名或者密码错误'})
		}
		return res.json({code:0,data:doc})
	})
})

Router.post('/register', function(req, res) {// 服务器接受注册的信息
	const {user, pwd, type} = req.body
	User.findOne({user}, function(err, doc) {
		if (doc) {
			return res.json({code: 1, msg: '用户名重复'})
		}
		User.create({user, pwd:md5Pwd(pwd), type}, function(err, doc) {
			if (err) {
				return res.json({code: 1, msg: '服务器出错了'})
			}
			return res.json({code:0})
		})
	})
})

function md5Pwd(pwd) {
	const str = 'jeffywin$#%+_099@WANG'
	return util.md5(util.md5(pwd+str))
}
module.exports = Router