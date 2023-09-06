import React, { useState } from "react";
import { Link } from "react-router-dom";

import useAppContext from "../context/AppContext.jsx";

const FormPage = () => {
  const { store, actions } = useAppContext();
  const [newContact, setNewContact] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    agenda_slug: "personal",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewContact({
      ...newContact,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.createNewContact(newContact);
    setFormSubmitted(true);
    setNewContact({
      full_name: "",
      email: "",
      phone: "",
      address: "",
      agenda_slug: "personal",
    });
  };

  return (
    <form className="container needs-validation" noValidate>
      <h1 className="text-center my-5">Add new contact</h1>
      {formSubmitted && (
        <div className="alert alert-success" role="alert">
          Contact save successfully
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
          required
          value={newContact["full_name"]}
          onChange={handleInputChange}
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
          required
          value={newContact["email"]}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          placeholder="Enter phone"
          required
          value={newContact["phone"]}
          onChange={handleInputChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="address"
          placeholder="Enter address"
          required
          value={newContact["address"]}
          onChange={handleInputChange}
        />
      </div>
      <div className="d-grid gap-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Save
        </button>
      </div>
      <Link to={"/"} type="button" className="btn btn-link">
        or get back to contacts
      </Link>
    </form>
  );
};

export default FormPage;
