import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const storedFavourites = JSON.parse(localStorage.getItem("favourites"));
        if(storedFavourites) setFavourites(storedFavourites);
    }, []);

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites]);

    const addToFavourites = (movie) => {
        setFavourites(prev => [...prev, movie]);
    };

    const removeFromFavourites = (movieId) => {
        setFavourites(prev => prev.filter(movie => movie.id !== movieId));
    };

    const isFavourite = (movieId) => {
        if (!favourites || favourites.length === 0) {
            return false;
        }
        return favourites.some(movie => movie.id === movieId);
    };

    return (
    <MovieContext.Provider value={{ favourites, addToFavourites, removeFromFavourites, isFavourite }}>
        {children}
    </MovieContext.Provider>
    )
}