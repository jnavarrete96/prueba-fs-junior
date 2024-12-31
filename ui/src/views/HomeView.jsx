import { useState, useEffect } from "react"; // Importar useState y useEffect
import { Link } from "react-router";
import { Card } from "../components/Card";
import { listMovies } from "../services/movieServices.js";

export const HomeView = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await listMovies();
                setMovies(data);
            } catch (err) {
                setError("No se pudo cargar la lista de películas. Inténtalo más tarde.");
            }
        };

        fetchMovies();
    }, []);

    return (
        <main className="min-h-screen mx-auto w-full max-w-screen-xl px-20">
            <h1 className="text-center text-5xl text-gray-200 font-bold my-4">Best movies of all time</h1>
            {error && <p className="text-red-500 text-center">{error}</p>}
            <div className="flex justify-end mb-4">
                <Link to="/create-movie" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                    Create
                </Link>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center mb-12">
                {movies.length > 0 ? (
                    movies.map((movie) => <Card key={movie.id} movie={movie} />)
                ) : (
                    <p className="text-center text-gray-300">No hay películas disponibles.</p>
                )}
            </section>
        </main>
    );
};
