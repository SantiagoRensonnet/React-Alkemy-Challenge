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
        <Link to="listado">Listado</Link>
      </nav>
      <SearchBar
        isSearchBarSelected={isSearchBarSelected}
        setIsSearchBarSelected={setIsSearchBarSelected}
      />
    </div>
  );
}
