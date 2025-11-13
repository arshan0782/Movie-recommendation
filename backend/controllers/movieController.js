import Groq from "groq-sdk";
import dotenv from "dotenv";
import Movie from "../models/movie.js"
dotenv.config();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const getMovies = async (req, res) => {
  try {
    const { query } = req.body;

    if (!query.trim()) {
      return res.status(400).json({ message: "Query is required" });
    }

    console.log(`Fetching Groq recommendations for: "${query}"`);

    const prompt = `
      Give ONLY 5 movies similar to "${query}".
      STRICT FORMAT:
      Movie Name (Year)
      Movie Name (Year)
      Movie Name (Year)
      Movie Name (Year)
      Movie Name (Year)
    `;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
    });

    const text = completion.choices[0].message.content || "";

    const lines = text
      .split("\n")
      .map((line) => line.replace(/^\d+[\.\)]?\s*/, "").trim())
      .filter((x) => x !== "");

    const movies = lines.map((line) => {
      const match = line.match(/(.+)\s*\((\d{4})\)/);

      return {
        title: match ? match[1].trim() : line,
        year: match ? match[2] : "Unknown",
      };
    });

    
    const userYear = movies[0]?.year || "Unknown";

    const finalMovies = [
      { title: query, year: userYear },
      ...movies,
    ];

    // SAVE to MongoDB 
    const savedData = await Movie.create({
      user_input: query,
      recommended_movies: finalMovies,
    });

    // SUCCESS RESPONSE
    res.json({ 
      message: "Data saved to MongoDB successfully",
      movies: finalMovies,
      db: savedData 
    });

  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: err.message });
  }
};
