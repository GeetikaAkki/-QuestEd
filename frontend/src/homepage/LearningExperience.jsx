import React from 'react';
import image from '../images/image.png';
import heart from '../images/heart.png'
import puzzle from '../images/puzzle.png'

const FeatureItem = ({ icon, title, description }) => (
  <div style={{
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '32px',
  }}>
    <div style={{
      width: '48px',
      height: '48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#4D2C5E',
      opacity: '0.1',
      borderRadius: '12px',
    }}>
      {icon}
    </div>
    <div>
      <h3 style={{
        fontWeight: '600',
        marginBottom: '8px',
        color: '#2D3748',
      }}>
        {title}
      </h3>
      <p style={{
        color: '#4A5568',
        lineHeight: '1.75',
      }}>
        {description}
      </p>
    </div>
  </div>
);

const LearningExperience = () => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '64px',
    padding: '64px 32px',
  }}>
    <div style={{
      width: '50%',
    }}>
      <img 
      src={image} 
      alt="Student studying" 
      style={{ width: '60%', marginLeft: '5', marginRight: '4' }} 
    />
    </div>
    <div style={{
      flex: 1,
    }}>
      <h2 style={{
        fontSize: '2.25rem',
        fontWeight: 'bold',
        marginBottom: '32px',
      }}>
        Simplified <span style={{ color: '#FF7426' }}>Learning</span><br />
        Experience
      </h2>
      <div >
      <FeatureItem
  icon={<img src={heart} alt="Access icon" style={{ width: '50px', height: '50px', filter: 'brightness(0) saturate(100%) invert(27%) sepia(98%) saturate(5613%) hue-rotate(324deg) brightness(91%) contrast(107%)' }} />}
  title="Easily Accessible"
  description="QuestEd makes learning seamless and personalized, adapting to each student's pace and capability."
/>
        <FeatureItem
          icon={<img src={puzzle} alt="Access icon" style={{ width: '50px', height: '50px', filter: 'brightness(0) saturate(100%) invert(27%) sepia(98%) saturate(5613%) hue-rotate(324deg) brightness(91%) contrast(107%)' }} />}
          title="Engaging and Interactive"
          description="Gamified elements and collaborative features keep students motivated."
        />
      </div>
    </div>
  </div>
);

export default LearningExperience;
