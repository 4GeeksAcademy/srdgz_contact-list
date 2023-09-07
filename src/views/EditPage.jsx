import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import useAppContext from "../context/AppContext.jsx";

const EditPage = () => {
  const { id } = useParams();
  const { store, actions } = useAppContext();
  const contacts = store.contacts;
  const [formSubmitted, setFormSubmitted] = useState(false);

  const indexToEdit = contacts.findIndex(
    (contact) => contact.id === Number(id)
  );

  const [contactToEdit, setContactToEdit] = useState(
    indexToEdit !== -1 ? { ...contacts[indexToEdit] } : null
  );

  useEffect(() => {
    if (indexToEdit !== -1) {
      setContactToEdit({ ...contacts[indexToEdit] });
    }
  }, [indexToEdit, contacts]);

  const handleEditInput = (e) => {
    const { name, value } = e.target;
    setContactToEdit((prevContactToEdit) => ({
      ...prevContactToEdit,
      [name]: value,
    }));
  };

  const handleUpdateContact = async (e) => {
    e.preventDefault();
    if (contactToEdit) {
      await actions.editContact(
        contactToEdit.full_name,
        contactToEdit.email,
        contactToEdit.address,
        contactToEdit.phone,
        contactToEdit.id
      );
      await actions.updateContactList();
      setFormSubmitted(true);
    }
  };

  return (
    <form className="container needs-validation" noValidate>
      <h1 className="text-center my-5">Edit contact</h1>
      {formSubmitted && (
        <div className="alert alert-success" role="alert">
          Changes successfully saved
        </div>
      )}
      {contactToEdit && (
        <>
          <div className="mb-3">
            <label htmlFor="full_name" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="full_name"
              name="full_name"
              aria-describedby="formHelp"
              placeholder="Full Name"
              value={contactToEdit.full_name}
              onChange={handleEditInput}
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
              name="email"
              placeholder="Enter email"
              value={contactToEdit.email}
              onChange={handleEditInput}
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
              name="phone"
              placeholder="Enter phone"
              value={contactToEdit.phone}
              onChange={handleEditInput}
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
              name="address"
              placeholder="Enter address"
              value={contactToEdit.address}
              onChange={handleEditInput}
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
        </>
      )}
      <Link to={"/"} type="button" className="btn btn-link">
        or get back to contacts
      </Link>
    </form>
  );
};

export default EditPage;
