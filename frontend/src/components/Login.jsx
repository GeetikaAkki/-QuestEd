import React, { useState } from 'react';
import { FaGoogle, FaApple, FaFacebook } from 'react-icons/fa';
import Background from './Background';
import './StudSign.css';
import './Background.css';

const blinkKeyframes = `@keyframes blink {
    0% { opacity: 0; }
    50% { opacity: 1; }
    100% { opacity: 0; }
}`;

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

const toggleButtonStyle = (active) => ({
  width: '50%',
  padding: '8px',
  borderRadius: '50px',
  border: 'none',
  backgroundColor: active ? '#FF6B2B' : 'transparent',
  color: active ? 'white' : '#666',
  cursor: 'pointer',
});
const buttonStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  border: 'none',
  backgroundColor: '#4B0082',
  color: 'white',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '16px',
};

const socialButtonStyle = {
  width: '48px',
  height: '48px',
  borderRadius: '50%',
  border: 'none',
  backgroundColor: 'white',
  color: '#4B0082',
  fontSize: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
};

const LogIn = () => {
  const [userType, setUserType] = useState('Student');

  const handleSubmit = () => {
    if (userType === 'Teacher') {
      window.location.href = './teacher-portal';
    } else {
      window.location.href = './dashboard';
    }
  };

  return (
    <div>
      <Background />
      <div style={{ backgroundColor: '#FDF8EE', minHeight: '100vh', padding: '20px', position: 'relative' }}>
        <style>{blinkKeyframes}</style>

        <nav style={{ display: 'flex', alignItems: 'center', marginBottom: '40px' }}>
          <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#4B0082' }}>📚 QuestEd</div>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: '32px' }}>
            <a href="./" style={{ textDecoration: 'none', color: 'black' }}>Home</a>
            <a href="#" style={{ textDecoration: 'none', color: 'black' }}>About us</a>
            <a href="./course" style={{ textDecoration: 'none', color: 'black' }}>Courses</a>
            <a href="#" style={{ textDecoration: 'none', color: 'black' }}>Contact us</a>
          </div>
        </nav>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', zIndex: '0' }}>
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

          <div style={{ width: '400px', backgroundColor: '#FF6B2B', borderRadius: '24px', padding: '32px', position: 'relative', zIndex: '1' }}>
            <div style={{ display: 'flex', backgroundColor: 'white', borderRadius: '50px', padding: '4px', marginBottom: '24px' }}>
              <Button onClick={() => setUserType('Student')} style={toggleButtonStyle(userType === 'Student')}>Student</Button>
              <Button onClick={() => setUserType('Teacher')} style={toggleButtonStyle(userType === 'Teacher')}>Teacher</Button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Input type="text" placeholder="ID" />
              <Input type="password" placeholder="Password" />
              <Button onClick={handleSubmit}>Log In</Button>

              <div style={{ textAlign: 'center', color: 'white' }}>
                <p style={{ margin: '16px 0' }}>Or continue with</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
                  <SocialButton><FaGoogle /></SocialButton>
                  <SocialButton><FaApple /></SocialButton>
                  <SocialButton><FaFacebook /></SocialButton>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LogIn;