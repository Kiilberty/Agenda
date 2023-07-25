const user = require('../models/Usuarios')
const user2 = require('../models/UsuariosSite')

const createServiceSite = (body)=>user2.create(body)
const CreateService = (body)=> user.create(body)

module.exports={
    CreateService,
   createServiceSite
  
}