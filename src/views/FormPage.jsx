import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import useAppContext from "../context/AppContext.jsx";

const FormPage = () => {
  const { store, actions } = useAppContext();
  const navigate = useNavigate();
  const [newContact, setNewContact] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    agenda_slug: "personal",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewContact({
      ...newContact,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!newContact.full_name.trim()) {
      errors.full_name = "Full Name is required";
    }
    if (!newContact.email.trim()) {
      errors.email = "Email is required";
    }
    if (!newContact.phone.trim()) {
      errors.phone = "Phone is required";
    }
    if (!newContact.address.trim()) {
      errors.address = "Address is required";
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      actions.createNewContact(newContact);
      setFormSubmitted(true);
      setNewContact({
        full_name: "",
        email: "",
        phone: "",
        address: "",
        agenda_slug: "personal",
      });
      setFormErrors({});
      navigate("/");
    }
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
          className={`form-control ${formErrors.full_name ? "is-invalid" : ""}`}
          id="full_name"
          aria-describedby="formHelp"
          placeholder="Full Name"
          required
          value={newContact["full_name"]}
          onChange={handleInputChange}
        />
        {formErrors.full_name && (
          <div className="invalid-feedback">{formErrors.full_name}</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
          id="email"
          placeholder="Enter email"
          required
          value={newContact["email"]}
          onChange={handleInputChange}
        />
        {formErrors.email && (
          <div className="invalid-feedback">{formErrors.email}</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">
          Phone
        </label>
        <input
          type="tel"
          className={`form-control ${formErrors.phone ? "is-invalid" : ""}`}
          id="phone"
          placeholder="Enter phone"
          required
          value={newContact["phone"]}
          onChange={handleInputChange}
        />
        {formErrors.phone && (
          <div className="invalid-feedback">{formErrors.phone}</div>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          className={`form-control ${formErrors.address ? "is-invalid" : ""}`}
          id="address"
          placeholder="Enter address"
          required
          value={newContact["address"]}
          onChange={handleInputChange}
        />
        {formErrors.address && (
          <div className="invalid-feedback">{formErrors.address}</div>
        )}
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
