import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import "./normalise.css";
import "./global.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Thrift from "./pages/Work/Thrift.jsx";
import Sindhol from "./pages/Work/Sindhol";
import SmallWeb from "./pages/Work/SmallWeb";
import BrowserProject from "./pages/Work/BrowserProject";
import { NavBarContextProvider } from "./contexts/NavBarContext";
import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/thrift",
//     element: <Thrift />,
//   },
//   {
//     path: "/sindhol",
//     element: <Sindhol />,
//   },
//   {
//     path: "/small-web",
//     element: <SmallWeb />,
//   },
//   {
//     path: "/browser-project",
//     element: <BrowserProject />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
