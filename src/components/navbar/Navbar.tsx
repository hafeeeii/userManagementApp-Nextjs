"use client";
import { navlinks } from "@/lib/data";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { signOut, useSession } from "next-auth/react";
import MenuBox from "./MenuBox";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="bg-white relative    sm:px-10 px-5 py-4 flex items-center  justify-end w-full z-50 rounded-b-lg border md:border-none shadow-sm">
      <div className="md:flex gap-5  font-medium capitalize items-center hidden">
        {navlinks.map((link, index) => (
          <NavLink link={link.link} href={link.href} key={index} />
        ))}
        {session?.user && (
          <button
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}
            className="bg-red-500 hover:bg-red-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
          >
            Logout
          </button>
        )}
      </div>

      <div className="md:hidden w-full flex justify-between items-center">
        <Link href="/" className="font-bold  text-xl  ">
          Somplifi
        </Link>
        <h4
          onClick={() => setIsClicked((prev) => !prev)}
          className="font-medium"
        >
          menu+
        </h4>
      </div>

      <div className=" z-50  fixed top-0 left-0 w-full">
        {isClicked && (
          <MenuBox isClicked={isClicked} setIsClicked={setIsClicked} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
