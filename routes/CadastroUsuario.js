const express = require("express")
const router = express.Router()
const UserController = require("../controllers/Usuario.controller")

const User = require("../models/Usuarios")

router.post("/",UserController.createService)



router.get("/", (req,res) => {
    res.render('client/clientRegister',{style: 'registerClient.css'})
})


module.exports = router