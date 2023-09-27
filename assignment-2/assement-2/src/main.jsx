import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./assets/css/styles.css";
import "./index.css";
import Index from "./page/index/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Index />
  </React.StrictMode>
);
