const express = require ('express')
const router = express.Router()
const DemoController = require('../controllers/Demo.controller')



router.get('/', async (req,res)=>{
const Resultado = await DemoController.findDemo().then(Demos=>{
   res.render('main/Demo',{Demo:Demos,style:'Demo.css'})
  



})





})


module.exports = router