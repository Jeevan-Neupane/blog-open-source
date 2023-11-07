import React from "react";
import Navbar from "../components/others/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/others/Footer";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
