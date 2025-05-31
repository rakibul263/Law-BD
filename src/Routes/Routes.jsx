import {
    createBrowserRouter,
  } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    }
]);