import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import AppWrongRouting from "./AppWrongRouting";
import AppWithMyRouterDom from "./AppWithMyRouterDom";
import AppWithReactWouter from "./AppWithReactWouter";
import AppWithReactRouterDOM from "./AppWithReactRouterDom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>Неправильная маршрутизация</h1>
    <AppWrongRouting />
    <hr />
    <h1>Своя маршрутизация</h1>
    <AppWithMyRouterDom />
    <hr />
    <h1>React Wouter</h1>
    <AppWithReactWouter />
    <hr />
    <h1>React Router DOM (v6)</h1>
    <AppWithReactRouterDOM />
  </React.StrictMode>
);
