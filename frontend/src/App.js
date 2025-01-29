import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./homepage/HomePage"; 
import AuthForm from './components/StudSign';
import LogIn from './components/Login';
import Student from "./dashboard/student";
import ComputerScience from "./dashboard/ComputerScience";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-in" element={<AuthForm />} />
        <Route path="/student" element={<Student />} />
        <Route path="/computer-science" element={<ComputerScience />} />
      </Routes>
    </Router>
  );
};

export default App;
