const express = require('express')
const app = express()
const port = process.env.PORT || 7000
const morgan = require('morgan');
const connect = require('./db/mongoDB')
const cors = require('cors')
const messageRoute = require('./router/messageRoute')





//middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


//Api
app.use('/api', messageRoute)


//routes
app.get('/',(req,res)=>{
    res.status(200).send({message:'app is running'})
})
app.use((req,res)=>{
    res.status(404).json({message:'This route does not exist'})
})






//db connection
connect()
.then(()=>{
    try{
      
app.listen(port, ()=>{
    console.log(`Server connected to http://localhost:${port}`);

})
    }catch(error){
        console.log('cannot connect to the server');
    }
})
.catch((error)=>{
    console.log('invalid database connection...!',error);
})