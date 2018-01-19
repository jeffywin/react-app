const express = require('express')
const Router = express.Router()

Router.get('/info', function(res, req) {
	res.json({code: 1})
})

module.exports = Router