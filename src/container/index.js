import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import Footer from "../components/common/Footer";

const HomeLayout = () => {
  return (
    <div className="section">
      <NavBar />
      <div
        className="main"
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeLayout;
