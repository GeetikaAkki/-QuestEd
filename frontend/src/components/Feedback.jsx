import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    overall: 0,
    easeOfUse: 0,
    features: 0,
    support: 0,
    recommend: 0,
    comments: '',
  });

  const questions = [
    { id: 'overall', label: 'How satisfied are you with our service overall?' },
    { id: 'easeOfUse', label: 'How easy was it to use our product?' },
    { id: 'features', label: 'How well did our features meet your needs?' },
    { id: 'support', label: 'How would you rate our customer support?' },
    { id: 'recommend', label: 'How likely are you to recommend us to others?' },
  ];

  const handleSliderChange = (id, value) => {
    setFeedback((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    console.log('Feedback submitted:', feedback);
    alert('Thank you for your feedback!');
  };

  const getRatingColor = (value) => {
    if (value <= 3) return '#EF4444';
    if (value <= 7) return '#FCD34D';
    return '#10B981';
  };

  return (
    <div style={containerStyle}>
      <div style={formWrapperStyle}>
        <h1 style={headerStyle}>Student Feedback</h1>

        <div style={gridStyle}>
          {questions.map(({ id, label }) => (
            <div key={id} style={cardStyle}>
              <label style={labelStyle}>{label}</label>
              <div style={{ position: 'relative' }}>
                <input
                  type="range"
                  min="0"
                  max="10"
                  value={feedback[id]}
                  onChange={(e) => handleSliderChange(id, parseInt(e.target.value))}
                  style={{ ...sliderStyle, background: getRatingColor(feedback[id]) }}
                />
                <div style={sliderMetaStyle}>
                  <span>{feedback[id] <= 3 ? '☹️' : feedback[id] <= 7 ? '😊' : '🤩'}</span>
                  <div style={{ ...ratingBadgeStyle, backgroundColor: `${getRatingColor(feedback[id])}20 `}}>
                    {feedback[id]}/10
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '24px' }}>
          <textarea
            value={feedback.comments}
            onChange={(e) => setFeedback((prev) => ({ ...prev, comments: e.target.value }))}
            style={textareaStyle}
            placeholder="Please share any additional feedback..."
          />
        </div>

        <div style={{ marginTop: '32px' }}>
          <button onClick={handleSubmit} style={buttonStyle}>Submit Feedback</button>
        </div>
      </div>
    </div>
  );
};

const containerStyle = {
  minHeight: '100vh',
  background: '#472758', 
  padding: '32px',
};

const formWrapperStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  background: '#FF7426', 
  borderRadius: '16px',
  padding: '32px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
  fontSize: '32px',
  fontWeight: 'bold',
  color: '#4B0082',
  textAlign: 'center',
  marginBottom: '24px',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '16px',
};

const cardStyle = {
  padding: '16px',
  background: '#f9fafb',
  borderRadius: '12px',
  border: '1px solid #e5e7eb',
};

const labelStyle = {
  display: 'block',
  fontSize: '16px',
  fontWeight: '600',
  color: '#4B5563',
  marginBottom: '8px',
};

const sliderStyle = {
  width: '100%',
  cursor: 'pointer',
  margin: '16px 0',
};

const sliderMetaStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '8px',
};

const ratingBadgeStyle = {
  padding: '4px 8px',
  borderRadius: '8px',
  color: '#333',
  fontWeight: 'bold',
};

const textareaStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  fontSize: '16px',
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#4B0082',
  color: '#ffffff',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold',
};

export default Feedback;