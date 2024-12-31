import Movie from '../models/movie.js';

export const createMovie = async (movieData) => {
  try {
    const movie = await Movie.create(movieData);
    return movie.id;
  } catch (error) {
    console.error('Error al crear la película:', error);
    throw new Error('No se pudo crear la película');
  }
};

export const listMovies = async () => {
  const movies = await Movie.findAll({
    attributes: ['id','title', 'year', 'genre', 'image'],
  });
  return movies;
};

export const getMovieById = async (id) => {
  const movie = await Movie.findByPk(id, {
    attributes: {
      exclude: ['id'],
    },
  });
  return movie;
};
