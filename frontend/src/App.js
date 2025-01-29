import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./dashboard/Sidebar";
import HomePage from "./homepage/HomePage";
import LogIn from './components/Login';
import AuthForm from './components/StudSign';
import Dashboard from "./dashboard/Dashboard";
import ComputerScience from "./dashboard/ComputerScience";
import CourseDropdown from "./dashboard/CourseDropdown";
import TeacherPortal from "./components/TeacherPortal";
import Feedback from "./components/Feedback";

const Layout = ({ children }) => {
  const location = useLocation();
  const showSidebar = ["/dashboard", "/computer-science", "/course","/quiz"].includes(location.pathname);

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {showSidebar && <Sidebar />}
      <div style={{ flex: 1, marginLeft: showSidebar ? "0" : "0", height: "100vh", overflowY: "auto" }}>
        {children}
      </div>
    </div>
  );
};



const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/log-in" element={<LogIn />} />
          <Route path="/sign-in" element={<AuthForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/computer-science" element={<ComputerScience />} />
          <Route path="/course" element={<CourseDropdown />} />
          <Route path="/teacher-portal" element={<TeacherPortal/>}/>
            <Route path="/feedback" element={<Feedback/>}/>
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
