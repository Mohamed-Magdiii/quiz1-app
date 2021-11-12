const express = require('express')
const connectDB = require('./config/db')
const app = express()
const cors = require('cors')
const path =require('path')
//connectDB
connectDB()


//init middlware
app.use(express.json({extended:false}))
app.use(cors())

//Serve Static assets in production 

if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static('client/build'))
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'client', 'build' , 'index.html'))
    })
}

//routes
app.use('/api/quiz' , require('./routes/api/quiz'))

//app listen on port 4200
const PORT = process.env.PORT || 4200
app.listen(PORT , ()=>{
    console.log(`Server Run on Port ${PORT}`);
})