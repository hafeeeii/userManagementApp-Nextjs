"use client";
import { navlinks } from "@/lib/data";

import React from "react";
import NavLink from "./NavLink";
import { useAppContext } from "@/context";

const Navbar = () => {
  const { isLogged, setIsLogged } = useAppContext();

  return (
    <div className="px-10 py-5 flex items-center bg-gray-200 justify-between  ">
      <h1 className="font-bold text-xl">App</h1>
      <div className="flex gap-10  font-medium capitalize items-center">
        {navlinks.map((link, index) => (
          <NavLink link={link.link} href={link.href} key={index} />
        ))}
        {!isLogged ? (
          <NavLink link="login" href="/login" />
        ) : (
          <button onClick={() => setIsLogged(false)} className="bg-red-500 hover:bg-red-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Logout</button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
