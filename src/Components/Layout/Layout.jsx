import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Layout = ({ userData, setuserData }) => {
  return (
    <>
      <Navbar userData={userData} setuserData={setuserData} />
      <Outlet />
      <Footer userData={userData} />
    </>
  );
};

export default Layout;
