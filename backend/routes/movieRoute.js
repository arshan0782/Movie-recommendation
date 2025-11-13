import express from "express";
import { getMovies } from "../controllers/movieController.js";

const router = express.Router();

// POST /api/movie
router.post("/", getMovies);

export default router;
