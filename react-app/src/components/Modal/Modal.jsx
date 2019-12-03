import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "wicg-inert";

import styles from "./Modal.module.scss";

/* Modal component. Must have a div with id modal-root on the body, where the
 * modal and it's children will be rendered.
 */
const Modal = ({ children, onClose }) => {
  // Disable scroll and interactions with other elements on the page
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
    // Users can close the dark area or press Escape to close the modal
    <div
      className={styles.modalWrapper}
      onClick={evt => {
        evt.stopPropagation();
        if (evt.target === evt.currentTarget) {
          onClose();
        }
      }}
      onKeyDown={evt => evt.key === "Escape" && onClose()}
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
