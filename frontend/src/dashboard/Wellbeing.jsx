import React from 'react';
import './Wellbeing.css';

const Background = () => (
  <div className="background-container">
    {[...Array(18)].map((_, i) => (
      <div key={i} className={`shape shape-${i + 1}`}></div>
    ))}
  </div>
);

const Wellbeing = () => {
  return (
    <div className="wellbeing-container">
      <Background />
      <div className="content-wrapper">
        <div className="large-box">
          <h2 className="title">Wellbeing</h2>
          {/* Content for large box goes here */}
          <p className="placeholder-text">Main content area</p>
        </div>
        
        <div className="small-box">
          {/* Content for small box goes here */}
          <p className="placeholder-text">Secondary content area</p>
        </div>
      </div>
    </div>
  );
};

export default Wellbeing;