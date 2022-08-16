//Libraries
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import MovieSearchList from "./components/MovieSearchList";
import MovieTrendList from "./components/MovieTrendList";
import MovieDetail from "./components/MovieDetail";

//Styles
import "./App.css";

function App() {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [isSearchBarSelected, setIsSearchBarSelected] = useState(false);

  function updateToken(token) {
    setToken(token);
    sessionStorage.setItem("token", token);
  }
  return (
    <div
      className="app-container"
      onClick={() => setIsSearchBarSelected(false)}
    >
      <Header
        token={token}
        isSearchBarSelected={isSearchBarSelected}
        setIsSearchBarSelected={setIsSearchBarSelected}
      />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login token={token} updateToken={updateToken} />}
          />
          <Route path="/listado" element={<MovieTrendList token={token} />} />
          <Route path="/search" element={<MovieSearchList token={token} />} />
          <Route path="/detalle" element={<MovieDetail token={token} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
