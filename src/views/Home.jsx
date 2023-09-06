import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import CardContact from "../components/CardContact";
import useAppContext from "../context/AppContext.jsx";

const Home = () => {
  const { store, actions } = useAppContext();
  const contacts = store.contacts;

  useEffect(() => {
    actions.updateContactList();
  }, []);

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
          {Array.isArray(contacts)
            ? contacts.map((item, index) => {
                return (
                  <CardContact
                    id={item.id}
                    key={index}
                    full_name={item.full_name}
                    email={item.email}
                    address={item.address}
                    phone={item.phone}
                  />
                );
              })
            : null}
        </ul>
      </div>
    </main>
  );
};

export default Home;
