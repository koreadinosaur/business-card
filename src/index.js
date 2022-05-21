import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.module.css";
import App from "./app";
import Authentication from "./firebase/auth";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App auth={Authentication} />
  </BrowserRouter>
);
