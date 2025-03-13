import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import router from "./routes/Routes.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";

// Create a client
const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
  {/* <AuthProvider> */}
  <QueryClientProvider client={queryClient}>
    {/* <HelmetProvider> */}
    <RouterProvider router={router}></RouterProvider>
    {/* </HelmetProvider> */}
  </QueryClientProvider>
  {/* </AuthProvider> */}
</StrictMode>,
);
