import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CountryDataProvider } from "./context/countryDataContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CountryDataProvider>
      <App />
    </CountryDataProvider>
  </React.StrictMode>
);
