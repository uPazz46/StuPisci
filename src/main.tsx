import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Permesso from "./pages/cameriere/Permesso.tsx";
import Ordinazioni from "./pages/cameriere/Ordinazioni.tsx";
import Menu from "./pages/cameriere/Menu.tsx";
import Cameriere from "./pages/Cameriere.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/cameriere",
    element: <Cameriere />,
  },
  {
    path: "/cameriere/Menu",
    element: <Menu />,
  },
  {
    path: "/cameriere/Permesso",
    element: <Permesso />,
  },
  {
    path: "/cameriere/Ordinazioni",
    element: <Ordinazioni />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
