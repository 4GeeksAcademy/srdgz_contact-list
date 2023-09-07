import React, { useState, useEffect } from "react";
import useAppContext from "../../context/AppContext.jsx";

const Modal = (props) => {
  const { store, actions } = useAppContext();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setShowModal(props.showModal);
  }, [props.showModal]);

  const handleCloseModal = (action) => {
    if (props.onClose) {
      props.onClose(action);
    }
  };

  const handleConfirmDelete = () => {
    if (props.contact) {
      actions.removeContact(props.contact.id);
    }
    handleCloseModal("delete");
  };

  return (
    <div className={`modal ${showModal ? "show" : ""}`}>
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
    </div>
  );
};

export default Modal;
