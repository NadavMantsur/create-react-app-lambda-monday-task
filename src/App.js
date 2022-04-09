import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswersCounter, setCorrectAnswersCounter] = useState(0);

  
  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=100")
      .then((response) => response.json())
      .then((json) => {
        console.log("success");
        setData(json.results);
      });
  }, []);

  console.log(data);

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        justifyContent: "center",
      }}
    > <div className="heading">Quiz Game</div><br></br>
      <div className="question">{data[currentQuestion]?.question}</div><br></br>

      <div className="score">Score:{correctAnswersCounter}</div><br></br>

      <div className="incorrectAnswers">
        {data[currentQuestion]?.incorrect_answers?.map((answer) => {
          return (
            <div className="button">
              <button
                onClick={() => {
                  setCurrentQuestion((prev) => prev + 1);
                }}
              >
                {answer}
              </button>
            </div>
          );
        })}
      </div>

      <div className="incorrectAnswers">
        {data[currentQuestion]?.correct_answers?.map((answer) => {
          return (
            <div className="button">
              <button
                onClick={() => {
                  setCurrentQuestion((prev) => prev + 1);
                }}
              >
                {answer}
              </button>
            </div>
          );
        })}
            <div>
              <button onClick={() => {
                  setCurrentQuestion((prev) => prev + 1);
                  setCorrectAnswersCounter(correctAnswersCounter + 1);
                }}>{data[currentQuestion]?.correct_answer}</button>
            </div>
      </div>
    </div>
  );
}

export default App;
