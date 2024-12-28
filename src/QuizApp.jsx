import { useState } from "react";
import "./quiz.css";

const questions = {
  animals: [
    {
      question: "What is the largest land animal?",
      answers: [
        { text: "Elephant", correct: true },
        { text: "Rhino", correct: false },
        { text: "Hippo", correct: false },
        { text: "Lion", correct: false },
      ],
    },
    {
      question: "Which animal is known as the king of the jungle?",
      answers: [
        { text: "Tiger", correct: false },
        { text: "Lion", correct: true },
        { text: "Cheetah", correct: false },
        { text: "Wolf", correct: false },
      ],
    },
    {
      question: "What is the fastest land animal?",
      answers: [
        { text: "Cheetah", correct: true },
        { text: "Lion", correct: false },
        { text: "Leopard", correct: false },
        { text: "Tiger", correct: false },
      ],
    },
  ],
  science: [
    {
      question: "What planet is known as the Red Planet?",
      answers: [
        { text: "Mars", correct: true },
        { text: "Earth", correct: false },
        { text: "Venus", correct: false },
        { text: "Jupiter", correct: false },
      ],
    },
    {
      question: "What is the chemical symbol for water?",
      answers: [
        { text: "H2O", correct: true },
        { text: "O2", correct: false },
        { text: "H2", correct: false },
        { text: "HO", correct: false },
      ],
    },
    {
      question: "What is the speed of light?",
      answers: [
        { text: "299,792 km/s", correct: true },
        { text: "150,000 km/s", correct: false },
        { text: "1,000 km/s", correct: false },
        { text: "3,000 km/s", correct: false },
      ],
    },
  ],
};

function QuizApp() {
  const [category, setCategory] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [scoreBoard, setScoreBoard] = useState(false)

  const categoryClicked = (selectedCategory) => {
    setCategory(selectedCategory);
    setQuestionIndex(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setScore(0);
  };

  const answerClicked = (answer) => {

  
    setSelectedAnswer(answer);
    if (answer.correct) {
      setScore(score + 1);
    }

    setShowAnswer(true);

    
  };


  const nextQuestion = ()=>{

    if(questionIndex < questions[category].length-1){
      setQuestionIndex(questionIndex + 1)
    setSelectedAnswer(null)
    setShowAnswer(false)
    }
    else{

      setScoreBoard(true)
    

    }
    

  }



  if (!category) {
    return (
      <>
        <div className="main_container">
          <div className="container">
            <h1>Quiz-App</h1>
            <hr />
            <h3 className="question" style={{ textAlign: "center" }}>
              Categories
            </h3>
            <hr style={{ padding: "0 5rem", width: "60%" }} />

            {Object.keys(questions).map((key) => (
              <ul>
                <li
                  className="answer"
                  key={key}
                  onClick={() => {
                    categoryClicked(key);
                  }}
                >
                  {key}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </>
    );
  }

  const selectedCategoryQus = questions[category][questionIndex];

  return (
    <>

    {(!scoreBoard) ?
      <div className="main_container">
        <div className="container">
          <h1>Quiz-App</h1>
          <hr />
          <h3 className="question">{selectedCategoryQus.question}</h3>
          <hr style={{ padding: "0 5rem", width: "60%" }} />

          <ol className="OrderList">
            {selectedCategoryQus.answers.map((answer, index) => (
              <button
                className={`answer ${
                  showAnswer
                    ? answer.correct
                      ? "correct"
                      : selectedAnswer === answer
                      ? "incorrect"
                      : ""
                    : ""
                }`}
                onClick={() => {
                  answerClicked(answer);
                }}
                disabled={!!selectedAnswer}
                key={index}
              >
                {answer.text}
              </button>
            ))}
          </ol>

          <div className="btn">
            <button
            
            onClick={()=>{
              nextQuestion()
            }}

            >Next</button>
          </div>
        </div>
      </div> : 
      <div className="main_container">
        <div className="container">
          <h1>Quiz-App</h1>
          <hr />
          <h3 className="question">Created By Jeevan..</h3>
          <hr style={{ padding: "0 5rem", width: "60%" }} />

        <h2 style={{textAlign:"center"}}>Your Score is {score}</h2>

          <div className="btn">
            <button
            
            onClick={()=>{
              setCategory(null)
              setScore(0)
              setScoreBoard(false)
            }}

            >Start Again</button>
          </div>
        </div>
      </div>
      }
      
    </>
  );
}

export default QuizApp;
