import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Book, Play } from 'lucide-react';
import CustomDialog from '../components/ui/CustomDialog';

const SectionToggle = ({ title, isActive, onClick }) => (
  <button 
    onClick={onClick} 
    style={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px',
      backgroundColor: isActive ? '#F5F3FF' : '#FFFFFF',
      borderRadius: '8px',
      cursor: 'pointer',
      border: '1px solid #E5E7EB',
      transition: 'all 0.2s ease',
      marginBottom: '8px'
    }}
  >
    <span style={{ 
      fontWeight: 500,
      color: isActive ? '#7C3AED' : '#1F2937'
    }}>{title}</span>
    {isActive ? 
      <ChevronUp style={{ color: '#7C3AED' }} /> : 
      <ChevronDown style={{ color: '#6B7280' }} />
    }
  </button>
);

const VideoButton = ({ video, onSelect }) => (
  <button 
    onClick={() => onSelect(video.url)} 
    style={{
      width: '100%',
      textAlign: 'left',
      padding: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      borderRadius: '6px',
      cursor: 'pointer',
      border: 'none',
      backgroundColor: 'transparent',
      transition: 'all 0.2s ease',
      color: '#4B5563',
      margin: '4px 0'
    }}
    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F5F3FF'}
    onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
  >
    <Play size={16} style={{ color: '#7C3AED' }} /> 
    <span style={{ fontSize: '0.9rem' }}>{video.title}</span>
  </button>
);

const PdfButton = ({ title, pdf, onSelect }) => (
  <button 
    onClick={() => onSelect(pdf)} 
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '16px',
      width: '100%',
      border: '1px solid #E5E7EB',
      borderRadius: '8px',
      cursor: 'pointer',
      backgroundColor: '#FFFFFF',
      transition: 'all 0.2s ease',
      marginBottom: '12px'
    }}
    onMouseEnter={e => {
      e.currentTarget.style.backgroundColor = '#F5F3FF';
      e.currentTarget.style.borderColor = '#7C3AED';
    }}
    onMouseLeave={e => {
      e.currentTarget.style.backgroundColor = '#FFFFFF';
      e.currentTarget.style.borderColor = '#E5E7EB';
    }}
  >
    <Book size={20} style={{ color: '#7C3AED' }} /> 
    <span style={{ color: '#4B5563' }}>{title} Guide</span>
  </button>
);

const CLearningPlatform = () => {
  const [selectedVideo, setSelectedVideo] = useState('');
  const [selectedPdf, setSelectedPdf] = useState('');
  const [activeSection, setActiveSection] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [outputValue, setOutputValue] = useState('');
  const [learningOpen, setLearningOpen] = useState(false);

  const topics = [
    { 
      title: 'Pointers', 
      videos: [
        { id: 'video1', title: 'Introduction to Pointers', url: 'VIDEO_URL_1' },
        { id: 'video2', title: 'Advanced Pointer Concepts', url: 'VIDEO_URL_2' },
        { id: 'video3', title: 'Memory Management with Pointers', url: 'VIDEO_URL_3' }
      ] 
    },
    { 
      title: 'Strings', 
      videos: [
        { id: 'video4', title: 'String Manipulation', url: 'VIDEO_URL_4' },
        { id: 'video5', title: 'String Functions', url: 'VIDEO_URL_5' }
      ] 
    },
    { 
      title: 'Functions', 
      videos: [
        { id: 'video6', title: 'Function Basics', url: 'VIDEO_URL_6' },
        { id: 'video7', title: 'Advanced Functions', url: 'VIDEO_URL_7' }
      ] 
    }
  ];

  const pdfMaterials = [
    { title: 'C Basics', pdf: 'c_basics.pdf' },
    { title: 'Advanced C', pdf: 'advanced_c.pdf' },
    { title: 'C Interview Guide', pdf: 'c_interview.pdf' }
  ];

  const handleQuestionSubmit = async () => {
    if (inputValue.trim()) {
      try {
        const response = await fetch('http://localhost:8000/ask_question/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: inputValue }),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          setOutputValue(data.answer);
        } else {
          setOutputValue('Error: ' + data.detail);
        }
      } catch (error) {
        setOutputValue('Error: Unable to reach the server.');
      }
    } else {
      setOutputValue('Please enter a question.');
    }
  };
  

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#F9FAFB',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <header style={{ 
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #E5E7EB',
        padding: '24px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <h1 style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: '#7C3AED',
            marginBottom: '8px'
          }}>Welcome to C Programming</h1>
          <p style={{
            color: '#6B7280',
            fontSize: '1.1rem'
          }}>Master the fundamentals of C programming with interactive lessons</p>
        </div>
      </header>

      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '32px 24px',
        display: 'grid',
        gap: '32px'
      }}>
        <section style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          padding: '24px'
        }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 600, 
            marginBottom: '20px', 
            color: '#7C3AED'
          }}>Video Tutorials</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {topics.map((topic, index) => (
              <div key={index}>
                <SectionToggle 
                  title={topic.title} 
                  isActive={activeSection === topic.title} 
                  onClick={() => setActiveSection(activeSection === topic.title ? null : topic.title)} 
                />
                {activeSection === topic.title && (
                  <div style={{ 
                    padding: '8px 16px',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '0 0 8px 8px'
                  }}>
                    {topic.videos.map((video) => (
                      <VideoButton key={video.id} video={video} onSelect={setSelectedVideo} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
          padding: '24px'
        }}>
          <h2 style={{ 
            fontSize: '1.5rem', 
            fontWeight: 600, 
            marginBottom: '20px', 
            color: '#7C3AED'
          }}>Learning Materials</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {pdfMaterials.map((pdf, index) => (
              <PdfButton key={index} title={pdf.title} pdf={pdf.pdf} onSelect={setSelectedPdf} />
            ))}
          </div>
        </section>

        <div style={{ textAlign: 'center' }}>
          <button 
            onClick={() => setLearningOpen(true)} 
            style={{
              padding: '14px 28px',
              backgroundColor: '#7C3AED',
              color: '#FFFFFF',
              borderRadius: '8px',
              fontSize: '1.1rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              fontWeight: 500,
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#6D28D9'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#7C3AED'}
          >
            Start Learning
          </button>
        </div>

        <CustomDialog open={learningOpen} onClose={() => setLearningOpen(false)} title="Ask a Question">
        <div style={{ padding: '20px' }}>
          <textarea
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask your C programming question..."
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid #E5E7EB',
              minHeight: '100px',
              marginBottom: '16px',
              fontSize: '1rem',
              resize: 'vertical',
            }}
          />
          <button
            onClick={handleQuestionSubmit}
            style={{
              padding: '12px 24px',
              backgroundColor: '#472758',
              color: '#FFFFFF',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 500,
              width: '100%',
            }}
          >
            Submit Question
          </button>
          {outputValue && (
            <div
              style={{
                marginTop: '20px',
                padding: '16px',
                backgroundColor: '#F5F3FF',
                borderRadius: '8px',
                whiteSpace: 'pre-wrap',
                fontSize: '0.9rem',
                color: '#4B5563',
              }}
            >
              {outputValue}
            </div>
          )}
        </div>
      </CustomDialog>
      </main>
    </div>
  );
};

export default CLearningPlatform;