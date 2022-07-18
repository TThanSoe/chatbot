import { useState } from "react";
import MessageInput from "./components/MessageInput/MessageInput";
import Modal from "./components/Modal/Modal";
import Button from "./components/Button/Button";
import CloseIcon from "../src/assets/close.svg";
import ChatSvg from "../src/assets/chat.svg";

import "./App.css";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="app-container">
      <div>
        <h1 className="app-header">Hello Chatbot</h1>
        <Button className="chat-icon-button" onClick={toggleModal}>
          <img className="chat-svg" src={ChatSvg} alt="chat-icon" />
        </Button>
      </div>

      {modalOpen ? (
        <Modal show={modalOpen} close={() => setModalOpen(false)}>
          <MessageInput />
          <Button
            className="close-button"
            onClick={() => {
              setModalOpen(false);
            }}
          >
            <img src={CloseIcon} alt="close-icon" />
          </Button>
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
