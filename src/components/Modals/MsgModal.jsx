//Assets
import closeLogo from "../../assets/icons/modal/modal-close-icon.svg";
//Libraries
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "33rem",
    height: "10rem",
    backgroundColor: "white",
    boxShadow: "0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25)",
    borderRadius: "1rem",
    fontFamily: "'Inter', sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
};
const MsgModal = ({ header, description, openModal, closeModal }) => {
  let title;
  let subtitle;
  let btn;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function afterOpenModal() {
    if (title) {
      //title style
      title.style.color = "#54595E";
      title.style.fontSize = "1.8rem";
      title.style.fontWeight = "600";
      title.style.marginBottom = "0.5rem";
    }
    if (subtitle) {
      // subtitle style
      subtitle.style.color = "#54595E";
      subtitle.style.fontSize = "1.2rem";
      subtitle.style.fontWeight = "400";
      subtitle.style.marginBottom = "1rem";
    }

    //button style
    btn.style.alignSelf = "flex-end";
    btn.style.backgroundColor = "#E5E5E5";
    btn.style.width = "1.5rem";
    btn.style.height = "1.5rem";
    btn.style.borderRadius = "1.8rem";
    btn.style.padding = "4px";
    btn.style.display = "flex";
    btn.style.justifyContent = "center";
    btn.style.alignItems = "center";
  }

  return (
    <>
      <Modal
        isOpen={openModal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button ref={(_btn) => (btn = _btn)} onClick={closeModal}>
          <img src={closeLogo} alt="close" />
        </button>
        {header && <h1 ref={(_title) => (title = _title)}>{header}</h1>}
        {description && (
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{description}</h2>
        )}
      </Modal>
    </>
  );
};
export default MsgModal;
