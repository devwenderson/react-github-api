import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";

// Pages
import Home from "./pages/Home.tsx"
import About from "./pages/About.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sobre/",
        element: <About />,
      },
    ]
  },
])

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
