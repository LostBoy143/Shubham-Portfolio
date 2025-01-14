import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReactGA from "react-ga";
import { inject } from "@vercel/analytics";

inject();

const trackingID = "G-EDFDY8QNEZ"; // Replace with your actual ID
ReactGA.initialize(trackingID);

createRoot(
  document.getElementById("root")
).render(
  <StrictMode>
    <App />
  </StrictMode>
);
