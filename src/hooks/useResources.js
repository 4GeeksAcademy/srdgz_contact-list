import { useState, useEffect } from "react";

import { getAllContacts } from "../services/getAllContacts";

const useResources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    getAllContacts().then((res) => {
      setResources(res).catch((err) => console.log(err));
    });
  }, []);
  return resources;
};

export default useResources;
