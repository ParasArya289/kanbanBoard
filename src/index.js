import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { ContextProvider } from "./context/context";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </StrictMode>
);
