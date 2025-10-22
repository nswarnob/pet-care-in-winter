import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import ServicesPage from "../Pages/ServicesPage";
import LoginPage from "../Pages/LoginPage";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index:true,
        element: <HomePage></HomePage>,
       loader: ()=>fetch("/Service.json"),
      },
      {
        path: "/services",
        element: <ServicesPage></ServicesPage>,
      },
      {
        path:"/login",
        element:<LoginPage></LoginPage>,
      },
      {
        path:"/signup",
        element:<SignUp></SignUp>
      }
    ],
  },

]);
