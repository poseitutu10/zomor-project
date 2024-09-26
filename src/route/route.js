import { createBrowserRouter } from "react-router-dom";
import Experience from "../components/Experience";
import Register from "../components/Register";
import Home from "../components/Home";
import Single from "../components/screens/Single/Single";
import Curator from "../components/Curator";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/join",
    element: <Curator />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/experience/:id",
    element: <Single />,
  },
]);
