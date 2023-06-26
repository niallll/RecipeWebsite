import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./assets/css/argon-design-system-react.min.css";
import "./assets/css/argon-design-system-react.css.map";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";

// const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
axios.defaults.baseURL = "http://localhost:3000/";

let baseUrl = window.location.href.slice(0, -window.location.search.length);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={baseUrl}>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
