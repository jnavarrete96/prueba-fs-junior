import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import noImage from "../assets/no-image.svg";

export const Card = ({ movie }) => {
    return (
        <article className="max-w-sm lg:max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col">
            <img
                className="rounded-t-lg w-full h-96 object-fill"
                src={movie.image}
                alt={movie.title}
                onError={(e) => (e.target.src = noImage)}
            />
            <div className="p-4 flex flex-col justify-between flex-grow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.title}</h5>
                <div className="mt-auto">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.genre}</p>
                    <Link
                        to={`/movie-details/${movie.id}`}
                        className="bg-blue-600 text-white py-2 px-4 rounded mt-4 hover:bg-blue-700 w-full text-center"
                    >
                        View Details
                    </Link>
                </div>
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
