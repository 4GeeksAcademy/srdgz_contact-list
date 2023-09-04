import React, { createContext, useContext, useState, useEffect } from "react";

import { getAllContacts } from "../services/getAllContacts";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    getAllContacts().then((res) => setContacts[res]);
  }, []);
  const store = {contacts}
  return <AppContext.Provider value={contacts}>{children}</AppContext.Provider>;
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
