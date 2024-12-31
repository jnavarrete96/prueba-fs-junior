import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Card = ({ movie }) => {
  return (
    <article className="max-w-sm lg:max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img 
        className="rounded-t-lg w-full h-96 object-fill" 
        src={movie.image} 
        alt={movie.title} 
      />
      <div className="p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.genre}</p>
        <Link
          to={`/movie-details/${movie.id}`}
          className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700"
        >
          View Details
        </Link>
      </div>
    </article>
  );
};

Card.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};
