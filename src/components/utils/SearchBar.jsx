//Assets
import searchLogoSolid from "../../assets/icons/search-bar/magnifying-glass-solid.svg";
import searchLogoRegular from "../../assets/icons/search-bar/magnifying-glass-regular.svg";
//Libraries
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MsgModal from "../Modals/MsgModal";
import Modal from "react-modal";
//Styles
import "../../css/utils/SearchBar.css";

export default function SearchBar({
  isSearchBarSelected,
  setIsSearchBarSelected,
}) {
  //SearchBar states
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  //Modal setup
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  const [modalStyle, setModalStyle] = useState({});
  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }
  //Event Handlers
  //Submit
  const submitHandler = (event) => {
    event.preventDefault();
    if (!searchTerm.trim()) {
      setModalStyle({ color: "#9363e7" });
      setModalMsg(
        "If you don't know where to go, it doesn't matter which road you've taken"
      );
      openModal();
      return;
    }
    navigate(`/search?q=${searchTerm}`);
  };
  return (
    <div className={`search-bar ${isSearchBarSelected && "selected"}`}>
      <MsgModal
        msg={modalMsg}
        openModal={modalIsOpen}
        closeModal={closeModal}
        style={modalStyle}
      />
      <form onSubmit={submitHandler}>
        <div
          className="search-bar--logo"
          style={{ backgroundImage: `url(${searchLogoRegular}` }}
        ></div>
        <input
          type="text"
          className="search-bar--input"
          placeholder="Search"
          onClick={(e) => {
            e.stopPropagation();
            setIsSearchBarSelected(true);
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
      </form>
    </div>
  );
}
