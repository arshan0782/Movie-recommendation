import React, { useState } from "react";
import InputBox from "../components/InputBox";
import MovieList from "../components/MovieList";
import axios from "axios";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      const { data } = await axios.post("http://localhost:5000/api/movie", { query });

      
      setMovies(data.movies || []);
      
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-20 text-center">
      <InputBox query={query} setQuery={setQuery} handleSearch={handleSearch} />
      
      {movies.length > 0 && (
        <div className="mt-6 w-full max-w-md">
          <MovieList movies={movies} />
        </div>
      )}
    </div>
  );
};

export default Home;
