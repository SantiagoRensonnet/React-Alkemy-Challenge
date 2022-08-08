// Libraries
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Components
import StarsBar from "./StarsBar";
// Styles
import "../css/MovieDetail.css";

export default function MovieDetail() {
  let params = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  useEffect(() => {
    // const ThorMovieId = "616037";
    const apiAth = "d76c5df85f84510c22bbc25e156327ce";
    const language = "es-ES";
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${apiAth}&language=${language}"`
      )
      .then((res) => setMovieDetails(res.data));
  }, []);
  const path = "https://image.tmdb.org/t/p/original" + movieDetails.poster_path;
  const movieImg = movieDetails.poster_path
    ? { backgroundImage: `url(${path})` }
    : null;

  return movieDetails.genres ? (
    <div className="movie-detail--table">
      <div style={movieImg} className="movie-detail--image"></div>
      <div className="movie-detail--info">
        <h2 className="movie-detail--title">{movieDetails.original_title}</h2>
        <div>
          <StarsBar rate={movieDetails.vote_average} />
        </div>
        <div>Estreno: {movieDetails.release_date}</div>
        <ul className="movie-detail--genres-list">
          {movieDetails.genres &&
            movieDetails.genres.map((genre, index) => (
              <li key={index}>{genre.name}</li>
            ))}
        </ul>
        <h3 className="movie-detail--subtitle">Sinopsis</h3>
        <p className="movie-detail--description">{movieDetails.overview}</p>
      </div>
    </div>
  ) : (
    <h1>Loading...</h1>
  );
}
