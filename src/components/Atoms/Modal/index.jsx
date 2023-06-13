import React from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import { useGlobalsContext } from "@/context/globals";
import "./styles.scss";

function Modal({ children }) {
  const { isModalVisible, setIsModalVisible } = useGlobalsContext();

  return createPortal(
    <div data-testid="modal" className="modal-container">
      <CSSTransition
        classNames="fadeIn"
        timeout={300}
        in={isModalVisible}
        unmountOnExit
      >
        <div
          className="overlay inset-0 fixed z-20"
          onClick={() => setIsModalVisible(false)}
        ></div>
      </CSSTransition>
      <CSSTransition
        classNames="moveIn"
        timeout={150}
        in={isModalVisible}
        unmountOnExit
      >
        <div className="md:top-1/2 md:bottom-auto modal-content rounded z-30 inset-0 fixed w-full bg-white md:mx-auto max-w-sm top-auto p-8 pt-14 left-1/2 right-auto">
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
