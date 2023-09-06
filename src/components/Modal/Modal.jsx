import React, { useState } from "react";
import useAppContext from "../../context/AppContext.jsx";
import { deleteContact } from "../../services/deleteContact";

const Modal = (props) => {
  const { store, actions } = useAppContext();
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmDelete = () => {
    deleteContact(props.id);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h1>Are you sure?</h1>
        <p>If you delete this item you will not be able to recover it</p>
        <button className="btn btn-danger" onClick={handleConfirmDelete}>
          Confirm
        </button>
        <button className="btn btn-secondary" onClick={handleCloseModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
