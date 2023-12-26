// require mongoose
//from mongoose , we would use a mthod called schema. thos defines d structure of the document that we would store in the collection. model is used to wrap the schema and then send it to d DB
const mongoose = require('mongoose')
const Schema = mongoose.Schema;


// create schema for user model
const TASKSchema = new Schema({
    from: { 
        type: String, 
        required: [true, 'name is required']
    },
    subject: { 
        type: String, 
        required: [true, 'subject is required']
    },
    message:{
          type: String,
         required: [true, 'write is message'],
         
    },
    date:{
        
        type:Date,
        default:Date.now(),

    }
}, {timestamps:true})

const PORTFO = mongoose.model('Message', TASKSchema)
module.exports = PORTFO