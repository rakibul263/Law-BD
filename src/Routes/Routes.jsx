import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ProfileDetails from "../Pages/ProfileDetails/ProfileDetails";
import BookedConsultations from "../Pages/BookedConsultations/BookedConsultations";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          loader: () => fetch("LawyerData.json"),
          element: <Home />
        },
        {
          path: "/ProfileDetails/:id",
          loader: () => fetch(`LawyerData.json`),
          element: <ProfileDetails />,
        },
        {
          path: "/BookedConsultations",
          loader: () => fetch("LawyerData.json"),
          element: <BookedConsultations />,
        }
      ]
    }
]);