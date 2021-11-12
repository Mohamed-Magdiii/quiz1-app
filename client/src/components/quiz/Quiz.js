import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getAllQuizes } from "../../actions/quiz";
import { connect } from "react-redux";

const Quiz = ({ quiz: { quiz }, getAllQuizes }) => {
  useEffect(() => {
    getAllQuizes();
    setName(prompt("Please Enter Your Name"));
  }, [getAllQuizes]);

  const [name, setName] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [inputValue, setCurrentValue] = useState("");
  const [score, setscore] = useState(0);

  const onChange = (e) => {
    setCurrentValue(e.target.value);
  };

  const onClickNext = () => {
    setCurrentQuestion(currentQuestion + 1);
    inputValue === quiz[currentQuestion].answer && setscore(score + 1);
  };
  const newQuiz = () => {
    setCurrentQuestion(0);
    setscore(0);
  };
  
  return (
    <Fragment>
      <h1 className="text-primary text-center">Welcome {name}</h1>
      <div class="container mt-5">
        <div class="d-flex justify-content-center row">
          <div class="col-md-10 col-lg-10">
            <div class="border">
              <div class="question bg-white p-3 border-bottom">
                <div class="d-flex flex-row justify-content-between align-items-center mcq">
                  <h4>MCQ Quiz</h4>
                </div>
              </div>
              {quiz === null ? (
                <h2 className="text-primary">Wait Until Quiz Loaded...</h2>
              ) : (
                <Fragment>
                  <div class="question bg-white p-3 border-bottom">
                    <div class="d-flex flex-row align-items-center question-title">
                      <h3 class="text-danger">Q.</h3>
                      <h5 class="mt-1 ml-2">
                        {quiz[currentQuestion].question}
                      </h5>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="choice"
                          value={quiz[currentQuestion].choice1}
                          onChange={(e) => onChange(e)}
                        />
                        <span>{quiz[currentQuestion].choice1}</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="choice"
                          value={quiz[currentQuestion].choice2}
                          onChange={(e) => onChange(e)}
                        />{" "}
                        <span>{quiz[currentQuestion].choice2}</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="choice"
                          value={quiz[currentQuestion].choice3}
                          onChange={(e) => onChange(e)}
                        />{" "}
                        <span>{quiz[currentQuestion].choice3}</span>
                      </label>
                    </div>
                    <div class="ans ml-2">
                      <label class="radio">
                        {" "}
                        <input
                          type="radio"
                          name="choice"
                          value={quiz[currentQuestion].choice4}
                          onChange={(e) => onChange(e)}
                        />{" "}
                        <span>{quiz[currentQuestion].choice4}</span>
                      </label>
                    </div>
                  </div>
                  {currentQuestion < quiz.length - 1 ? (
                    <div class="d-flex flex-row
                    justify-content-between 
                    align-items-center p-3 bg-white">
                      <button
                        class="btn btn-primary border-success offset-10 btn-success"
                        onClick={() => onClickNext()}
                        type="button"
                      >
                        Next
                        <i class="fa fa-angle-right ml-2"></i>
                      </button>
                    </div>
                  ) : (
                    <Fragment>
                      <div>
                        <h1 className="text-danger mx-4">Your Score is {score}</h1>
                      </div>
                      <div class="d-flex flex-row justify-content-between align-items-center p-3 bg-white">
                        <button
                          class="btn btn-primary border-success offset-10 btn-primary"
                          onClick={() => newQuiz()}
                          type="button"
                        >
                          New Quiz
                          <i class="fa fa-angle-right ml-2"></i>
                        </button>
                      </div>
                    </Fragment>
                  )}
                </Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Quiz.propTypes = {
  getAllQuizes: PropTypes.func.isRequired,
  quiz: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  quiz: state.quiz,
});

export default connect(mapStateToProps, { getAllQuizes })(Quiz);
