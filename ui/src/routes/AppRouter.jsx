import { BrowserRouter, Route, Routes } from "react-router";
import { HomeView } from "../views/HomeView";
import { CreateMovieView } from "../views/CreateMovieView";
import { MovieDetails } from "../views/MovieDetails";

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/create-movie" element={<CreateMovieView />} />
                <Route path="/movie-details/:id" element={<MovieDetails />} />
            </Routes>
        </BrowserRouter>
    );
};
