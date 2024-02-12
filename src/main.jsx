import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login.jsx";
import Sidenav from "./pages/Sidenav.jsx";
import DataEmployee from './components/DataEmployee.jsx'
import Da from './components/Da.jsx'
import Das from './components/Das.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sidenav" element={<Sidenav />} />
      <Route path="/s" element={<Das />} />
    </Routes>
  </BrowserRouter>
);
