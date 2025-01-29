import React from 'react';
import Sidebar from './Sidebar';
import DashboardGrid from './DashboardGrid';
import './styles/DashboardLayout.css';

const DashboardLayout = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar activeRoute="Dashboard" />
      <DashboardGrid />
    </div>
  );
};

export default DashboardLayout;