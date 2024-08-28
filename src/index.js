import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./globalStyles";
import Dashboard from "./components/mainContent/dashboard";
import Profile from "./components/mainContent/profile/profile";
import SensorsData from "./components/mainContent/sensorsData";
import ActionsHistory from "./components/mainContent/actionsHistory";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="sensors-data" element={<SensorsData />} />
            <Route path="history" element={<ActionsHistory />} />
          </Route>
        </Routes>
      </Router>
    </GlobalStyles>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
