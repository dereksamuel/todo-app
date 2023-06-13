import React from "react";
import ReactDOM from "react-dom/client";

import { TodosProvider } from "./context/todos.jsx";
import App from "./App.jsx";

import "./styles/styles.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <TodosProvider>
    <App />
  </TodosProvider>,
);
