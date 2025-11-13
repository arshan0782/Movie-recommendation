
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-3xl font-bold text-blue-400 mb-4">About Movie Finder</h1>
      <p className="text-gray-300 max-w-2xl leading-relaxed">
        🎥 Movie Finder is an AI-powered movie suggestion web app that helps you discover
        the perfect movie based on your mood or genre preferences.
        It uses advanced AI to generate personalized recommendations instantly.
      </p>
    </div>
  );
};

export default About;
