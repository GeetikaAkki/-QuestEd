import React from 'react';
import './styles/DashboardGrid.css';

const DashboardGrid = () => {
  const cards = [
    { id: 1, className: 'blue' },
    { id: 2, className: 'green' },
    { id: 3, className: 'pink' },
    { id: 4, className: 'red' }
  ];

  return (
    <div className="dashboard-grid">
      {cards.map(card => (
        <div key={card.id} className={`card ${card.className}`}></div>
      ))}
    </div>
  );
};

export default DashboardGrid;