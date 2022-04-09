import React, { useState } from 'react';

export default function App() {

	const [data, setData] = useState([]);

	const [currentQuestion, setCurrentQuestion] = useState(0);

	const [showScore, setShowScore] = useState(false);

	const [score, setScore] = useState(0);

	const[scoreList, setScoreList] = useState(0);

	const handleAnswerButton = (isCorrect) => {
		if(isCorrect === true) {
			setScore(score +1);
		}

		const nextQuestion = currentQuestion +1;
		if(nextQuestion < data.length) {
			setCurrentQuestion(nextQuestion);
		}else{
			setShowScore(true);
		}
	}

	const handleResetButton = (score) => {
		setScoreList(scoreList+score);
		setCurrentQuestion(0);
		setShowScore(false);
		setScore(0);
	}

	React.useEffect(() => {
		fetch("https://opentdb.com/api.php?amount=100")
		  .then((response) => response.json())
		  .then((json) => {
			console.log("success");
			setData(json.results);
		  });
	  }, []);
	
	  console.log(data);

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {data.length} and your acummulated score is {scoreList}
				<button onClick={() => handleResetButton(score)}>Play Again!</button></div>

			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{data.length}
						</div>
						<div className='question-text'>{data[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{data[currentQuestion].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerButton(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
