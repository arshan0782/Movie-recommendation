import React from "react";

const InputBox = ({ query, setQuery, handleSearch }) => {
  return (
    <div className="bg-linear-to-r from-gray-900 via-gray-800 to-black border border-gray-700 p-6 rounded-3xl w-full max-w-lg shadow-2xl flex flex-col gap-5 transition-all duration-300 hover:border-blue-500">
      <h2 className="text-center text-2xl font-semibold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-300 tracking-wide">
        Find Your Perfect Movie
      </h2>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Find a movie (e.g. comedy, thriller, drama)"
        className="w-full p-4 rounded-xl text-white bg-gray-900 border border-gray-700 placeholder-gray-400 focus:border-blue-500 focus:ring focus:ring-blue-400/30 outline-none transition-all duration-300"
      />

      <button
        onClick={handleSearch}
        className="bg-linear-to-r from-blue-500 to-cyan-400 hover:from-cyan-400 hover:to-blue-500 text-2xl text-white font-bold px-6 py-3 rounded-xl shadow-lg shadow-blue-500/25 transition-all duration-300"
      >
        🔍 Search
      </button>
    </div>
  );
};

export default InputBox;
