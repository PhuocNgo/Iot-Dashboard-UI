import React from "react";
import ReactDOM from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store"; // Import store

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyles from "./globalStyles";
import Dashboard from "./components/mainContent/dashboard";
import Profile from "./components/mainContent/profile/profile";
import { actionColumns, sensorsDataColumns } from "./columns";
import TablePage from "./components/mainContent/tablePage";
import TablePageNew from "./components/mainContent/tablePage/indexNew";
import NewDashboard from "./components/mainContent/dashboard copy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyles>
      <Provider store={store}>
        {" "}
        {/* Cung cấp store cho ứng dụng */}
        <Router>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<Dashboard />} />
              <Route path="profile" element={<Profile />} />
              <Route
                path="sensors-data"
                element={
                  <TablePageNew
                    collectionName={"sensor_datas"}
                    columns={sensorsDataColumns}
                  />
                }
              />
              <Route
                path="history"
                element={
                  <TablePage
                    collectionName={"action_histories"}
                    columns={actionColumns}
                  />
                }
              />
              <Route path="new-dashboard" element={<NewDashboard />} />
            </Route>
          </Routes>
        </Router>
      </Provider>
    </GlobalStyles>
  </React.StrictMode>
);

reportWebVitals();
