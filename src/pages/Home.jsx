import "../../src/css/Home.css"
import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import {searchMovies, getPopularMovies} from "../services/movie-api.js"; 


function Home() {
    
    const [searchQuery, setSearchQuery] = React.useState("");
    const [movies, setMovieList] = React.useState([]);
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    const handleSearch = async(event) => {
        event.preventDefault();
        if(loading) return; // Prevent search while loading
        setLoading(true);
        try {
            const searchResults = await searchMovies(searchQuery);
            console.log(searchResults);
            setMovieList(searchResults);
        }
        catch (error) {
            setError("Failed to fetch search results. Please try again later.");
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const movies = await getPopularMovies();
                setMovieList(movies);
            } catch (error) {
                console.error("Error fetching popular movies:", error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchMovies();

    },[]);
    
    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>
        {error && <div className="error-message">Error: {error.message}</div>}
        {loading? ( <div className="loading">Loading movies...</div> ) :
        <div className="movies-grid">
            {movies.map((movie) => (
                ( !searchQuery || movie.primaryTitle.toLowerCase().includes(searchQuery.toLowerCase())) 
                &&
                ( <MovieCard key={movie.id} movie={movie} /> )
            ))}
        </div>
        }
    </div>
  );
}

export default Home;