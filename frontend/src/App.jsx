import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Feedback from "./pages/Feedback";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black text-white pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/feedback" element={<Feedback />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
