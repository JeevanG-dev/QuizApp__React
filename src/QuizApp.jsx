import { useState } from "react";
import "./quiz.css";
import { questions } from "../stores/questions.js";

//  animals: [
//     {
//       question: "What is the largest land animal?",
//       answers: [
//         { text: "Elephant", correct: true },
//         { text: "Rhino", correct: false },
//         { text: "Hippo", correct: false },
//         { text: "Lion", correct: false },
//       ],
//     },
//     {
//       question: "Which animal is known as the king of the jungle?",
//       answers: [
//         { text: "Tiger", correct: false },
//         { text: "Lion", correct: true },
//         { text: "Cheetah", correct: false },
//         { text: "Wolf", correct: false },
//       ],
//     },
//     {
//       question: "What is the fastest land animal?",
//       answers: [
//         { text: "Cheetah", correct: true },
//         { text: "Lion", correct: false },
//         { text: "Leopard", correct: false },
//         { text: "Tiger", correct: false },
//       ],
//     },
//     {
//       question: "Which animal is the tallest in the world?",
//       answers: [
//         { text: "Giraffe", correct: true },
//         { text: "Elephant", correct: false },
//         { text: "Kangaroo", correct: false },
//         { text: "Ostrich", correct: false },
//       ],
//     },
//     {
//       question: "What is the largest species of shark?",
//       answers: [
//         { text: "Whale Shark", correct: true },
//         { text: "Great White Shark", correct: false },
//         { text: "Hammerhead Shark", correct: false },
//         { text: "Tiger Shark", correct: false },
//       ],
//     },
//     {
//       question: "Which bird is known for its colorful feathers and mimicry skills?",
//       answers: [
//         { text: "Parrot", correct: true },
//         { text: "Peacock", correct: false },
//         { text: "Flamingo", correct: false },
//         { text: "Swan", correct: false },
//       ],
//     },
//     {
//       question: "What is the largest species of penguin?",
//       answers: [
//         { text: "Emperor Penguin", correct: true },
//         { text: "King Penguin", correct: false },
//         { text: "Adelie Penguin", correct: false },
//         { text: "Chinstrap Penguin", correct: false },
//       ],
//     },
//     {
//       question: "Which animal is known as the ship of the desert?",
//       answers: [
//         { text: "Camel", correct: true },
//         { text: "Horse", correct: false },
//         { text: "Donkey", correct: false },
//         { text: "Elephant", correct: false },
//       ],
//     },
//     {
//       question: "What is the only mammal capable of true flight?",
//       answers: [
//         { text: "Bat", correct: true },
//         { text: "Squirrel", correct: false },
//         { text: "Bird", correct: false },
//         { text: "Kangaroo", correct: false },
//       ],
//     },
//     {
//       question: "Which aquatic animal is known for its intelligence?",
//       answers: [
//         { text: "Dolphin", correct: true },
//         { text: "Shark", correct: false },
//         { text: "Whale", correct: false },
//         { text: "Octopus", correct: false },
//       ],
//     },
//     {
//       question: "What is the slowest animal on Earth?",
//       answers: [
//         { text: "Three-Toed Sloth", correct: true },
//         { text: "Tortoise", correct: false },
//         { text: "Snail", correct: false },
//         { text: "Koala", correct: false },
//       ],
//     },
//     {
//       question: "Which animal is known for its black-and-white striped coat?",
//       answers: [
//         { text: "Zebra", correct: true },
//         { text: "Tiger", correct: false },
//         { text: "Panda", correct: false },
//         { text: "Skunk", correct: false },
//       ],
//     },
//     {
//       question: "What is the largest species of snake?",
//       answers: [
//         { text: "Green Anaconda", correct: true },
//         { text: "Python", correct: false },
//         { text: "Cobra", correct: false },
//         { text: "Rattlesnake", correct: false },
//       ],
//     },
//     {
//       question: "Which insect is known for producing honey?",
//       answers: [
//         { text: "Bee", correct: true },
//         { text: "Ant", correct: false },
//         { text: "Butterfly", correct: false },
//         { text: "Wasp", correct: false },
//       ],
//     },
//     {
//       question: "Which animal has the longest lifespan?",
//       answers: [
//         { text: "Bowhead Whale", correct: true },
//         { text: "Elephant", correct: false },
//         { text: "Tortoise", correct: false },
//         { text: "Parrot", correct: false },
//       ],
//     },
//     {
//       question: "Which bird is known for its ability to run fast but not fly?",
//       answers: [
//         { text: "Ostrich", correct: true },
//         { text: "Penguin", correct: false },
//         { text: "Chicken", correct: false },
//         { text: "Duck", correct: false },
//       ],
//     },
//     {
//       question: "What is the largest species of cat?",
//       answers: [
//         { text: "Tiger", correct: true },
//         { text: "Lion", correct: false },
//         { text: "Cheetah", correct: false },
//         { text: "Leopard", correct: false },
//       ],
//     },
//     {
//       question: "Which animal is known for its ability to change color?",
//       answers: [
//         { text: "Chameleon", correct: true },
//         { text: "Frog", correct: false },
//         { text: "Octopus", correct: false },
//         { text: "Squid", correct: false },
//       ],
//     },
//     {
//       question: "What is the tallest species of bird?",
//       answers: [
//         { text: "Ostrich", correct: true },
//         { text: "Flamingo", correct: false },
//         { text: "Eagle", correct: false },
//         { text: "Stork", correct: false },
//       ],
//     },
//     {
//       question: "Which marine animal is known for its tusks?",
//       answers: [
//         { text: "Walrus", correct: true },
//         { text: "Seal", correct: false },
//         { text: "Dolphin", correct: false },
//         { text: "Shark", correct: false },
//       ],
//     },
//     {
//       question: "Which animal has the strongest bite force?",
//       answers: [
//         { text: "Saltwater Crocodile", correct: true },
//         { text: "Great White Shark", correct: false },
//         { text: "Lion", correct: false },
//         { text: "Hippopotamus", correct: false },
//       ],
//     },
//     {
//       question: "What is the smallest bird species?",
//       answers: [
//         { text: "Bee Hummingbird", correct: true },
//         { text: "Sparrow", correct: false },
//         { text: "Robin", correct: false },
//         { text: "Finch", correct: false },
//       ],
//     },
//     {
//       question: "Which animal is known to have the thickest fur?",
//       answers: [
//         { text: "Sea Otter", correct: true },
//         { text: "Polar Bear", correct: false },
//         { text: "Arctic Fox", correct: false },
//         { text: "Mink", correct: false },
//       ],
//     }],
//   science: [
//     {
//       question: "What planet is known as the Red Planet?",
//       answers: [
//         { text: "Mars", correct: true },
//         { text: "Earth", correct: false },
//         { text: "Venus", correct: false },
//         { text: "Jupiter", correct: false },
//       ],
//     },
//     {
//       question: "What is the chemical symbol for water?",
//       answers: [
//         { text: "H2O", correct: true },
//         { text: "O2", correct: false },
//         { text: "H2", correct: false },
//         { text: "HO", correct: false },
//       ],
//     },
//     {
//       question: "What is the speed of light?",
//       answers: [
//         { text: "299,792 km/s", correct: true },
//         { text: "150,000 km/s", correct: false },
//         { text: "1,000 km/s", correct: false },
//         { text: "3,000 km/s", correct: false },
//       ],
//     },
//     // Add 47 more science-related questions here
//   ],
//   geography: [
//     {
//       question: "What is the capital of France?",
//       answers: [
//         { text: "Paris", correct: true },
//         { text: "London", correct: false },
//         { text: "Berlin", correct: false },
//         { text: "Madrid", correct: false },
//       ],
//     },
//     {
//       question: "Which continent is the Sahara Desert located on?",
//       answers: [
//         { text: "Africa", correct: true },
//         { text: "Asia", correct: false },
//         { text: "Australia", correct: false },
//         { text: "South America", correct: false },
//       ],
//     },
//     {
//       question: "What is the longest river in the world?",
//       answers: [
//         { text: "Nile", correct: true },
//         { text: "Amazon", correct: false },
//         { text: "Yangtze", correct: false },
//         { text: "Mississippi", correct: false },
//       ],
//     },
//     // Add 47 more geography-related questions here
//   ],
//   history: [
//     {
//       question: "Who was the first president of the United States?",
//       answers: [
//         { text: "George Washington", correct: true },
//         { text: "Abraham Lincoln", correct: false },
//         { text: "Thomas Jefferson", correct: false },
//         { text: "John Adams", correct: false },
//       ],
//     },
//     {
//       question: "In which year did World War II end?",
//       answers: [
//         { text: "1945", correct: true },
//         { text: "1939", correct: false },
//         { text: "1918", correct: false },
//         { text: "1965", correct: false },
//       ],
//     },
//     {
//       question: "What was the name of the ship that brought the Pilgrims to America?",
//       answers: [
//         { text: "Mayflower", correct: true },
//         { text: "Santa Maria", correct: false },
//         { text: "Beagle", correct: false },
//         { text: "Endeavour", correct: false },
//       ],
//     },
//     // Add 47 more history-related questions here
//   ],
//   planets: [
//     {
//       question: "Which planet is the largest in the solar system?",
//       answers: [
//         { text: "Jupiter", correct: true },
//         { text: "Saturn", correct: false },
//         { text: "Earth", correct: false },
//         { text: "Mars", correct: false },
//       ],
//     },
//     {
//       question: "Which planet is known as the Morning Star?",
//       answers: [
//         { text: "Venus", correct: true },
//         { text: "Mercury", correct: false },
//         { text: "Mars", correct: false },
//         { text: "Jupiter", correct: false },
//       ],
//     },
//     {
//       question: "Which planet has the most moons?",
//       answers: [
//         { text: "Saturn", correct: true },
//         { text: "Jupiter", correct: false },
//         { text: "Neptune", correct: false },
//         { text: "Uranus", correct: false },
//       ],
//     },
//     // Add 47 more planet-related questions here
//   ],
//   bodyparts: [
//     {
//       question: "Which organ is responsible for pumping blood?",
//       answers: [
//         { text: "Heart", correct: true },
//         { text: "Lungs", correct: false },
//         { text: "Liver", correct: false },
//         { text: "Kidney", correct: false },
//       ],
//     },
//     {
//       question: "What is the largest organ in the human body?",
//       answers: [
//         { text: "Skin", correct: true },
//         { text: "Liver", correct: false },
//         { text: "Brain", correct: false },
//         { text: "Lungs", correct: false },
//       ],
//     },
//     {
//       question: "Which part of the body controls balance?",
//       answers: [
//         { text: "Inner Ear", correct: true },
//         { text: "Heart", correct: false },
//         { text: "Lungs", correct: false },
//         { text: "Liver", correct: false },
//       ],
//     },
//     // Add 47 more bodyparts-related questions here
//   ],
// };


