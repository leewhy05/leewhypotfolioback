const PORTFO = require('../model/messageModel')


// post message, C -- for create

const create_message = async(req,res)=>{
    try {
        const message =  await PORTFO.create(req.body)
        res.status(201).json({success:true,message:"successfully created a product",message})
    } catch (error) {
     console.log(error.message);
     res.status(500).json({success:false,message:error})   
    }
  
  }
  


  
module.exports ={
   create_message
}