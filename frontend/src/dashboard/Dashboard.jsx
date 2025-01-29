import React from 'react';
import './styles/DashboardLayout.css';
import './styles/DashboardGrid.css';

const DashboardLayout = () => {
  const cards = [
    { id: 1, className: 'blue' },
    { id: 2, className: 'green' },
    { id: 3, className: 'pink' },
    { id: 4, className: 'red' },
  ];

  return (
    <div className="dashboard-layout">
      <Sidebar activeRoute="Dashboard" />
      <div className="dashboard-grid">
        {cards.map((card) => (
          <div key={card.id} className={`card ${card.className}`}></div>
        ))}
      </div>
    </div>
  );
};

const Sidebar = ({ activeRoute }) => {
  return (
    <div className="sidebar">
      <h2>Sidebar</h2>
      <p>Active Route: {activeRoute}</p>
    </div>
  );
};

export default DashboardLayout;
