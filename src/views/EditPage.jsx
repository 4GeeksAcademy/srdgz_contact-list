import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

import useAppContext from "../context/AppContext.jsx";

const EditPage = () => {
  const { id } = useParams();
  const { store, actions } = useAppContext();
  const contacts = store.contacts;
  const [contactToEdit, setContactToEdit] = useState(contacts[indexToEdit]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const indexToEdit = contacts.findIndex((contact) => {
    contact.id === Number(id);
    return contact.id;
  });

  const handleEditInput = (e) => {
    const { id: field, value } = e.target;
    setContactToEdit((prevContactToEdit) => ({
      ...prevContactToEdit,
      [field]: value,
    }));
  };

  const handleUpdateContact = (e) => {
    e.preventDefault();
    actions.editContact(contactToEdit);
  };

  return (
    <form className="container needs-validation" noValidate>
      <h1 className="text-center my-5">Edit contact</h1>
      {formSubmitted && (
        <div className="alert alert-success" role="alert">
          Changes successfully saved
        </div>
      )}
      <div className="mb-3">
        <label htmlFor="full_name" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          className="form-control"
          id="full_name"
          aria-describedby="formHelp"
          placeholder="Full Name"
          onChangeInput={(e) => handleEditInput(e, id)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="Enter email"
          onChangeInput={(e) => handleEditInput(e, id)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="phone"
          className="form-control"
          id="phone"
          placeholder="Enter phone"
          onChangeInput={(e) => handleEditInput(e, id)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="address"
          className="form-control"
          id="address"
          placeholder="Enter address"
          onChangeInput={(e) => handleEditInput(e, id)}
          required
        />
      </div>
      <div className="d-grid gap-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleUpdateContact}
        >
          Save Changes
        </button>
      </div>
      <Link to={"/"} type="button" className="btn btn-link">
        or get back to contacts
      </Link>
    </form>
  );
};

export default EditPage;
