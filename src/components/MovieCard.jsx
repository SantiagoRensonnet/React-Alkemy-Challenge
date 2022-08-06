import "../css/Movie.css";

export default function MovieCard({ id, title, image, overview, onCardClick }) {
  return overview ? (
    <div className="movie">
      <div className="movie-card">
        <div className="movie-card--click-me" onClick={() => onCardClick(id)}>
          <h1>+</h1>
        </div>
        <div className="movie-card--content">
          <div className="movie-card--image" style={image}></div>
          <div className="movie-card--info">
            <h2 className="movie-card--title">{title}</h2>
            <p className="movie-card--description">
              {overview.length > 320
                ? overview.slice(0, 320) + " (...)"
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
