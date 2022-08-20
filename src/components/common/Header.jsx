//Assets
import trendingLogo from "../../assets/icons/navbar/arrow-trend-up-solid.svg";
//Libraries
import { Link } from "react-router-dom";
//Components
import SearchBar from "../utils/SearchBar";
//Styles
import "../../css/common/Header.css";
import { useState } from "react";

export default function Header({
  token,
  isSearchBarSelected,
  setIsSearchBarSelected,
}) {
  const [burgerActive, setBurgerActive] = useState(false);

  function toggleBurger() {
    setBurgerActive(burgerActive ? false : true);
  }
  return (
    <div className="header">
      <div className="header--title-container">
        {token && (
          <div className="avatar">
            <div className="initials">SR</div>
          </div>
        )}
        <h2 className="header--title">Alkemy Challenge</h2>
      </div>
      <nav className={`header--navbar `}>
        <div className={`header--nav-menu ${burgerActive ? "active" : ""}`}>
          <Link to="/" className="header--nav-item">
            Home
          </Link>
          <div className="header--trending-container header--nav-item">
            <img
              src={trendingLogo}
              alt="trending"
              className="header--trending-logo"
            />
            <Link to="trending">Trending</Link>
          </div>
          <Link to="favorites" className="header--nav-item">
            Favorites
          </Link>
        </div>
        <div
          className={`header--hamburger-menu ${burgerActive ? "active" : ""}`}
          onClick={toggleBurger}
        >
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
          <span className="hamburger-bar"></span>
        </div>
      </nav>

      <SearchBar
        isSearchBarSelected={isSearchBarSelected}
        setIsSearchBarSelected={setIsSearchBarSelected}
      />
    </div>
  );
}
