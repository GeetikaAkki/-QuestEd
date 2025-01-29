import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Sidebar.css';

const SidebarItem = ({ title, route, isActive }) => (
  <Link 
    to={route}
    className={`menu-item ${isActive ? 'selected' : ''}`}
    style={{
      display: 'block',
      padding: '12px 16px',
      textDecoration: 'none',
      color: isActive ? '#FF6B2B' : '#666',
      backgroundColor: isActive ? '#FDF8EE' : 'transparent',
      borderRadius: '8px',
      marginBottom: '8px',
    }}
  >
    {title}
  </Link>
);

const Sidebar = ({ activeRoute = '/dashboard' }) => {
  const navigationItems = [
    { id: 1, title: 'Dashboard', route: '/dashboard' },
    { id: 2, title: 'Course Page', route: '/course' },
    { id: 3, title: 'Wellbeing', route: '/wellbeing' },
    { id: 4, title: 'Daily Quizzes', route: '/quiz' },
    { id: 5, title: 'Feedback', route: '/feedback' }
  ];

  return (
    <div style={{ backgroundColor: '#FF6B2B', padding: '24px', minHeight: '100vh', width: '240px', borderRadius: '16px' }}>
      <div style={{ fontSize: '24px', fontWeight: 'bold', color: 'white', marginBottom: '24px', display: 'flex', alignItems: 'center' }}>
        <span role="img" aria-label="book" style={{ marginRight: '8px' }}>📚</span>
        QuestEd
      </div>

      <nav>
        {navigationItems.map(item => (
          <SidebarItem 
            key={item.id} 
            title={item.title} 
            route={item.route} 
            isActive={item.route === activeRoute} 
          />
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;