import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

const HomeLayout = () => {
  return (
    <div className="admin-dashboard">
      <NavBar />
      <div
        className="main-dashboard"
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
