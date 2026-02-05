import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import CSS files that are needed globally
import "./css.ts";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
