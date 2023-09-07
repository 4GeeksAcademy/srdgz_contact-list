import React, { createContext, useContext, useState, useEffect } from "react";

import { createNewContact } from "../services/createNewContact";
import { getAllContacts } from "../services/getAllContacts";
import { updatedContact } from "../services/updatedContact";
import { deleteContact } from "../services/deleteContact";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const editContact = async (full_name, email, address, phone, id) => {
    try {
      await updatedContact({ full_name, email, address, phone, id });
      const response = await getAllContacts();
      setContacts(response);
    } catch (error) {
      console.error("Error editing contact:", error);
    }
  };

  const updateContactList = async () => {
    try {
      const response = await getAllContacts();
      setContacts(response);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const removeContact = async (id) => {
    try {
      await deleteContact({ id });
      await updateContactList();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
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
