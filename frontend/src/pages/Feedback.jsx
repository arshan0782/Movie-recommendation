import React, { useState } from "react";

const Feedback = () => {
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback.trim()) return alert("Please enter your feedback!");
    alert("Thank you for your feedback!");
    setFeedback("");
  };

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-3xl font-bold text-blue-400 mb-6"> Feedback</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-6 rounded-2xl w-full max-w-md shadow-lg"
      >
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Share your thoughts..."
          className="w-full p-4 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-blue-500 focus:ring focus:ring-blue-400/20 outline-none mb-4"
          rows="5"
        />
        <button
          type="submit"
          className="w-full bg-linear-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;
