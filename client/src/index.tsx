import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./globals.css";
import App from "./App";
import Layout from "./components/Layout/Layout";

ReactDOM.render(
  <React.StrictMode>
    <Layout>
      <Router>
        <App />
      </Router>
    </Layout>
  </React.StrictMode>,
  document.getElementById("root")
);
