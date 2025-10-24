import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import ServicesPage from "../Pages/ServicesPage";
import LoginPage from "../Pages/LoginPage";
import SignUp from "../Pages/SignUp";
import Loading from "../Components/Loading";
import ServicePrivateRoute from "./ServicePrivateRoute";
import MyProfile from "../Pages/MyProfile";
import Book from "../Pages/Book";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          index: true,
          element: <HomePage></HomePage>,
          loader: () => fetch(`${import.meta.env.BASE_URL}Service.json`),
          hydrateFallbackElement: <Loading></Loading>,
        },
        {
          path: "/services",
          element: (
            <ServicePrivateRoute>
              <ServicesPage></ServicesPage>
            </ServicePrivateRoute>
          ),
          loader: () => fetch(`${import.meta.env.BASE_URL}Service.json`),
          hydrateFallbackElement: <Loading></Loading>,
        },
        {
          path: "/login",
          element: <LoginPage></LoginPage>,
        },
        {
          path: "/signup",
          element: <SignUp></SignUp>,
        },
        {
          path: "/my-profile",
          element: (
            <ServicePrivateRoute>
              <MyProfile></MyProfile>
            </ServicePrivateRoute>
          ),
        },
        {
          path: "/book",
          element: (
            <ServicePrivateRoute>
              <Book></Book>
            </ServicePrivateRoute>
          ),
        },
      ],
    },
  ],
  {
    basename: "/pet-care-in-winter/",
  }
);
