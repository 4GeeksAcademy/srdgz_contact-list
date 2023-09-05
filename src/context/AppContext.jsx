import React, { createContext, useContext, useState, useEffect } from "react";

import { getAllContacts } from "../services/getAllContacts";
import { createNewContact } from "../services/createNewContact";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const updateContactList = () => {
    getAllContacts().then((res) => {
      setContacts(res);
    });
  };

  useEffect(() => {
    getAllContacts().then((res) => setContacts[res]);
  }, []);

  const store = {
    contacts,
  };

  const actions = {
    createNewContact,
    updateContactList,
  };

  return <AppContext.Provider value={contacts}>{children}</AppContext.Provider>;
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
