const mongoose = require('mongoose')
const quizShema = mongoose.Schema({
  question:{
            type:String,
            required:true
        },
        choice1:{
            type:String,
            required:true
        },
        choice2:{
            type:String,
            required:true
        },
        choice3:{
            type:String,
            required:true
        },
        choice4:{
            type:String,
            required:true
        }, 
        answer:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            default:Date.now()
        }
    
})

module.exports = mongoose.model('quiz' , quizShema)