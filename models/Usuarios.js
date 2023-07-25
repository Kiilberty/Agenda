const mongoose  = require('mongoose')
const bcrypt = require('bcrypt')
const Usuarios = new mongoose.Schema({
    Razao:{
         type: String,
         required:true
    },
    Fantasia:{
        type:String,
        required:true
    },
    Atividade:{
        type:String,
        required:true
    },
    CGC:{
        type:String,
        required:true
    },
    CEP:{
        type:Number,
        required:true
    },
    UF:{
      type:String,
      required:true
    },
    Endereco:{
       type:String,
       required:true
     },
     Bairro:{
        type:String,
        required:true
     },
     Numero:{
        type:Number,
        required:true
     },
    Email:{
        type:String,
        unique:true,
        required:true
    },

    Senha:{
    type:String,
    required:true,
    select:false
   },

    Ativo:{
     type:Boolean,
     required:true
    },
    
    Telefone1:{
        type:Number,
        required:true
    },
    
    Telefone2:{
        type:Number,
        required:false
    },
    PontoRef:{
        type:String,
        required:false
    },
    Observacoes:{
       type:String,
       required:false
    },
    Sobre:{
        type:String,
        required:false
    }
        
})





Usuarios.pre("save", async function(next){
this.Senha =  await bcrypt.hash(this.Senha,10)
next()
}) 
    

const User = mongoose.model("Usuarios",Usuarios)


module.exports = User


