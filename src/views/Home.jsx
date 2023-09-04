import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import CardContact from "../components/CardContact";
import useAppContext from "../context/AppContext.jsx";
import { getAllContacts } from "../services/getAllContacts";

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const { store, actions } = useAppContext();
  useEffect(() => {
    getAllContacts();
  }, []);
  return (
    <main className="container">
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
          {store.contacts.length > 0
            ? store.contacts.map((item) => (
                <CardContact
                  id={item.id}
                  key={item.id}
                  full_name={item.full_name}
                  email={item.email}
                  address={item.address}
                  phone={item.phone}
                />
              ))
            : null}
        </ul>
      </div>
    </main>
  );
};

export default Home;
