
const DemoService= require('../services/Demo.service')




const findDemo =  async (req,res)=>{
    const BuscaDemo = await DemoService.findService()
    if(BuscaDemo === 0){
       return res.status(400).send({message:"Não foi encontrado nenhuma solicitação"})
    }
     return BuscaDemo
  }




module.exports = {
    findDemo
}