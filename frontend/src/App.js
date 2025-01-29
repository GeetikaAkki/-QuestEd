import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./dashboard/Sidebar"; // Sidebar component
import HomePage from "./homepage/HomePage"; // Home page content
import LogIn from './components/Login'; // LogIn page content
import AuthForm from './components/StudSign'; // Sign-in page content
import Dashboard from "./dashboard/Dashboard"; // Dashboard content
import ComputerScience from "./dashboard/ComputerScience"; // Computer Science content
import CourseDropdown from "./dashboard/CourseDropdown"; // Courses dropdown content

const App = () => {
  return (
    <Router>
      <div style={{ display: "flex", height: "100vh" }}>
        {/* Sidebar is outside the route components */}
        <Sidebar activeRoute="/dashboard" />

        <div style={{ flex: 1, marginLeft: "256px", height: "100vh", overflowY: "auto" }}>
          {/* Content will change based on route */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/sign-in" element={<AuthForm />} />
            <Route path="/dashboard" element={<Dashboard />} /> {/* Directly rendering Dashboard */}
            <Route path="/computer-science" element={<ComputerScience />} />
            <Route path="/course" element={<CourseDropdown />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
