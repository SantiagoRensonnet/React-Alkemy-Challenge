import { Navigate } from "react-router-dom";
//Styles
import "../css/Listado.css";
export default function Listado() {
  const token = localStorage.getItem("token");
  return token ? (
    <div className="table">
      <div className="column-1">
        <div className="card">
          <h2 className="column-title">Peli 1</h2>
          <p>Descripción</p>
        </div>
      </div>
    </div>
  ) : (
    <Navigate replace to="/login" />
  );
}
