//Libraries
import { Route, Routes } from "react-router-dom";
//Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Login from "./components/Login";
import MovieList from "./components/MovieList";
//Styles
import "./App.css";
function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/listado" element={<MovieList />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
