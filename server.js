const express = require('express')
const connectDB = require('./config/db')
const app = express()
const cors = require('cors')

//connectDB
connectDB()
app.get('/' , (req,res)=>{
    res.send("API Running");
})

//init middlware
app.use(express.json({extended:false}))
app.use(cors())

//routes
app.use('/api/quiz' , require('./routes/api/quiz'))

//app listen on port 4200
const PORT = process.env.PORT || 4200
app.listen(PORT , ()=>{
    console.log(`Server Run on Port ${PORT}`);
})