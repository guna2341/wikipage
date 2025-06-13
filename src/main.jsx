import React from "react";
import ReactDOM from "react-dom/client";
import { HeroUIProvider } from "@heroui/system";
import App from "./App.jsx";
import "./index.css";  
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HeroUIProvider>
      <BrowserRouter>
        <App />
        </BrowserRouter>
      </HeroUIProvider>
  </React.StrictMode>,
);