"use client";
import { navlinks } from "@/lib/data";

import React, { useState } from "react";
import NavLink from "./NavLink";
import { useAppContext } from "@/context";
import NavbarSm from "./NavbarSm";
import { usePathname } from "next/navigation";


const Navbar = () => {
  const { isLogged, setIsLogged } = useAppContext();
  const [isClicked, setIsClicked] = useState(false);
  let pathname = usePathname()

  if(pathname === '/login') return;

  return (
    <div className="bg-white  sm:px-10 px-5 py-4 flex items-center  justify-end w-full z-50 rounded-b-lg shadow-sm  ">
      <div className="md:flex gap-5  font-medium capitalize items-center hidden  ">
        {navlinks.map((link, index) => (
          <NavLink link={link.link} href={link.href} key={index} />
        ))}
        {!isLogged ? (
          <NavLink link="login" href="/login" />
        ) : (
          <button
            onClick={() => setIsLogged(false)}
            className="bg-red-500 hover:bg-red-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
          >
            Logout
          </button>
        )}
      </div>
      <button
        className="md:hidden block font-medium"
        onClick={() => setIsClicked((prev) => !prev)}
      >
        menu+
      </button>
      {isClicked && (
        <div className="fixed top-0 left-0 bg-slate-200 w-full md:hidden duration-500 z-50">
          <NavbarSm setIsClicked={setIsClicked} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
