import React, { useState } from "react"
import feedbackImage from "../images/image.png"

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    overall: 0,
    easeOfUse: 0,
    features: 0,
    support: 0,
    recommend: 0,
    comments: "",
  })

  const questions = [
    { id: "overall", label: "How satisfied are you with our service overall?" },
    { id: "easeOfUse", label: "How easy was it to use our product?" },
    { id: "features", label: "How well did our features meet your needs?" },
    { id: "support", label: "How would you rate our customer support?" },
    { id: "recommend", label: "How likely are you to recommend us to others?" },
  ]

  const handleSliderChange = (id, value) => {
    setFeedback((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = () => {
    console.log("Feedback submitted:", feedback)
    alert("Thank you for your feedback!")
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Left side: Feedback Form Container */}
      <div className="w-2/3 p-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow-xl rounded-2xl p-12">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Student Feedback</h1>

            <div className="space-y-6">
              {questions.map(({ id, label }) => (
                <div key={id} className="mb-6">
                  <label className="block text-gray-700 mb-2">{label}</label>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      value={feedback[id]}
                      onChange={(e) => handleSliderChange(id, Number.parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="flex justify-between mt-1">
                      <span className="text-sm text-gray-600">☹️</span>
                      <span className="text-sm text-gray-600">😊</span>
                    </div>
                    <div className="mt-1 text-gray-700">Selected: {feedback[id]}</div>
                  </div>
                </div>
              ))}

              <div>
                <label className="block text-gray-700 mb-2">Additional Comments</label>
                <textarea
                  value={feedback.comments}
                  onChange={(e) => setFeedback((prev) => ({ ...prev, comments: e.target.value }))}
                  className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows={4}
                  placeholder="Please share any additional feedback..."
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-6 
                         rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 
                         transition-colors duration-300"
              >
                Submit Feedback
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right side: Floating Image */}
      <div className="w-1/3 relative">
        <div className="fixed top-1/4 right-16">
          <img
            src={feedbackImage || "/placeholder.svg"}
            alt="Feedback illustration"
            className="w-48 h-auto animate-bounce-slow"
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>
    </div>
  )
}

export default Feedback

