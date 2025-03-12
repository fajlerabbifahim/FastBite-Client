import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Route from "./routes/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Route} />
  </StrictMode>
);
