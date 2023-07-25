const bcrypt = require('bcrypt')
const loginService = require('../services/Login.service')

const Login = async (req,res) =>{
    const Email = req.body.user
    const Senha = req.body.password

    try {
        const user =  await loginService(Email)
        if(user){
            const Valida =  bcrypt.compareSync(Senha,user.Senha)
            if(Valida){
                res.redirect('/Home')
            }else{
                res.send("Login Falhou!")
            }
           
        }else{
            res.send("Usuário não cadastrado!")
        }
        
        
        
    } catch (error) {
     res.status(500).send(error.message)
    }
   }



module.exports = Login