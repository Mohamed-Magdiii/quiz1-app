const express =require('express')
const router = express.Router()
const Quiz = require('../../model/quiz')

//@Route  POST  api/quiz 
//@description post quiz
router.post('/' ,async (req,res)=>{
    const {question , choice1 , choice2,choice3 , choice4,answer } = req.body
    try {
      const newQuiz = new Quiz({
          question, 
          choice1,
          choice2,
          choice3,
          choice4,
          answer
      }) 
     const quiz = await newQuiz.save()
      res.status(400).json(quiz)
    } catch (error) {
        console.log(error);
        res.status(500).send("Server Error")
    }
})

//@Route  GET  api/quiz 
//@description GET quiz

router.get('/' , async (req,res)=>{
    try {
        const quiz = await Quiz.aggregate().sample(5)
        res.json(quiz)
    } catch (error) {
        res.status(500).send("Server Error")
    }
})


module.exports = router