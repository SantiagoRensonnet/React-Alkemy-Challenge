//Assets
import searchLogoSolid from "../assets/icons/search-bar/magnifying-glass-solid.svg";
import searchLogoRegular from "../assets/icons/search-bar/magnifying-glass-regular.svg";
//Libraries
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//Styles
import "../css/Header.css";
export default function Header({ token }) {
  const [searchBarState, setSearchBarState] = useState("not-selected");
  return (
    <div className="header" onClick={() => setSearchBarState("not-selected")}>
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
        <Link to="listado">Listado</Link>
      </nav>

      <div className={`header--search-bar ${searchBarState}`}>
        <img
          src={searchLogoRegular}
          className="header--search-logo"
          alt="search-logo"
        />
        <input
          type="text"
          className="header--search-input"
          placeholder="Search"
          onClick={(e) => {
            e.stopPropagation();
            setSearchBarState("selected");
          }}
        />
      </div>
    </div>
  );
}
