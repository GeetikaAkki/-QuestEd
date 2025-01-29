import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CourseDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Hook to navigate between pages

  const courses = [
    { id: "cs", name: "Computer Science", path: "/computer-science" },
    { id: "ece", name: "Electronics & Communication", path: "/electronics" },
    { id: "extra", name: "Extra Courses", path: "/extra-courses" },
  ];

  return (
    <div className="course-dropdown-layout" style={{ padding: "20px" }}>
      <div style={{ position: "relative" }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "8px 16px",
            backgroundColor: "white",
            borderRadius: "8px",
            border: "1px solid #ccc",
            cursor: "pointer",
            transition: "border 0.3s",
          }}
          onMouseEnter={(e) => (e.target.style.border = "1px solid #4D2C5E")}
          onMouseLeave={(e) => (e.target.style.border = "1px solid #ccc")}
        >
          Categories
          <ChevronDown
            size={20}
            style={{
              transition: "transform 0.3s",
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        </button>

        {isOpen && (
          <div
            style={{
              position: "absolute",
              zIndex: 10,
              width: "200px",
              marginTop: "8px",
              backgroundColor: "white",
              borderRadius: "8px",
              border: "1px solid #ccc",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            {courses.map((course) => (
              <button
                key={course.id}
                onClick={() => {
                  navigate(course.path); // Navigate to the corresponding page
                  setIsOpen(false);
                }}
                style={{
                  width: "100%",
                  padding: "10px 16px",
                  textAlign: "left",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) => (e.target.style.backgroundColor = "#FDF8EE")}
                onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
              >
                {course.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseDropdown;
