import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
// -----------

import store from "./redux/store";
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById("root")).render(
  // робить два запита
  <>
   {/* <React.StrictMode> */}
    <BrowserRouter>
{/* ---------- */}
      <Provider store={store} >
        <App />
      </Provider>
{/* ---------- */}
    </BrowserRouter>
   {/* </React.StrictMode> */}
  </>
);
