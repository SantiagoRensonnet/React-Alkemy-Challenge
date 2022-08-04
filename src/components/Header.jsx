//Libraries
import { Link } from "react-router-dom";
//Styles
import "../css/Header.css";
export default function Header() {
  const token = localStorage.getItem("token");
  return (
    <div className="header">
      <h2 className="header--title">Alkemy Challenge</h2>
      {token ? (
        <nav className="header--navbar logged">
          <Link to="/">Home</Link>
          <Link to="listado">Listado</Link>
          <div className="avatar">
            <div className="initials">SR</div>
          </div>
        </nav>
      ) : (
        <nav className="header--navbar">
          <Link to="/">Home</Link>
          <Link to="listado">Listado</Link>
        </nav>
      )}
    </div>
  );
}
