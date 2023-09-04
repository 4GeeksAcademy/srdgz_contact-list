import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Home from "../views/Home.jsx";
import FormPage from "../views/FormPage.jsx";
import EditPage from "../views/EditPage.jsx";
import ErrorPage from "../views/ErrorPage.jsx";

const Router = () => {
  return (
    <div>
      <BrowserRouter basename="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NewContact" element={<FormPage />} />
          <Route path="/EditContact/:id" element={<EditPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
