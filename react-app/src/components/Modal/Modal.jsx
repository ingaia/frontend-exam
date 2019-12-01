import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import "wicg-inert";

import styles from "./Modal.module.scss";

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    document.body.classList.add(styles.hideBodyOverflow);

    const modalRoot = document.getElementById("modal-root");
    for (let child of document.body.children) {
      if (child !== modalRoot) {
        child.setAttribute("inert", true);
      }
    }
    return () => {
      document.body.classList.remove(styles.hideBodyOverflow);

      for (let child of document.body.children) {
        if (child.getAttribute("inert") !== null) {
          child.removeAttribute("inert");
        }
      }
    };
  }, []);

  return createPortal(
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={styles.modalWrapper}
      onClick={evt => {
        evt.stopPropagation();
        if (evt.target === evt.currentTarget) {
          onClose();
        }
      }}
      role="presentation"
    >
      <div className={styles.modalBody} role="dialog">
        {children}
      </div>
      <button
        className={styles.closeButton}
        onClick={evt => {
          evt.stopPropagation();
          onClose();
        }}
      >
        CLOSE
      </button>
    </div>,
    document.getElementById("modal-root")
  );
};

Modal.defaultProps = {
  onClose: () => undefined
};

export default Modal;
