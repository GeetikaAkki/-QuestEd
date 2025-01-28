import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./homepage/HomePage"; 
import AuthForm from './components/StudSign';
import LogIn from './components/Login';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/sign-in" element={<AuthForm />} />
      </Routes>
    </Router>
  );
};

export default App;
