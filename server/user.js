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

Router.get('/info', function(req, res) { //访问info页面时，拿到cookie get/post
	const {userid} = req.cookies
	if(!userid) {
		return res.json({code:1})
	}
	User.findOne({_id:userid}, function(err,doc) {
		if(err) {
			return res.json({code:1, msg:'服务器出错了'})
		}
		if(doc) {
			return res.json({code:0, data:doc}) 
		}
	})
})

Router.post('/login', function(req, res) {// 服务器接受登录的信息
	const {user, pwd} = req.body
	User.findOne({user,pwd:md5Pwd(pwd)}, function(err, doc) {
		if (!doc) {//如果没找到
			return res.json({code: 1, msg: '用户名或者密码错误'})
		}
		res.cookie('userid',doc._id) //根据登录的用户id存储cookie
		return res.json({code:0,data:doc}) // 返回data信息给前端
	})
})

Router.post('/updata', function(req,res) { //只要进入info页面，就会检测cookie，存取cookie
	const {userid} = req.cookies //获取cookies
	if(!userid) {
		return json.dumps({code:1})
	}
	const body = req.body
	User.findByIdAndUpdate(userid,body,function(err,doc){//查找并更新
		const data = Object.assign({
			user: doc.user,
			type: doc.type
		}, body)
		return res.json({code:0,data})
	})
})

Router.post('/register', function(req, res) {// 服务器接受注册的信息
	const {user, pwd, type} = req.body
	User.findOne({user}, function(err, doc) {
		if (doc) {
			return res.json({code: 1, msg: '用户名重复'})
		}
		//不能保存_id,所以需要用sava方法
		const userModel = new User({user, pwd:md5Pwd(pwd), type})
		userModel.save(function(err,doc) {
			if (err) {
				return res.json({code: 1, msg: '服务器出错了'})
			}
			const {user, pwd, _id} = doc
			res.cookie('userid', _id)
			return res.json({code:0,data:{user, pwd, _id}})
		})
		// User.create({user, pwd:md5Pwd(pwd), type}, function(err, doc) {
		// 	if (err) {
		// 		return res.json({code: 1, msg: '服务器出错了'})
		// 	}
		// 	return res.json({code:0})
		// })
	})
})

function md5Pwd(pwd) {
	const str = 'jeffywin$#%+_099@WANG'
	return util.md5(util.md5(pwd+str))
}
module.exports = Router