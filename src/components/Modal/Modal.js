import React, { Fragment } from "react";
// import Button from "../Button/Button";
// import CloseIcon from "../../assets/close.svg";
// import MessageInput from "../MessageInput/MessageInput";

import "./Modal.css";

const Modal = ({ children, ...props }) => {
  return (
    <Fragment className="row">
      <div className="modal-container">
        <div>
          <div {...props}>{children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
