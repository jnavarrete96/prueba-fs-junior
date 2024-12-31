import { API_BASE_URL } from "../config/api";

export const createMovie = async (movieData) => {
    const response = await fetch(`${API_BASE_URL}/movies`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
    });
    if (!response.ok) {
        throw new Error("Error creating movie");
    }
    return response.json();
};

export const listMovies = async () => {
    const response = await fetch(`${API_BASE_URL}/movies`);
    if (!response.ok) {
        throw new Error("Error searching movies");
    }
    return response.json();
};

export const searchMovieById = async (id) => {
    const response = await fetch(`${API_BASE_URL}/movies/${id}`);
    if (!response.ok) {
        throw new Error("Error obtaing movie details");
    }
    return response.json();
};
