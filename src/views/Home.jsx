import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import CardContact from "../components/CardContact";
import useAppContext from "../context/AppContext.jsx";

const Home = () => {
  const { store, actions } = useAppContext();
  const contacts = store.contacts;

  useEffect(() => {
    actions.updateContactList();
  }, [actions]);

  return (
    <main className="container">
      <h1 className="text-center m-4">Contact List from "Personal" Agenda</h1>
      <div className="d-flex">
        <Link to={"/NewContact"} className="btn btn-success block my-4 ms-auto">
          Add new contact
        </Link>
      </div>
      <div
        id="contacts"
        className="panel-collapse collapse show"
        aria-expanded="true"
      >
        <ul className="list-group pull-down" id="contact-list">
          {Array.isArray(contacts) && contacts.length === 0 ? (
            <div className="container d-flex justify-content-center align-items-center">
              <span
                className="badge bg-primary text-wrap fs-5 p-3"
                style={{ width: "35rem" }}
              >
                Contact list is empty. Please, add a new contact.
              </span>
            </div>
          ) : (
            contacts.map((item, index) => (
              <CardContact
                id={item.id}
                key={index}
                full_name={item.full_name}
                email={item.email}
                address={item.address}
                phone={item.phone}
              />
            ))
          )}
        </ul>
      </div>
    </main>
  );
};

export default Home;
