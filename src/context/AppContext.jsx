import React, { createContext, useContext, useState, useEffect } from "react";

import { createNewContact } from "../services/createNewContact";
import { getAllContacts } from "../services/getAllContacts";
import { updatedContact } from "../services/updatedContact";
import { deleteContact } from "../services/deleteContact";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const editContact = (full_name, email, address, phone, id) => {
    updatedContact(full_name, email, address, phone, id);
    getAllContacts().then((response) => {
      setContacts(response);
    });
  };

  const updateContactList = () => {
    getAllContacts()
      .then((response) => {
        setContacts(response);
      })
      .catch((error) => {
        console.error("Error fetching contacts:", error);
      });
  };

  const removeContact = (id) => {
    deleteContact(id)
      .then(() => {
        updateContactList();
      })
      .catch((error) => {
        console.error("Error deleting contact:", error);
      });
  };

  useEffect(() => {
    updateContactList();
  }, []);

  const store = {
    contacts,
  };

  const actions = {
    createNewContact,
    removeContact,
    updateContactList,
    editContact,
  };

  return (
    <AppContext.Provider value={{ store, actions }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
