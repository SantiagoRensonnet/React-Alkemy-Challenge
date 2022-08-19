//Assets
import trendingLogo from "../../assets/icons/navbar/arrow-trend-up-solid.svg";
//Libraries
import { Link } from "react-router-dom";
//Components
import SearchBar from "../utils/SearchBar";
//Styles
import "../../css/common/Header.css";

export default function Header({
  token,
  isSearchBarSelected,
  setIsSearchBarSelected,
}) {
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
      <nav className="header--navbar">
        <Link to="/">Home</Link>
        <div className="header--trending-container">
          <img
            src={trendingLogo}
            alt="trending"
            className="header--trending-logo"
          />
          <Link to="trending">Trending</Link>
        </div>
        <Link to="favorites">Favorites</Link>
      </nav>
      <SearchBar
        isSearchBarSelected={isSearchBarSelected}
        setIsSearchBarSelected={setIsSearchBarSelected}
      />
    </div>
  );
}
