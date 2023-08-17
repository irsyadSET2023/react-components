import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home";
import Private from "./Pages/Private";
import Public from "./Pages/Public";
import Page404 from "./Pages/Page404";
import { useContext } from "react";
import { AdminContext } from "./App";
import Components from "./Pages/Components";

function Router() {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  console.log(isAdmin);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/private",
      element: isAdmin ? <Private /> : <Navigate to="/" />,
    },
    {
      path: "/public",
      element: <Public />,
    },
    {
      path: "/components",
      element: <Components />,
    },
    {
      path: "*",
      element: <Page404 />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
