// Libraries
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import ErrorModal from "./Modals/ErrorModal";
import Modal from "react-modal";
//Components
import MovieCard from "./MovieCard";
//Styles
import "../css/MovieList.css";

Modal.setAppElement("#root");

export default function MovieList({ token, endPoint }) {
  //Modal setup
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [errorData, setErrorData] = useState({});
  const navigate = useNavigate();

  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  function onCardClick(id) {
    navigate(`/detalle?movieID=${id}`);
  }

  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    axios
      .get(endPoint)
      .then((res) => {
        setMovieData(res.data.results);
      })
      .catch((error) => {
        setErrorData({ code: error.code, message: error.message });
        openModal();
      });
  }, [endPoint]);

  const movieList = movieData
    .filter((movie) => movie.overview && movie.poster_path)
    .map((movie, index) => {
      const path = "https://image.tmdb.org/t/p/original" + movie.poster_path;
      const movieImg = movie.poster_path
        ? { backgroundImage: `url(${path})` }
        : null;
      return (
        <MovieCard
          maxChar={320}
          onCardClick={onCardClick}
          id={movie.id}
          key={index}
          image={movieImg}
          title={movie.original_title}
          overview={movie.overview}
        />
      );
    });

  return (
    <>
      {!token && <Navigate replace to="/login" />}
      <ErrorModal
        errorData={errorData}
        openModal={modalIsOpen}
        closeModal={closeModal}
      />
      {movieData && (
        <div className="list-container">
          <div className="table">{movieList}</div>
        </div>
      )}
    </>
  );
}
