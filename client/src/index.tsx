import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./globals.css";
import App from "./App";
import Layout from "./components/Layout/Layout";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Layout>
      <Router>
        <App />
      </Router>
    </Layout>
  </React.StrictMode>
);
