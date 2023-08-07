import React from "react";
import "./components.scss";
import Link from "next/link";
import { IoMdHome } from "react-icons/io";
import { HiUser } from "react-icons/hi";
import { menu } from "@/helpers/Data";
import Image from "next/image";

const Menu = () => {
  return (
    <div className="flex flex-col menu  me-11 bg-slate-800 ">
      {menu.map((data, index) => {
        return (
          <>
            <div className="item mt-2 gap-2">
              <h1>{data.title}</h1>
              <div className="links flex flex-col justify-center  ">
                {data.listItems.map((link) => {
                  return (
                    <>
                      <div className="flex items-center  gap-3 rounded-md  hover:bg-slate-800 pe-20 ps-5 py-2">
                        <Image
                          src={link.icon}
                          alt="icon"
                          width={20}
                          height={20}
                        ></Image>
                        <Link
                          className="flex items-center justify-center gap-2"
                          href={`/dashboard/${link.url}`}
                        >
                          {link.title}
                        </Link>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Menu;
