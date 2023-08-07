import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import React from "react";
import "./global.scss";

export const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="main container gap-5">
      <Navbar />

      <div className="menuContainer flex  px-2 py-3">
        <Menu />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default layout;