function QuizApp() {
  const [category, setCategory] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [scoreBoard, setScoreBoard] = useState(false);

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

  const nextQuestion = () => {

    if(selectedAnswer){
      if (questionIndex < questions[category].length - 1) {
        setQuestionIndex(questionIndex + 1);
        setSelectedAnswer(null);
        setShowAnswer(false);
      } else {
        setScoreBoard(true);
      }
    }
    else{
      alert("please select one option")
    }

   
  };

  if (!category) {
    return (
      <>
        <div className="main_container">
          <div className="container" style={{paddingBottom:"1rem"}}>
            <h1>Quiz-App</h1>
            <hr />
            <h3 className="question" style={{ textAlign: "center" }}>
              Categories
            </h3>
            <hr style={{ padding: "0 5rem", width: "60%" }} />

            {Object.keys(questions).map((key) => (
              <ol className="list" >
                <button
                  className="answer"
                  key={key}
                  onClick={() => {
                    categoryClicked(key);
                  }}
                >
                  {key.toUpperCase()} {`(${questions[key].length})`}
                </button>
              </ol>
            ))}
          </div>
        </div>
      </>
    );
  }

  const selectedCategoryQus = questions[category][questionIndex];

  return (
    <>
      {!scoreBoard ? (
        <div className="main_container">
          <div className="container">
            <h1>Quiz-App</h1>
            <hr />
            <h3 className="question" style={{ textAlign: "center" }}>{questionIndex + 1}. {selectedCategoryQus.question} </h3>
            <hr style={{ padding: "0 5rem", width: "60%" }} />

            <ol className="list">
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
                onClick={() => {
                  setTimeout(()=>{
                    nextQuestion();
                  },1500)

                  
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="main_container">
          <div className="container">
            <h1>Quiz-App</h1>
            <hr />
            <h3 className="question">Created By Jeevan..</h3>
            <hr style={{ padding: "0 5rem", width: "60%" }} />

            <h2 style={{ textAlign: "center" }}>Your Score is {score} out of {questions[category].length}</h2>

            <div className="btn">
              <button
                onClick={() => {
                  setCategory(null);
                  setScore(0);
                  setScoreBoard(false);
                }}
              >
                Start Again
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default QuizApp;
