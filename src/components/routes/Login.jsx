//Libraries
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MsgModal from "../Modals/MsgModal";
import Modal from "react-modal";
//Styles
import "../../css/routes/Login.css";

Modal.setAppElement("#root");

export default function Login({ token, updateToken }) {
  //Modal setup
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState("");
  function openModal() {
    setModalIsOpen(true);
  }
  function closeModal() {
    setModalIsOpen(false);
  }

  const navigate = useNavigate();

  //Event Handlers
  //Submit
  const submitHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    var regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    // const token = JSON.parse(localStorage.getItem("token")) || "";
    //user-side validations
    if (email === "" || password === "") {
      setModalMsg("These Fields Cannot Be Empty");
      openModal();
      return;
    }
    //test regular expression with email -> false means that email doesn't pass the test
    if (email !== "" && regexEmail.test(email) === false) {
      setModalMsg("Invalid Email Address");
      openModal();

      return;
    }
    if (email !== "challenge@alkemy.org" || password !== "react") {
      setModalMsg("Invalid Credentials");
      openModal();

      return;
    }

    axios
      .post("http://challenge-react.alkemy.org/", { email, password })
      .then((res) => updateToken(res.data.token))
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error.code, error.message));
  };

  //redirect to "listado" if token is already saved in local storage (keep open feature)
  useEffect(() => {
    if (token) {
      navigate("/listado");
    }
  });

  return (
    <div className="login card">
      <MsgModal
        description={modalMsg}
        openModal={modalIsOpen}
        closeModal={closeModal}
      />
      {/* <h2 className="form--title">Title</h2> */}
      <form onSubmit={submitHandler} method="post" className="form">
        <label className="input">
          <span>Email</span>
          <br />
          <input type="text" name="email" autoComplete="off" />
        </label>
        <label className="input">
          <span>Password</span>
          <br />
          <input type="password" name="password" autoComplete="off" />
        </label>
        <button className="form--btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
