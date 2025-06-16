import "../../src/css/Favourites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites() {

  const { favourites } = useMovieContext();

  if (favourites.length > 0) {
    return ( 
      <div className="favourites-container">
        <h2>Your Favourite movies</h2>
        <div className="movies-grid">
          {favourites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
    </div>
    )
  }
  else {
    return (
      <div className="favourites-empty">
        <h2>No Favourite movies yet</h2>
        <p className="text-lg">Click heart icon to mark it as a favourites movie.</p>
      </div>
    );
  }


}

export default Favourites;
