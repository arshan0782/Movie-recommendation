import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  user_input: {
    type: String,
    required: true,
  },
  recommended_movies: {
    type: [String],
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});


const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
