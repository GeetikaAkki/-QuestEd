import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Sidebar.css';

const Sidebar = ({ activeRoute = '/dashboard' }) => {
  const navigationItems = [
    { id: 1, title: 'Dashboard', route: '/student' },
    { id: 2, title: 'Course Page', route: '/course' },
    { id: 3, title: 'Wellbeing', route: '/wellbeing' },
    { id: 4, title: 'Daily Quizzes', route: '/quizzes' },
    { id: 5, title: 'Feedback', route: '/feedback' }
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <span className="book-icon">📚</span>
        QuestEd
      </div>
      <nav className="menu">
        {navigationItems.map(item => (
          <Link 
            key={item.id} 
            to={item.route}
            className={`menu-item ${item.route === activeRoute ? 'selected' : ''}`}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
