const userService = require('../services/Usuario.service')
const user1 = require('../models/Usuarios')
const createService = async (req,res)=>{
  
 const user = await userService.CreateService(req.body)   
 const user2 = await userService.createServiceSite(req.body)
 if(!user){
    res.status(400).send({message:"Erro ao criar usuário"})
 }
  
 
 if(!user2){
   res.status(400).send({message:"Erro ao criar usuário"})
 }


 res.status(201).send({
    message:"Usuário foi criado!",

  })




}






module.exports=
{
createService
}
