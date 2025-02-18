
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { Edit } from "./router/edit";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/edit",
    element: <Edit />,
  },
]);
//+
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

