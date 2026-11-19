import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

// CSS imports
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./styles/global.css";
import "./styles/layout.css";
import "./styles/sidebar.css";
import "./styles/topbar.css";
import GlobalToast from "./components/Common/GlobalToast.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalToast />

      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
