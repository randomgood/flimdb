import "../../src/css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext";

const MovieCard = ({ movie }) => {
  const { addToFavourites, isFavourite, removeFromFavourites } = useMovieContext();
  const isMovieFavourite = isFavourite(movie.id);

  function onFavouriteClick(event) {
    event.preventDefault();
    if (isMovieFavourite) {
      removeFromFavourites(movie.id);
    }
    else {
      addToFavourites(movie);
    }
  }

  return (
    <div className="movie-card">
      <div className="movie-poster">
        {movie.thumbnails.length > 1 && <img src={movie.thumbnails[1].url} alt={`${movie.title}`} />}
        <div className="movie-overlay">
          <button className={`favourite-btn ${isMovieFavourite ? "active" : ""}`} onClick={onFavouriteClick}>
            ❤️
          </button>
        </div>
        <div className="movie-info">
          <h3>{movie.primaryTitle}</h3>
          <p>{movie.releaseDate?.split('-')[0]}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default MovieCard;