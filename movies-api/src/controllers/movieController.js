import { createMovie } from '../services/movieService.js';

export const createMovieController = async (req, res) => {
    const movieData = req.body;
  
    const requiredFields = ['title', 'year', 'genre', 'image'];
  
    const missingFields = requiredFields.filter(field => !movieData[field]);
  
    if (missingFields.length > 0) {
      return res.status(400).json({ message: 'Faltan los siguientes campos requeridos', fields: missingFields });
    }
  
    try {
      const movieId = await createMovie(movieData);
      res.status(201).json({message: 'Movie created successfully', id: movieId });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};
