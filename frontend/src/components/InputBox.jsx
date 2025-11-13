import React, { useState } from "react";
import { FaMicrophone } from "react-icons/fa";

const InputBox = ({ query, setQuery, handleSearch }) => {
  const [isListening, setIsListening] = useState(false);

  // Voice Input Function (FULLY WORKING)
  const handleVoiceInput = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Voice Search not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false; // Google style one-shot
    recognition.interimResults = true; // Better capturing

    let finalTranscript = "";

    setIsListening(true);
    recognition.start();

    recognition.onresult = (event) => {
      let interim = "";

      for (let i = 0; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
          finalTranscript = transcript;
        } else {
          interim += transcript;
        }
      }

      // Live update inside input (Google style)
      setQuery(finalTranscript || interim);
    };

    recognition.onerror = (err) => {
      console.log("Voice error:", err);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);

      // If user actually spoke something → auto search
      if (finalTranscript.trim().length > 0) {
        handleSearch();
      }
    };
  };

  return (
    <div className="bg-linear-to-r from-gray-900 via-gray-800 to-black border border-gray-700 p-6 rounded-3xl w-full max-w-lg shadow-2xl flex flex-col gap-5 transition-all duration-300 hover:border-blue-500">
      <h2 className="text-center text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300">
        Find Your Perfect Movie
      </h2>

      {/* Search Input + Mic */}
      <div className="relative w-full">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies by typing or speaking..."
          className="w-full p-4 pr-14 rounded-full text-white bg-gray-900 border border-gray-700 placeholder-gray-400 focus:border-blue-500 outline-none transition-all duration-300"
        />

        {/* Mic Button inside Input */}
        <button
          onClick={handleVoiceInput}
          className={`absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full transition-all duration-300
            ${isListening ? "bg-red-500 animate-pulse" : "bg-gray-700 hover:bg-gray-600"}
          `}
        >
          <FaMicrophone className="text-white" size={18} />
        </button>
      </div>

      {/* Search Button */}
      <button
        onClick={handleSearch}
        className="bg-linear-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 text-xl text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300"
      >
        🔍 Search
      </button>
    </div>
  );
};

export default InputBox;
