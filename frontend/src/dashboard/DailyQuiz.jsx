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
    question: "Which of the following is a valid C++ identifier?",
    options: ["123_var", "_myVariable", "my-variable", "break"],
    answer: "_myVariable"
  },
  {
    question: "Which keyword is used to define a constant in C++?",
    options: ["const", "#define", "constant", "let"],
    answer: "const"
  },
  {
    question: "What is used for output stream in C++?",
    options: ["cout <<", "cout >>", "cin <<", "printf()"],
    answer: "cout <<"
  },
  {
    question: "Which of the following is used to take input in C++?",
    options: ["cout", "cin", "scanf", "println"],
    answer: "cin"
  },
  {
    question: "Which access specifier makes class members public by default?",
    options: ["class", "struct", "union", "none"],
    answer: "struct"
  },
  {
    question: "What is the correct way to create an object in C++?",
    options: ["MyClass obj();", "new MyClass;", "MyClass obj;", "create MyClass;"],
    answer: "MyClass obj;"
  },
  {
    question: "Which operator is used for pointer declaration in C++?",
    options: ["*", "&", "->", "@"],
    answer: "*"
  },
  {
    question: "What is the size of bool data type in C++?",
    options: ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
    answer: "1 byte"
  },
  {
    question: "What is the result of 5/2 in C++ when both operands are integers?",
    options: ["2.5", "2", "3", "2.0"],
    answer: "2"
  },
  {
    question: "Which header file is required for using string class in C++?",
    options: ["<string>", "<string.h>", "<strings>", "<iostream>"],
    answer: "<string>"
  }
];

const DailyQuiz = ({ questions = defaultQuestions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [hoveredOption, setHoveredOption] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        navigate('/learning/c');
      }, 10000);
      return () => clearTimeout(timer);
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
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: prev[questionId] === option ? undefined : option
    }));
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

export default DailyQuiz;
