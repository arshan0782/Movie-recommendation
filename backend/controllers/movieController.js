import Groq from "groq-sdk";
import dotenv from "dotenv";
dotenv.config();
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export const getMovies = async (req, res) => {
  try {
    const { query } = req.body;

    if (!query.trim()) {
      return res.status(400).json({ message: "Query is required" });
    }

    console.log(`Fetching Groq recommendations for: "${query}"`);

    // AI ko force karte hain sirf name + year return karne ke liye
    const prompt = `
      Give ONLY 5 movies similar to "${query}".
      STRICT FORMAT:
      Movie Name (Year)
      Movie Name (Year)
      Movie Name (Year)
      Movie Name (Year)
      Movie Name (Year)

      No explanation. No extra text.
    `;

    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant",
      messages: [{ role: "user", content: prompt }],
    });

    const text = completion.choices[0].message.content || "";

    // Clean name + year extract
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

    res.json({ movies });

  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: err.message });
  }
};