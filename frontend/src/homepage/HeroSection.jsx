import React from 'react';
import { Search } from 'lucide-react';
import home from '../images/home.png';

const HeroSection = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '48px 32px',
    position: 'relative',
  }}>
    <div style={{
      maxWidth: '36rem',
      position: 'relative',
      zIndex: 10,
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '24px',
        lineHeight: '1.25',
      }}>
        The <span style={{ color: '#FF7426' }}>Smart Choice</span><br />
        for Future <span style={{ color: '#FF7426' }}>Engineers</span>
      </h1>
      <p style={{
        color: '#4A4A4A',
        marginBottom: '32px',
        fontSize: '1.125rem',
      }}>
        QuestEd is an innovative ed-tech platform designed for engineering
        students, offering personalized learning paths and resources tailored
        to individual abilities. We simplify learning and empower students
        and teachers to achieve their goals.
      </p>
      <div style={{
        display: 'flex',
        gap: '16px',
      }}>
        <div style={{
          position: 'relative',
          flex: 1,
        }}>
          <input
            type="text"
            placeholder="Search for courses..."
            style={{
              width: '100%',
              padding: '16px 48px 16px 16px',
              borderRadius: '8px',
              border: '1px solid #D1D5DB',
              backgroundColor: 'white',
            }}
          />
          <Search style={{
            position: 'absolute',
            right: '16px',
            top: '16px',
            color: '#A0AEC0',
          }} />
        </div>
        <button style={{
          backgroundColor: '#4D2C5E',
          color: 'white',
          padding: '16px 32px',
          borderRadius: '8px',
          border: 'none',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }} onMouseEnter={(e) => e.target.style.backgroundColor = '#3D2249'} onMouseLeave={(e) => e.target.style.backgroundColor = '#4D2C5E'}>
          Continue
        </button>
      </div>
    </div>
    <div style={{
      width: '50%',
      paddingLeft: '48px',
      position: 'relative',
      zIndex: 10,
    }}>
      <img src={home} alt="Online learning illustration" style={{
        width: '100%',
      }} />
    </div>
  </div>
);

export default HeroSection;
