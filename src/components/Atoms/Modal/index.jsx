import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import { useTodosContext } from "@/context/todos";
import "./styles.scss";

function Modal({ children }) {
  const { isModalHidden, setIsModalHidden } = useTodosContext();

  return createPortal(
    <div data-testid="modal" className="modal-container">
      <CSSTransition
        classNames="fadeIn"
        timeout={300}
        in={isModalHidden}
        unmountOnExit
      >
        <div
          className="overlay inset-0 fixed z-20"
          onClick={() => setIsModalHidden(false)}
        ></div>
      </CSSTransition>
      <CSSTransition
        classNames="moveIn"
        timeout={150}
        in={isModalHidden}
        unmountOnExit
      >
        <div className="modal-content rounded z-30 inset-0 fixed bg-white mx-8 max-w-md top-auto p-8 pt-14">
          {children}
        </div>
      </CSSTransition>
    </div>,
    document.body,
  );
}

Modal.propTypes = {
  children: PropTypes.any.isRequired,
};

export { Modal };
