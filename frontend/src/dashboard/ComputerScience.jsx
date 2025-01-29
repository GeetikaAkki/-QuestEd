import React from "react";
import { BookOpen, Code, Database, Cloud, Brain, Globe } from "lucide-react";

const ComputerScience = () => {
  const courses = [
    { title: "C Programming", description: "Learn fundamentals of C programming", icon: <Code size={24} />, progress: "60%" },
    { title: "C++ Programming", description: "Object-oriented programming with C++", icon: <Code size={24} />, progress: "45%" },
    { title: "Python", description: "Modern programming with Python", icon: <Code size={24} />, progress: "75%" },
    { title: "Data Structures", description: "Advanced data structures implementation", icon: <Database size={24} />, progress: "30%" },
    { title: "Algorithms", description: "Problem-solving and algorithm design", icon: <Brain size={24} />, progress: "50%" },
    { title: "Web Development", description: "Full-stack web development", icon: <Globe size={24} />, progress: "25%" },
    { title: "Database Systems", description: "Database management and SQL", icon: <Database size={24} />, progress: "40%" },
    { title: "Cloud Computing", description: "Cloud services and deployment", icon: <Cloud size={24} />, progress: "35%" },
    { title: "Software Engineering", description: "Software development lifecycle", icon: <BookOpen size={24} />, progress: "55%" }
  ];

  return (
    <div style={{ padding: "32px" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}>Computer Science Courses</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "24px" }}>
        {courses.map((course, index) => (
          <div 
            key={index} 
            style={{ 
              backgroundColor: "white", 
              padding: "24px", 
              borderRadius: "12px", 
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "box-shadow 0.3s", 
              cursor: "pointer" 
            }}
            onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)"}
            onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.1)"}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "16px" }}>
              <div style={{ 
                width: "48px", 
                height: "48px", 
                backgroundColor: "#4D2C5E", 
                borderRadius: "8px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center"
              }}>
                {course.icon}
              </div>
            </div>
            <h3 style={{ fontWeight: "600", marginBottom: "8px" }}>{course.title}</h3>
            <p style={{ color: "#757575", fontSize: "14px", marginBottom: "16px" }}>{course.description}</p>
            <div style={{ width: "100%", backgroundColor: "#E0E0E0", borderRadius: "4px", height: "8px" }}>
              <div 
                style={{ 
                  backgroundColor: "#4D2C5E", 
                  height: "8px", 
                  borderRadius: "4px", 
                  transition: "width 0.5s", 
                  width: course.progress
                }}
              ></div>
            </div>
            <p style={{ fontSize: "14px", color: "#666", marginTop: "8px" }}>{course.progress} Complete</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComputerScience;
