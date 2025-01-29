import React from "react";
import Sidebar from "./Sidebar";
import DashboardLayout from "./Dashboard";
import './styles/DashboardLayout.css';
import './styles/Sidebar.css';

const Student = () => {
  return (
    <div className="student-layout">
      <Sidebar activeRoute="/student" />
      <div className="content">
        <DashboardLayout />
      </div>
    </div>
  );
};

export default Student;
