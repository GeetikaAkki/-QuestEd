import React from 'react';
import './styles/DashboardLayout.css';
import './styles/DashboardGrid.css';

const FloatingIcon = ({ icon }) => (
  <span className="floating-icon">{icon}</span>
);

const Card = ({ className, icon, title, description }) => (
  <div className={`card ${className}`} style={{ padding: '24px', borderRadius: '16px', backgroundColor: className }}>
    <div style={{ fontSize: '32px', marginBottom: '16px' }}>{icon}</div>
    <h2 style={{ fontSize: '24px', color: '#333', marginBottom: '8px' }}>{title}</h2>
    <p style={{ color: '#666' }}>{description}</p>
  </div>
);

const DashboardLayout = () => {
  const cards = [
    { 
      id: 1, 
      className: '#90caf9', 
      title: 'Course Page',
      description: 'Access your course materials, lectures, and assignments. Track your progress and view upcoming deadlines.',
      icon: '📚'
    },
    { 
      id: 2, 
      className: '#a5d6a7', 
      title: 'Well Being',
      description: 'Monitor your mental health, access wellness resources, and schedule counseling sessions.',
      icon: '🌱'
    },
    { 
      id: 3, 
      className: '#f48fb1', 
      title: 'Daily Quizzes',
      description: 'Practice daily assessments to reinforce your learning. View your quiz history and performance analytics.',
      icon: '✍'
    },
    { 
      id: 4, 
      className: '#ef9a9a', 
      title: 'Feedback',
      description: 'Submit course feedback, view instructor comments, and participate in peer reviews.',
      icon: '💭'
    },
  ];

  const floatingIcons = ['📚', '✏', '🎓', '📝', '🔍', '📊', '💡', '🎯', '📓', '🖥'];

  return (
    <div style={{ backgroundColor: '#FDF8EE', minHeight: '100vh', padding: '40px', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 0, pointerEvents: 'none' }}>
        {floatingIcons.map((icon, index) => (
          <FloatingIcon key={index} icon={icon} />
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', zIndex: 1, position: 'relative' }}>
        {cards.map((card) => (
          <Card 
            key={card.id} 
            className={card.className} 
            icon={card.icon} 
            title={card.title} 
            description={card.description} 
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardLayout;
