const mongoose = require("mongoose")
require('dotenv').config()
const urlSite = process.env.URL_SITE
const urlAgenda = process.env.URL_AGENDA


const con = mongoose.createConnection(urlSite)

if(con){
    console.log('conectado')
    
}else{
    console.log('falha')
}

//


const connect2 = () => {
   
    mongoose.connect(urlAgenda)
    const connection = mongoose.connection

    connection.on("error",()=>{
        console.error("Conexão Falhou!")
    })

    connection.on("open",()=>{
        console.log("Conectado com sucesso!")
    })
  
}


connect2()

module.exports = {
    mongoose,
    con
 

}