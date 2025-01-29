import React from "react";
import DashboardLayout from "./Dashboard";
import './styles/DashboardLayout.css';
import './styles/Sidebar.css';
import Sidebar from "./Sidebar"; // Sidebar is now part of the Student component

const Student = () => {
  return (
    <div className="student-layout">
      <div className="content">
        <DashboardLayout />
      </div>
      <Sidebar activeRoute="/student" />
    </div>
  );
};

export default Student;
