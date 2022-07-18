import React, { Fragment } from "react";

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
