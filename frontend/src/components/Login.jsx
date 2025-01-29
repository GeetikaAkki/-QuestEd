import React, { useState } from 'react';
import { Pencil, Notebook } from 'lucide-react';
import './StudSign.css';
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa';
import Background from './Background';
import './Background.css'


const blinkKeyframes = `
  @keyframes blink {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
  }
`;

const Button = ({ children, onClick, style }) => (
  <button onClick={onClick} style={{ ...buttonStyle, ...style }}>
    {children}
  </button>
);

const Input = ({ type, placeholder, style }) => (
  <input type={type} placeholder={placeholder} style={{ ...inputStyle, ...style }} />
);

const SocialButton = ({ children }) => (
  <button style={socialButtonStyle}>{children}</button>
);

const Icon = ({ position, index }) => (
  <div
    style={{
      position: 'absolute',
      left: position.left,
      top: position.top,
      bottom: position.bottom,
      animation: 'blink 3s infinite ease-in-out',
      zIndex: 0,
      pointerEvents: 'none',
    }}
  >
    {index % 2 === 0 ? <Notebook size={48} color="black" /> : <Pencil size={48} color="black" />}
  </div>
);

const LogIn = () => {
  const [userType, setUserType] = useState('Student');

  const iconPositions = [
    { left: '10%', top: '15%' },
    { left: '25%', top: '35%' },
    { left: '20%', top: '55%' },
    { left: '40%', top: '45%' },
    { left: '50%', top: '60%' },
    { left: '20%', top: '15%' },
    { left: '5%', top: '10%' },
    { left: '22%', bottom: '40%' },
    { left: '35%', bottom: '15%' },
    { right: '30%', bottom: '10%' },
    { right: '44%', bottom: '35%' },
  ];

  return (
    <div>
      <Background/>
    <div style={{ backgroundColor: '#FDF8EE', minHeight: '100vh', padding: '20px', position: 'relative' }}>
      <style>{blinkKeyframes}</style>

      <nav style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082' }}>📚 QuestEd</div>
        <div style={{ marginLeft: 'auto', display: 'flex', gap: '32px' }}>
          <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Home</a>
          <a href="#" style={{ textDecoration: 'none', color: 'black' }}>About us</a>
          <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Courses</a>
          <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Contact us</a>
        </div>
      </nav>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: '1' }}>
        <div style={{ width: '50%' }}>
          <h1 style={{ fontSize: '55px', fontWeight: 'bold', color: '#4B0082', marginBottom: '20px' }}>
            Welcome Back to QuestEd
          </h1>
          {userType === 'Student' ? (
            <div>
              <div style={{ fontSize: '43px', fontWeight: 'bold', marginBottom: '10px' }}>
                <span style={{ color: '#FF6B2B' }}>Empower</span> Your<br />
                Learning <span style={{ color: '#FF6B2B' }}>Journey</span>
              </div>
              <p style={{ color: '#666' }}>
                Log in to access personalized courses,<br />
                track progress, and achieve your academic goals.
              </p>
            </div>
          ) : (
            <div>
              <h2 style={{ fontSize: '43px', fontWeight: 'bold', color: 'black' }}>
                Inspire <span style={{ color: '#FF6B2B' }}>and</span> Educate the <span style={{ color: '#FF6B2B' }}>Next Generation</span>
              </h2>
              <p style={{ color: '#666' }}>
                Log in to share resources, upload content,<br />
                and empower students on their learning journey.
              </p>
            </div>
          )}
        </div>

        <div style={{ width: '400px', backgroundColor: '#FF6B2B', borderRadius: '24px', padding: '32px', position: 'relative', zIndex: '2' }}>
          <div style={{ display: 'flex', backgroundColor: 'white', borderRadius: '50px', padding: '4px', marginBottom: '24px' }}>
            <Button onClick={() => setUserType('Student')} style={toggleButtonStyle(userType === 'Student')}>Student</Button>
            <Button onClick={() => setUserType('Teacher')} style={toggleButtonStyle(userType === 'Teacher')}>Teacher</Button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <Input type="text" placeholder="ID" />
            <Input type="password" placeholder="Password" />
            <Button>Log in</Button>

            <div style={{ textAlign: 'center', color: 'white' }}>
              <p style={{ margin: '16px 0' }}>Or continue with</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                <SocialButton>G</SocialButton>
                <SocialButton>🍎</SocialButton>
                <SocialButton>f</SocialButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      {iconPositions.map((pos, index) => (
        <Icon key={index} position={pos} index={index} />
      ))}
    </div>
    </div>
  );
};

const inputStyle = { width: '100%', padding: '12px', borderRadius: '8px', border: 'none' };
const buttonStyle = { width: '100%', padding: '12px', borderRadius: '8px', border: 'none', backgroundColor: '#4B0082', color: 'white', cursor: 'pointer' };
const socialButtonStyle = { width: '48px', height: '48px', backgroundColor: 'white', borderRadius: '8px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' };
const toggleButtonStyle = (active) => ({ width: '50%', padding: '8px', borderRadius: '50px', border: 'none', backgroundColor: active ? '#FF6B2B' : 'transparent', color: active ? 'white' : '#666', cursor: 'pointer' });

export default LogIn;