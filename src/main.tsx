import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./homework/29.2/add.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
