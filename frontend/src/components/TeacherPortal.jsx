import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Background from './Background';
import './Background.css';
import logo from '../images/quested.png';

const TeacherPortal = () => {
  const [course, setCourse] = useState('');
  const [resourceType, setResourceType] = useState('');
  const [youtubeLink, setYoutubeLink] = useState('');
  const [file, setFile] = useState(null);
  const [userId, setUserId] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');

  const courses = ['Math', 'Physics', 'Chemistry', 'Biology', 'History'];

  const handleUpload = () => {
    if (resourceType === 'youtube' && youtubeLink) {
      console.log(`Uploading YouTube link: ${youtubeLink}`);
    } else if (resourceType === 'pdf' && file) {
      console.log(`Uploading file: ${file.name}`);
    } else {
      console.log('Please select a course and provide a valid resource.');
    }
  };

  const handleFeedbackSubmit = () => {
    if (userId && feedbackMessage) {
      console.log(`Feedback Submitted!\nUser ID: ${userId}\nMessage: ${feedbackMessage}`);
      setUserId('');
      setFeedbackMessage('');
    } else {
      console.log('Please enter both User ID and Feedback Message.');
    }
  };

  return (
    <div>
      <Background />

      {/* Top Right Link to Course Page */}
<div style={styles.topRightLink}>
  <a href="./" style={{ textDecoration: 'none', color: 'black' }}>Home</a>
</div>



      <div style={styles.container}>
        <img src={logo} alt="QuestEd Logo" style={styles.logo} />

        <div style={styles.cardsContainer}>
          <div style={styles.card}>
            <div style={styles.header}>
              <h2 style={styles.title}>📚 Upload Material</h2>
            </div>

            <div style={styles.row}>
              <select value={course} onChange={(e) => setCourse(e.target.value)} style={styles.dropdown}>
                <option value="" disabled>Select Course</option>
                {courses.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>

              <select value={resourceType} onChange={(e) => setResourceType(e.target.value)} style={styles.dropdown}>
                <option value="" disabled>Select Resource Type</option>
                <option value="youtube">YouTube Link</option>
                <option value="pdf">PDF File</option>
              </select>
            </div>

            <div style={styles.row}>
              {resourceType === 'youtube' && (
                <input
                  type="text"
                  placeholder="Enter YouTube Link"
                  value={youtubeLink}
                  onChange={(e) => setYoutubeLink(e.target.value)}
                  style={styles.input}
                />
              )}
              {resourceType === 'pdf' && (
                <input
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={styles.input}
                />
              )}
            </div>

            <button onClick={handleUpload} style={styles.uploadButton}>
              Upload
            </button>
          </div>

          <div style={styles.card}>
            <div style={styles.header}>
              <h2 style={styles.title}>📝 Submit Feedback</h2>
            </div>

            <input
              type="text"
              placeholder="Enter User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              style={styles.input}
            />

            <textarea
              placeholder="Enter your feedback..."
              value={feedbackMessage}
              onChange={(e) => setFeedbackMessage(e.target.value)}
              style={styles.textarea}
            />

            <button onClick={handleFeedbackSubmit} style={styles.uploadButton}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'transparent',
    position: 'relative',
    zIndex: 1,
  },
  topRightLink: {
    position: 'absolute',
    top: '20px',
    right: '30px',
  },
  link: {
    textDecoration: 'none',
    fontSize: '18px',
    color: '#4B0082',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  logo: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    width: '120px',
    height: 'auto',
  },
  cardsContainer: {
    display: 'flex',
    gap: '50px', 
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: '40px',
    borderRadius: '24px',
    width: '500px', 
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    zIndex: 2,
  },
  header: {
    marginBottom: '20px',
  },
  title: {
    color: '#4B0082',
    fontWeight: 'bold',
  },
  row: {
    display: 'flex',
    gap: '16px',
    marginBottom: '20px',
  },
  dropdown: {
    flex: 1,
    padding: '14px', 
    borderRadius: '8px',
    border: '1px solid #E0E0E0',
    backgroundColor: '#FFFFFF',
    color: '#333333',
    fontSize: '16px', 
  },
  input: {
    width: '100%',
    padding: '14px', 
    borderRadius: '8px',
    border: '1px solid #E0E0E0',
    backgroundColor: '#FFFFFF',
    color: '#333333',
    fontSize: '16px', 
    marginBottom: '10px',
  },
  textarea: {
    width: '100%',
    padding: '14px', 
    borderRadius: '8px',
    border: '1px solid #E0E0E0',
    backgroundColor: '#FFFFFF',
    color: '#333333',
    fontSize: '16px', 
    height: '100px', 
    resize: 'none',
    marginBottom: '10px',
  },
  uploadButton: {
    width: '100%',
    padding: '14px', 
    borderRadius: '8px',
    border: 'none',
    backgroundColor: '#4B0082',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '16px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default TeacherPortal;
