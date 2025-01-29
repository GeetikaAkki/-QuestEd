import React, { useState } from 'react';
import './QuizTemplate.css';

const Background = () => (
  <div className="background-container">
    {[...Array(12)].map((_, i) => (
      <div key={i} className={`shape shape-${i + 1}`}></div>
    ))}
  </div>
);

const defaultQuestions = [
  {
    question: "What is React?",
    options: [
      "A JavaScript library for building user interfaces",
      "A programming language",
      "A database management system",
      "An operating system"
    ]
  },
  {
    question: "Which hook is used for side effects in React?",
    options: [
      "useEffect",
      "useState",
      "useContext",
      "useReducer"
    ]
  }
];

const QuizTemplate = ({ questions = defaultQuestions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [hoveredOption, setHoveredOption] = useState(null);

  if (!questions || questions.length === 0) {
    return (
      <div className="quiz-container">
        <Background />
        <div className="quiz-content empty-state">
          <p>No questions available.</p>
        </div>
      </div>
    );
  }

  const handleOptionSelect = (questionId, option) => {
    setSelectedAnswers(prev => {
      // If the clicked option is already selected, remove it
      if (prev[questionId] === option) {
        const newAnswers = { ...prev };
        delete newAnswers[questionId];
        return newAnswers;
      }
      // Otherwise, select the new option
      return {
        ...prev,
        [questionId]: option
      };
    });
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="quiz-container">
      <Background />
      <div className="quiz-content">
        <h2 className="quiz-title">Quiz</h2>
        
        <div className="questions-container">
          {questions.map((question, index) => (
            <div key={index} className="question-card">
              <p className="question-text">
                {index + 1}. {question.question}
              </p>
              
              <div className="options-container">
                {question.options.map((option, optIndex) => (
                  <button
                    key={optIndex}
                    onClick={() => handleOptionSelect(index, option)}
                    onMouseEnter={() => setHoveredOption(`${index}-${optIndex}`)}
                    onMouseLeave={() => setHoveredOption(null)}
                    className={`option-button ${
                      selectedAnswers[index] === option 
                        ? 'selected' 
                        : hoveredOption === `${index}-${optIndex}`
                          ? 'hovered'
                          : ''
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="submit-container">
          <button
            onClick={handleSubmit}
            className={`submit-button ${
              Object.keys(selectedAnswers).length === questions.length
                ? 'enabled'
                : 'disabled'
            }`}
            disabled={Object.keys(selectedAnswers).length !== questions.length}
          >
            Submit Quiz
          </button>
        </div>

        {submitted && (
          <div className="success-message">
            Quiz submitted! Your results will be processed.
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizTemplate;