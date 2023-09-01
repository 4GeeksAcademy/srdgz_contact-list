import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import Home from "../views/Home.jsx";

import ErrorPage from "../views/ErrorPage.jsx";

const Router = () => {
  return (
    <div>
      <BrowserRouter basename="">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
