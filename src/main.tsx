import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Index from "./Index";
import "./index.css";

// 👇 give correct type to root element
const rootElement = document.getElementById("root") as HTMLElement;

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Index />
    </StrictMode>
  );
}
