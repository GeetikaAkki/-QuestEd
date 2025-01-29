import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Book, Play, MessageSquare } from 'lucide-react';
import CustomDialog from '../components/ui/CustomDialog';

const CLearningPlatform = () => {
  const [selectedVideo, setSelectedVideo] = useState('');
  const [selectedPdf, setSelectedPdf] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [activeSection, setActiveSection] = useState(null);
  const [quizOpen, setQuizOpen] = useState(false);

  const topics = [
    { title: 'Pointers', videos: [{ id: 'video1', title: 'Introduction to Pointers', url: 'VIDEO_URL_1' }], pdf: 'pointers.pdf' },
    { title: 'Strings', videos: [{ id: 'video2', title: 'String Basics', url: 'VIDEO_URL_2' }], pdf: 'strings.pdf' },
    { title: 'Functions', videos: [{ id: 'video3', title: 'Function Basics', url: 'VIDEO_URL_3' }], pdf: 'functions.pdf' },
    { title: 'Structures & Unions', videos: [{ id: 'video4', title: 'Structures in C', url: 'VIDEO_URL_4' }], pdf: 'structures.pdf' },
    { title: 'File Handling', videos: [{ id: 'video5', title: 'Working with Files', url: 'VIDEO_URL_5' }], pdf: 'file_handling.pdf' },
    { title: 'Memory Management', videos: [{ id: 'video6', title: 'Dynamic Memory Allocation', url: 'VIDEO_URL_6' }], pdf: 'memory.pdf' }
  ];

  const quizQuestions = [
    { question: 'What is a pointer in C?', options: ['A variable', 'A memory address', 'A function'], answer: 'A memory address' },
    { question: 'Which function is used to read a string?', options: ['scanf()', 'printf()', 'gets()'], answer: 'gets()' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <h1 className="text-3xl font-bold text-purple-900">Welcome to C Programming</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Video Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-purple-900">Video Tutorials</h2>
          <div className="space-y-4">
            {topics.map((topic, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  onClick={() => setActiveSection(activeSection === topic.title ? null : topic.title)}
                  className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-t-lg"
                >
                  <span className="font-medium">{topic.title}</span>
                  {activeSection === topic.title ? <ChevronUp /> : <ChevronDown />}
                </button>
                {activeSection === topic.title && (
                  <div className="p-4 space-y-2">
                    {topic.videos.map((video) => (
                      <button
                        key={video.id}
                        onClick={() => setSelectedVideo(video.url)}
                        className="w-full text-left p-2 hover:bg-purple-50 rounded flex items-center gap-2"
                      >
                        <Play size={16} />
                        {video.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* PDF Section */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-purple-900">Learning Materials</h2>
          <div className="space-y-4">
            {topics.map((topic, index) => (
              <button
                key={index}
                onClick={() => setSelectedPdf(topic.pdf)}
                className="flex items-center gap-2 p-4 w-full border rounded-lg hover:bg-purple-50"
              >
                <Book size={20} />
                <span>{topic.title} Guide</span>
              </button>
            ))}
          </div>
        </section>

        {/* Start Learning Button */}
        <div className="text-center">
          <button
            onClick={() => setQuizOpen(true)}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 text-lg"
          >
            Start Learning
          </button>
        </div>

        {/* Quiz Modal */}
        <CustomDialog open={quizOpen} onClose={() => setQuizOpen(false)} title="Quick Quiz">
          <div className="space-y-4">
            {quizQuestions.map((q, index) => (
              <div key={index}>
                <p className="font-semibold">{q.question}</p>
                <div className="flex flex-col gap-2 mt-2">
                  {q.options.map((option, i) => (
                    <button key={i} className="px-4 py-2 border rounded-lg hover:bg-gray-200">
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CustomDialog>
      </div>
    </div>
  );
};

export default CLearningPlatform;
