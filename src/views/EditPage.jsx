import React from "react";
import { Link } from "react-router-dom";

const EditPage = () => {
  return (
    <form className="container needs-validation" noValidate>
      <h1 className="text-center my-5">Edit contact</h1>
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
          required
        />
      </div>
      <div className="d-grid gap-2">
        <button type="submit" className="btn btn-primary">
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
