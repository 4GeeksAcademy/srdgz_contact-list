import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllContacts } from "../services/getAllContacts";

const FormPage = () => {
  const [newContact, setNewContact] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    agenda_slug: "personal",
  });

  const handleNewContact = async () => {
    try {
      const addedContact = await createNewContact(newContact);
      const updatedContacts = await getAllContacts();
      setContacts(updatedContacts);
      setNewContact({
        full_name: "",
        email: "",
        phone: "",
        address: "",
        agenda_slug: "personal",
      });
      getAllContacts();
    } catch (err) {
      console.err("Error al agregar el nuevo contacto:", err);
    }
  };
  return (
    <form className="container needs-validation" noValidate>
      <h1 className="text-center my-5">Add new contact</h1>
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
          value={newContact.full_name}
          onChange={(e) =>
            setNewContact({ ...newContact, full_name: e.target.value })
          }
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
          value={newContact.email}
          onChange={(e) =>
            setNewContact({ ...newContact, email: e.target.value })
          }
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
          value={newContact.phone}
          onChange={(e) =>
            setNewContact({ ...newContact, phone: e.target.value })
          }
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
          value={newContact.address}
          onChange={(e) =>
            setNewContact({ ...newContact, address: e.target.value })
          }
        />
      </div>
      <div className="d-grid gap-2">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleNewContact}
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
