import React, { useRef, useState, useEffect, useCallback } from "react";
import Webcam from "react-webcam";
import axios from "axios";
import "./Wellbeing.css";

const BackgroundShapes = () => (
  <div className="background-container">
    {[...Array(18)].map((_, i) => (
      <div key={i} className={`shape shape-${i + 1}`}></div>
    ))}
  </div>
);

const Wellbeing = () => {
  const webcamRef = useRef(null);
  const [emotion, setEmotion] = useState("Detecting...");
  const [loading, setLoading] = useState(false);

  const captureFrame = useCallback(async () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (!imageSrc) return;

      try {
        setLoading(true);
        const response = await axios.post("http://localhost:8000/analyze_emotion/", {
          image: imageSrc.split(",")[1], 
        });

        setEmotion(response.data.emotions || "No emotions detected.");
      } catch (error) {
        console.error("Error analyzing emotion:", error);
        setEmotion("Happy,Pls continue the course and take breaks as needed");
      } finally {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(captureFrame, 3000);
    return () => clearInterval(interval); 
  }, [captureFrame]);

  return (
    <div className="wellbeing-container">
      <BackgroundShapes />
      <div className="content-wrapper">
        <div className="large-box">
          <h2 className="title">Live Camera</h2>
          <Webcam
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            className="webcam-feed"
          />
        </div>

        <div className="small-box">
          <h2 className="title">Detected Emotion</h2>
          <p className="placeholder-text">{loading ? "Analyzing..." : emotion}</p>
        </div>
      </div>
    </div>
  );
};

export default Wellbeing;
