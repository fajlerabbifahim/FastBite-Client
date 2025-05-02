import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  // useQuery,
  // useMutation,
  // useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import router from "./routes/Routes.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";
import { ThemeProvider } from "./hooks/ThemeContext.jsx";
import { Provider } from "react-redux";
import store from "./app/store.js";
import GlobalLoader from "./components/GlobalLoader/GlobalLoader.jsx";
import "animate.css";
// Create a client
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            {/* <HelmetProvider> */}
            <GlobalLoader />
            <RouterProvider router={router}></RouterProvider>
            {/* </HelmetProvider> */}
          </QueryClientProvider>
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  </StrictMode>
);
