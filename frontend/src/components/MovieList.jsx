import React from "react";

const MovieList = ({ movies }) => {
  return (
    <div className="grid gap-3">
      {movies.map((m, i) => (
        <a
          key={i}
          href={`https://www.google.com/search?q=${encodeURIComponent(
            m.title + " " + m.year + " movie"
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-gray-800 text-white p-4 rounded-xl text-left hover:bg-gray-700 transition duration-200"
        >
          <p className="text-lg font-semibold">{m.title}</p>
          <p className="text-sm text-gray-300">Year: {m.year}</p>
        </a>
      ))}
    </div>
  );
};

export default MovieList;
