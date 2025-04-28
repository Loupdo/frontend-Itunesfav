import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./context/context.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* provide context for the whole App */}
    <AppProvider>
      <App />
    </AppProvider>
  </StrictMode>
);
