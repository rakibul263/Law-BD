import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import ProfileDetails from "../Pages/ProfileDetails/ProfileDetails";
import BookedConsultations from "../Pages/BookedConsultations/BookedConsultations";
import Blogs from "../Pages/Blogs/Blogs";

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
        }, 
        {
          path: "/Blogs",
          loader: () => fetch("Question.json"),
          element: <Blogs />,
        }
      ]
    }
]);