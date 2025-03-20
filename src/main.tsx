import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./homework/28.3/add";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

