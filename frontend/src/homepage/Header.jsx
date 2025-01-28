import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 32px',
      backgroundColor: 'white',
      width: '100%',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <span style={{
          color: '#4D2C5E',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        }}>
          📚 QuestEd
        </span>
      </div>
      <nav style={{
        display: 'flex',
        alignItems: 'center',
        gap: '32px',
      }}>
        <a href="/" style={{
          color: '#4D4D4D',
          textDecoration: 'none',
          fontSize: '1rem',
          transition: 'color 0.3s',
        }} onMouseEnter={(e) => e.target.style.color = '#4D2C5E'} onMouseLeave={(e) => e.target.style.color = '#4D4D4D'}>
          Home
        </a>
        <a href="#" style={{
          color: '#4D4D4D',
          textDecoration: 'none',
          fontSize: '1rem',
          transition: 'color 0.3s',
        }} onMouseEnter={(e) => e.target.style.color = '#4D2C5E'} onMouseLeave={(e) => e.target.style.color = '#4D4D4D'}>
          About us
        </a>
        <a href="#" style={{
          color: '#4D4D4D',
          textDecoration: 'none',
          fontSize: '1rem',
          transition: 'color 0.3s',
        }} onMouseEnter={(e) => e.target.style.color = '#4D2C5E'} onMouseLeave={(e) => e.target.style.color = '#4D4D4D'}>
          Courses
        </a>
        <a href="#" style={{
          color: '#4D4D4D',
          textDecoration: 'none',
          fontSize: '1rem',
          transition: 'color 0.3s',
        }} onMouseEnter={(e) => e.target.style.color = '#4D2C5E'} onMouseLeave={(e) => e.target.style.color = '#4D4D4D'}>
          Contact us
        </a>
        <button
          style={{
            backgroundColor: '#4D2C5E',
            color: 'white',
            padding: '8px 24px',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#3D2249'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#4D2C5E'}
          onClick={() => navigate("sign-in")}
        >
          Sign In
        </button>
      </nav>
    </header>
  );
};

export default Header;
