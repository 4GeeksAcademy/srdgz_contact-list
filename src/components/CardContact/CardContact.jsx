import React, { useState } from "react";
import { Link } from "react-router-dom";

import useAppContext from "../../context/AppContext.jsx";

const CardContact = (props) => {
  const { store, actions } = useAppContext();
  const [showModal, setShowModal] = useState(false);

  const handleEditContact = () => {
    props.onEdit({
      id: props.id,
      full_name: props.full_name,
      email: props.email,
      address: props.address,
      phone: props.phone,
    });
  };

  const handleDeleteContact = () => {
    setShowModal(true);
  };

  const handleConfirmDelete = async () => {
    try {
      await actions.removeContact(props.id);
      setShowModal(false);
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <li className="list-group-item w-70">
        <div className="row w-70">
          <div className="col-12 col-sm-6 col-md-2 px-1 me-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle shadow-4-strong m-3 img-fluid"
              alt="avatar"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-9 text-left text-sm-left">
            <div className="float-right d-flex">
              <Link
                to={`/EditContact/${props.id}`}
                className="btn ms-auto"
                onClick={handleEditContact}
              >
                <i className="fa-solid fa-pencil" />
              </Link>
              <button
                className="btn"
                type="button"
                onClick={handleDeleteContact}
              >
                <i className="fa-solid fa-trash-can"></i>
              </button>
              {showModal && (
                <div className="modal mt-5" style={{ display: "block" }}>
                  <div className="modal-dialog">
                    <div className="modal-content bg-light border border-4 rounded">
                      <div className="modal-header">
                        <h5 className="modal-title">Are you sure?</h5>
                      </div>
                      <div className="modal-body">
                        <p>
                          If you delete this item you will not be able to
                          recover it.
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={handleConfirmDelete}
                        >
                          Confirm
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          onClick={handleCloseModal}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <h4 className="name m-0">{props.full_name}</h4>
            <br />
            <i className="fa-solid fa-location-dot text-muted me-3" />
            <span className="text-muted">{props.address}</span>
            <br />
            <i className="fa-solid fa-phone text-muted me-3" />
            <span className="text-muted">{props.phone}</span>
            <br />
            <i className="fa-solid fa-envelope text-muted me-3" />
            <span className="text-muted">{props.email}</span>
          </div>
        </div>
      </li>
    </>
  );
};

export default CardContact;
