import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import UserInfo from '../src/homework/27.2 home/add.tsx';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UserInfo />
  </StrictMode>
);