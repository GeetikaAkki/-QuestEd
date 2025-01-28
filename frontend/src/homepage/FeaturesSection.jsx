import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '24px' }}>
    <div style={{ width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {icon}
    </div>
    <div>
      <h3 style={{ color: 'white', fontWeight: '600', marginBottom: '8px' }}>{title}</h3>
      <p style={{ color: '#e0e0e0', fontSize: '0.875rem', lineHeight: '1.6' }}>{description}</p>
    </div>
  </div>
);

const FeaturesSection = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '32px',
    backgroundColor: '#4D2C5E',
    padding: '40px',
    borderRadius: '16px',
    margin: '32px auto',
    maxWidth: '1200px',
  }}>
    <FeatureCard
      icon={<img src="/api/placeholder/48/48" alt="Computer icon" />}
      title="Explore Tailored Learning"
      description="Access courses customized to your abilities, helping you learn effectively and efficiently"
    />
    <FeatureCard
      icon={<img src="/api/placeholder/48/48" alt="Target icon" />}
      title="Achieve Your Goals"
      description="Prepare for a successful career with resources and support tailored to your journey"
    />
    <FeatureCard
      icon={<img src="/api/placeholder/48/48" alt="Trophy icon" />}
      title="Earn Recognition"
      description="Complete courses and quizzes to earn badges and certificates, showcasing your achievements"
    />
  </div>
);

export default FeaturesSection;
