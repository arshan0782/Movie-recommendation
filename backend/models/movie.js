import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  user_input: {
    type: String,
    required: true,
  },

  // FIX: Now object array allowed
  recommended_movies: [
    {
      title: {
        type: String,

        required: true,
      },
      year: {
        type: String,
        required: true,
      },
    },
  ],

  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
