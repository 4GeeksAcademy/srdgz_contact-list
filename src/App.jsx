import Router from "./routes/Router.jsx";
import React from "react";

import { AppContextProvider } from "./context/AppContext.jsx";

function App() {
  return (
    <AppContextProvider>
      <Router />
    </AppContextProvider>
  );
}

export default App;
