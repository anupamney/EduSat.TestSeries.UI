import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider maxSnack={4} autoHideDuration={7000} preventDuplicate>
        <App />
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
);
