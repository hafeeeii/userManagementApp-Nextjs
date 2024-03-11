"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { PiUsersThree } from "react-icons/pi";

const Sidebar = () => {
  const pathname = usePathname();


  return (
    <div className="flex flex-col items-start h-full w-full bg-white  py-2 shadow-sm ">
      <Link href='/' className="font-bold  text-xl  px-16">Somplifi</Link>
      <div className="w-[85%] mx-auto">
        <div className="flex items-center font-medium pb-5 pt-10 text-gray-400 text-xs px-3">
          <div className="w-3 h-[1px] bg-gray-300  mr-2"></div>
          <h4>APPS</h4>
        </div>
        <div className=" w-full ">
          <Link href='/'
            className={`flex items-center gap-3 font-semibold tracking-wide text-sm  py-2 px-3 rounded-md mb-2 ${
              pathname === "/" && "bg-gray-200 text-blue-700"
            }`}
          >
            <AiOutlineHome size={23} className="text-gray-500 " />
        <h4>Home</h4>
          </Link>
          <Link href='/users'
            className={`flex items-center gap-3 font-semibold tracking-wide text-sm  py-2 px-3 rounded-md mb-2 ${
              pathname === "/users" && "bg-gray-200 text-blue-700"
            }`}
          >
            <PiUsersThree size={23} className="text-gray-500" />
            <h4 >Users</h4>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
