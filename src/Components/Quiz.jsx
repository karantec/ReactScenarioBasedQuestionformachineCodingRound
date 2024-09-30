import { useState } from "react";





// 1. Initialize State Variables:
//     - currentQuestionIndex = 0 (Start at the first question)
//     - selectedAnswer = null (No answer selected initially)
//     - score = 0 (Initial score is 0)
//     - quizFinished = false (Quiz not finished at the beginning)

// 2. Fetch the Current Question:
//     - Get the question and options from quizData based on currentQuestionIndex.

// 3. Handle Answer Selection:
//     - When an option is clicked:
//         - Update selectedAnswer to store the selected option.

// 4. Handle Next Question:
//     - If the selected answer matches the correct answer for the current question:
//         - Increment the score by 1.
//     - Clear the selectedAnswer (reset it to null).
//     - If currentQuestionIndex is the last question:
//         - Set quizFinished to true (End the quiz).
//     - Otherwise:
//         - Increment currentQuestionIndex to move to the next question.

// 5. Render:
//     - If quizFinished is true:
//         - Display the user's final score and a message that the quiz is finished.
//     - Otherwise:
//         - Display the current question and the list of answer options as buttons.
//         - Highlight the selected answer option.
//         - Show a "Next Question" button that is enabled only when an answer is selected.
//         - The button text changes to "Finish Quiz" for the last question.

// 6. End of the Quiz:
//     - Display the user's score out of the total number of questions after the quiz is completed.

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    correctAnswer: "Paris",
  },
  {
    question: "Which language is used for web development?",
    options: ["Python", "HTML", "C++", "Java"],
    correctAnswer: "HTML",
  },
  {
    question: "Who is the CEO of Tesla?",
    options: ["Jeff Bezos", "Elon Musk", "Bill Gates", "Warren Buffet"],
    correctAnswer: "Elon Musk",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswerSelection = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }
    setSelectedAnswer(null);

    if (currentQuestionIndex === quizData.length - 1) {
      setQuizFinished(true);
    } else {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        {quizFinished ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
            <p className="text-xl">Your score: {score} / {quizData.length}</p>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-4">
              Question {currentQuestionIndex + 1} / {quizData.length}
            </h2>
            <p className="text-lg mb-6">{currentQuestion.question}</p>
            <div className="space-y-3 mb-6">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className={`block w-full py-2 px-4 border rounded-lg text-left ${
                    selectedAnswer === option
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleAnswerSelection(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <button
              onClick={handleNextQuestion}
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
              disabled={!selectedAnswer}
            >
              {currentQuestionIndex === quizData.length - 1 ? "Finish Quiz" : "Next Question"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
