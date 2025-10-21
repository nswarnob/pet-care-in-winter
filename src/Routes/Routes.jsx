import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import HomePage from "../Pages/HomePage";
import ServicesPage from "../Pages/ServicesPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index:true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/services",
        element: <ServicesPage></ServicesPage>,
      },
    ],
  },
]);
