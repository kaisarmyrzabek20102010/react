import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./exam10/add";
import { CartProvider } from "./exam10/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);