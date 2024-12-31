import PropTypes from 'prop-types';

export const Card = ({ movie }) => {
  return (
    <article className="max-w-sm lg:max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <img 
        className="rounded-t-lg w-full h-96 object-fill" 
        src={movie.image} 
        alt={movie.title} 
      />
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.genre}</p>
      </div>
    </article>
  );
};

Card.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};
