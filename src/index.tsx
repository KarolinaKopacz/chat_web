import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider>
      <App />
    </RouterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
