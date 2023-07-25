const mongoose = require('mongoose')
const conecta = require('../database')

const DemoSchema = new mongoose.Schema({
    Nome:{
        type:String,
        required:true
    },
    Numero:{
        type:Number,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Atividade:{
        type:String,
        required:true
    },
    Mensagem:{
        type:String,
        required:false
    },
    Cgc:{
        type:String,
        required:true
    },
    Sobrenome:{
        type:String,
        required:true
    }
  
})

const Demo = conecta.mongoose.model('Demos',DemoSchema)


module.exports = Demo