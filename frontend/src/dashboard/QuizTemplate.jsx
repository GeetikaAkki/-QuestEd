import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
    question: "Which of the following is a valid C identifier?",
    options: ["123variable", "_variableName", "variable-name", "var iable"],
    answer: "_variableName"
  },
  {
    question: "Which keyword is used to define a constant in C?",
    options: ["const", "constant", "var", "define"],
    answer: "const"
  },
  {
    question: "What is the format specifier for printing an integer in C?",
    options: ["%d", "%c", "%f", "%s"],
    answer: "%d"
  },
  {
    question: "Which of the following is used to take input in C?",
    options: ["cin", "scanf", "input", "read"],
    answer: "scanf"
  },
  {
    question: "What is the default return type of a function in C if not specified?",
    options: ["void", "int", "float", "char"],
    answer: "int"
  },
  {
    question: "Which loop is guaranteed to execute at least once?",
    options: ["for", "while", "do-while", "none"],
    answer: "do-while"
  },
  {
    question: "Which operator is used to access the address of a variable?",
    options: ["*", "&", "->", "@"],
    answer: "&"
  },
  {
    question: "Which data type is used to store a single character in C?",
    options: ["char", "string", "int", "float"],
    answer: "char"
  },
  {
    question: "What is the result of 5 / 2 in C when both operands are integers?",
    options: ["2.5", "2", "3", "error"],
    answer: "2"
  },
  {
    question: "Which header file is required for using printf() and scanf()?",
    options: ["stdio.h", "stdlib.h", "math.h", "conio.h"],
    answer: "stdio.h"
  }
];

const Quiz = ({ questions = defaultQuestions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [hoveredOption, setHoveredOption] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (submitted) {
      setTimeout(() => {
        navigate('/learning/c');
      }, 10000);
    }
  }, [submitted, navigate]);

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
      if (prev[questionId] === option) {
        const newAnswers = { ...prev };
        delete newAnswers[questionId];
        return newAnswers;
      }
      return {
        ...prev,
        [questionId]: option
      };
    });
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.answer) {
        newScore += 1;
      }
    });
    setScore(newScore);
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
            Quiz submitted! <br />
            <span style={{ fontSize: '2rem', color: 'orange', fontWeight: 'bold' }}>
              Your score: {score} / {questions.length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;