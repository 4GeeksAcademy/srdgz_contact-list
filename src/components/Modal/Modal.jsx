import React, { useState } from "react";
import useAppContext from "../../context/AppContext.jsx";

const Modal = (props) => {
  const Context = useAppContext();

  const handleConfirmDelete = () => {
    const contactUrl = `https://playground.4geeks.com/apis/fake/contact/${props.id}`;
    fetch(contactUrl, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error al eliminar el contacto: ${res.statusText}`);
        }
        Context.getAllContacts();
        setShowModal(false);
      })
      .catch((err) => {
        console.error("Error al eliminar el contacto:", err);
      });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Are you sure?</h1>
        <p>If you delete this item you will not be able to recover it</p>
        <button className="btn btn-danger" onClick={handleConfirmDelete}>
          Confirm
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
