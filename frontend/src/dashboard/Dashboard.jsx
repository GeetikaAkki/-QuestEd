import React from 'react';
import './styles/DashboardLayout.css';
import './styles/DashboardGrid.css';

const DashboardLayout = () => {
  const cards = [
    { 
      id: 1, 
      className: 'blue', 
      title: 'Course Page',
      description: 'Access your course materials, lectures, and assignments. Track your progress and view upcoming deadlines.',
      icon: '📚'  // Books icon for courses
    },
    { 
      id: 2, 
      className: 'green', 
      title: 'Well Being',
      description: 'Monitor your mental health, access wellness resources, and schedule counseling sessions.',
      icon: '🌱'  // Plant icon representing growth and wellness
    },
    { 
      id: 3, 
      className: 'pink', 
      title: 'Daily Quizzes',
      description: 'Practice daily assessments to reinforce your learning. View your quiz history and performance analytics.',
      icon: '✍️'  // Writing hand for quizzes
    },
    { 
      id: 4, 
      className: 'red', 
      title: 'Feedback',
      description: 'Submit course feedback, view instructor comments, and participate in peer reviews.',
      icon: '💭'  // Speech bubble for feedback
    },
  ];

  return (
    <div className="dashboard-layout">
      <div className="floating-icons">
        {[...Array(15)].map((_, index) => (
          <span key={index} className="floating-icon">
            {['📚', '✏️', '🎓', '📝', '🔍', '📊', '💡', '🎯', '📓', '🖥️'][index % 10]}
          </span>
        ))}
      </div>
      <div className="dashboard-grid">
        {cards.map((card) => (
          <div key={card.id} className={`card ${card.className}`}>
            <div className="card-icon">{card.icon}</div>
            <h2>{card.title}</h2>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardLayout;