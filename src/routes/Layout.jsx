import React from "react";
import { Outlet } from "react-router";
import Footer from "../components/Footer/Footer";
import Forms from "../components/Forms/Forms";
import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Forms />
      <Footer />
    </>
  );
};

export default Layout;
