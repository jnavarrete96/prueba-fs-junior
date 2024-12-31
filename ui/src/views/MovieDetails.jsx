import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { searchMovieById } from '../services/movieServices';
import noImage from '../assets/no-image.svg';

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const data = await searchMovieById(id);
        setMovie(data);
      } catch (err) {
        setError('No se pudo cargar la película. Inténtalo más tarde.');
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  if (!movie) {
    return <p className="text-center text-gray-300">Loading...</p>;
  }

  return (
    <main className="min-h-screen mx-auto w-full container bg-gray-900 text-white py-10 px-4">
      <h1 className="text-center text-4xl font-bold mb-8">Movie Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center">
          <img
            src={movie?.image}
            alt={movie?.title}
            className="rounded-lg w-4/5 h-[400px] object-fill"
            onError={(e) => e.target.src = noImage}
          />
        </div>
        <div className="flex flex-col justify-center w-4/5 text-center md:text-left bg-gray-800 p-6 rounded-lg shadow-md">
          <p className="mb-4"><strong>Name:</strong> {movie?.title}</p>
          <p className="mb-4"><strong>Year:</strong> {movie?.year}</p>
          <p className="mb-4"><strong>Genre:</strong> {movie?.genre}</p>

          <p className="mb-4">
             <strong>Synopsis: </strong> 
             {movie?.synopsis ? movie.synopsis : 'No information available'}
         </p>

         <p className="mb-4">
            <strong>Principal actors: </strong> 
            {movie?.cast && movie?.cast.length > 0 
            ? movie.cast.join(', ') 
            : 'No information available'}
         </p>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Link
          to="/"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
};
