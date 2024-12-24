import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/Home.jsx";
import Dashboard from "./routes/Dashboard/Dashboard.jsx";
import Chat from "./routes/Chat/Chat.jsx";
import RootLayout from "./layouts/rootLayout/RootLayout.jsx";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout.jsx";
import SignInPage from "./routes/SignInPage/SignInPage.jsx";
import SignUpPage from "./routes/SignUpPage/SignUpPage.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/chats/:id",
            element: <Chat />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
