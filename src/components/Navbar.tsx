"use client";
import Image from "next/image";
import LOGO from "../app/favicon.ico";
import React from "react";
import "./components.scss";
import {
  IoMdNotificationsOutline,
  IoMdSearch,
  IoMdSettings,
  IoMdQrScanner,
} from "react-icons/io";
import { CiFilter } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="flex justify-between ms-5  my-5">
      <div className="logo flex items-center">
        <Image src={LOGO} alt="logo" className="w-10 h-10 rounded-full me-3" />
        <h1>Smile Dashboard</h1>
      </div>
      <div className="content me-10 flex justify-between items-center gap-5">
        <IoMdSearch />
        <IoMdQrScanner />
        <CiFilter />
        <div className="notification flex items-center">
          <IoMdNotificationsOutline />
          <span className=" bg-red-800 text-white no-underline rounded-full">
            0
          </span>
        </div>
        <div className="flex items-center">
          <Image
            src={LOGO}
            alt="User"
            className="w-10 h-10 rounded-full me-2"
          ></Image>
          <h3 className="">Name</h3>
        </div>
        <IoMdSettings />
      </div>
    </div>
  );
};

export default Navbar;
