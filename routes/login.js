const express = require('express')
const Login = require('../controllers/Login.controller')
const router = express.Router()

router.post("/",Login)






module.exports = router