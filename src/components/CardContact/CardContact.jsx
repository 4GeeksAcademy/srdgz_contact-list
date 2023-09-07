import React, { useState } from "react";
import { Link } from "react-router-dom";

import useAppContext from "../../context/AppContext.jsx";
import Modal from "../Modal/Modal.jsx";

const CardContact = (props) => {
  const { store, actions } = useAppContext();
  const [showModal, setShowModal] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const handleEditContact = () => {
    props.onEdit({
      id: props.id,
      full_name: props.full_name,
      email: props.email,
      address: props.address,
      phone: props.phone,
    });
  };

  const handleOpenModal = (contact) => {
    setContactToDelete(contact);
    setShowModal(true);
  };

  const handleCloseModal = (action) => {
    setShowModal(false);
    if (action === "delete" && contactToDelete) {
      actions.removeContact(contactToDelete.id);
    }
    setContactToDelete(null);
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
              <button className="btn" type="button" onClick={handleOpenModal}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
              {showModal && (
                <Modal
                  contact={contactToDelete}
                  onClose={(action) => handleCloseModal(action)}
                  showModal={showModal}
                />
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
