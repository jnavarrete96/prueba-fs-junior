import { createMovie, listMovies, getMovieById } from '../services/movieService.js';

export const createMovieController = async (req, res) => {
  const movieData = req.body;

  const requiredFields = ['title', 'year', 'genre', 'image'];

  const missingFields = requiredFields.filter((field) => !movieData[field]);

  if (missingFields.length > 0) {
    return res.status(400).json({ message: 'Faltan los siguientes campos requeridos', fields: missingFields });
  }

  try {
    const movieId = await createMovie(movieData);
    res.status(201).json({ message: 'Movie created successfully', id: movieId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const listMoviesController = async (req, res) => {
  try {
    const movies = await listMovies();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ message: 'Error al listar las películas', error: error.message });
  }
};

export const getMovieByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const movie = await getMovieById(id);

    if (!movie) {
      return res.status(404).json({ message: 'Película no encontrada.' });
    }

    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
