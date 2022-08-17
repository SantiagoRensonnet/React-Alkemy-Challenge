import "../css/MovieCard.css";
//Assets
import emptyHeart from "../assets/icons/favorite/heart-regular.svg";
import fullHeart from "../assets/icons/favorite/heart-solid.svg";
export default function MovieCard({
  id,
  title,
  image,
  overview,
  maxChar,
  onCardClick,
}) {
  return overview ? (
    <div className="movie">
      <div className="movie-card">
        <div className="movie-card--favorite-container">
          <div
            alt="empty-heart"
            id={`heart-id-${id}`}
            className="movie-card--favorite-heart"
            style={{ backgroundImage: `url(${emptyHeart})` }}
            onMouseOver={() => {
              document.getElementById(
                `heart-id-${id}`
              ).style.backgroundImage = `url(${fullHeart})`;
            }}
            onMouseOut={() => {
              document.getElementById(
                `heart-id-${id}`
              ).style.backgroundImage = `url(${emptyHeart})`;
            }}
          ></div>
        </div>
        <div className="movie-card--click-me" onClick={() => onCardClick(id)}>
          <h1>+</h1>
        </div>
        <div className="movie-card--content">
          <div className="movie-card--image" style={image}></div>
          <div className="movie-card--info">
            <h2 className="movie-card--title">{title}</h2>
            <p className="movie-card--description">
              {maxChar && overview.length > maxChar
                ? overview.slice(0, maxChar) + " (...)"
                : overview}
            </p>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="movie">
      <div className="movie-card">
        <div className="movie-card--click-me" onClick={() => onCardClick(id)}>
          <h1>+</h1>
        </div>
        <div className="movie-card--content full-image">
          {!image && <h2 className="movie-card--title">{title}</h2>}
          <div className="movie-card--image" style={image}></div>
        </div>
      </div>
    </div>
  );
}
