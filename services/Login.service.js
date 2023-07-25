const User = require("../models/Usuarios");




const loginService = (Email) => User.findOne({Email:Email}).select('+Senha')



module.exports = loginService