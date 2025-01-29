import React from 'react';
import './styles/Sidebar.css';

const Sidebar = ({ activeRoute = 'Dashboard' }) => {
  const navigationItems = [
    { id: 1, title: 'Dashboard', route: 'dashboard' },
    { id: 2, title: 'Course Page', route: 'course' },
    { id: 3, title: 'Wellbeing', route: 'wellbeing' },
    { id: 4, title: 'Daily Quizs', route: 'quizzes' },
    { id: 5, title: 'Feedback', route: 'feedback' }
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <span className="book-icon">📚</span>
        QuestEd
      </div>
      <nav className="menu">
        {navigationItems.map(item => (
          <div 
            key={item.id} 
            className={`menu-item ${item.title === activeRoute ? 'selected' : ''}`}
            onClick={() => console.log(`Navigating to ${item.route}`)}
          >
            {item.title}
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;