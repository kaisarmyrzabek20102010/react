import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import UserInfo from '../src/homework/27.2 home/add.tsx'
import All from "./exam/28/add";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <All />
  </StrictMode>
);