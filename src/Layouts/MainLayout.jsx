import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div >
      <header>
        <Navbar></Navbar>
      </header>
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default MainLayout;
