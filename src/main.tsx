import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Permesso from "./pages/cameriere/Permesso.tsx";
import Ordinazioni from "./pages/cameriere/Ordinazioni.tsx";
import Menu from "./pages/cameriere/Menu.tsx";
import Cameriere from "./pages/Cameriere.tsx";
import Resoconto from "./pages/cameriere/Resoconto.tsx";
import { OrderProvider } from "./components/OrderContext.tsx";

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
  {
    path: "/cameriere/Resoconto",
    element: <Resoconto />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OrderProvider>
      <RouterProvider router={router} />
    </OrderProvider>
  </React.StrictMode>
);
