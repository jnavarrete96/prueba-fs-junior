import Movie from "../models/movie.js";

export const createMovie = async (movieData) => {
    try {
      const movie = await Movie.create(movieData);
      return movie.id;
    } catch (error) {
      console.error('Error al crear la película:', error);
      throw new Error('No se pudo crear la película');
    }
};