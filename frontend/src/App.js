import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homepage/HomePage";
import LogIn from './components/Login';
import AuthForm from './components/StudSign';
import Student from "./dashboard/student";
import ComputerScience from "./dashboard/ComputerScience";
import CourseDropdown from "./dashboard/CourseDropdown"; // Import the CourseDropdown component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-in" element={<AuthForm />} />
        <Route path="/student" element={<Student />} />
        <Route path="/computer-science" element={<ComputerScience />} />
        <Route path="/course" element={<CourseDropdown />} /> {/* Add route for /course */}
      </Routes>
    </Router>
  );
};

export default App;
