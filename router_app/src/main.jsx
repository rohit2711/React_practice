import * as React from "react";
import * as ReactDOM from "react-dom/client";
// import Root from "./routes/root";
import Contact from "./routes/contact";
import Root, { loader as rootLoader } from "./routes/root";


import{
  createBrowserRouter,
  RouterProvider,
}from "react-router-dom";

import "./index.css";
import ErrorPage from "./error-page";


const router = createBrowserRouter([
  {
    path : "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
)

