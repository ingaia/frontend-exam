import React from "react";
import ReactDOM from "react-dom";
import Modal from "./Modal";

it("Modal renders without crashing", () => {
  const modalRoot = document.createElement("div");
  modalRoot.id = "modal-root";
  document.body.appendChild(modalRoot);
  const div = document.createElement("div");
  ReactDOM.render(<Modal>Hellou</Modal>, div);
  ReactDOM.unmountComponentAtNode(div);
  document.body.removeChild(modalRoot);
});
