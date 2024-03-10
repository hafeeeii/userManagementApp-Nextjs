"use client";
import { navlinks } from "@/lib/data";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { signOut } from "next-auth/react";
type MenuBoxProps = {
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuBox = ({ isClicked, setIsClicked }: MenuBoxProps) => {
  function handleCloseBtn (){
    setIsClicked((prev)=>!prev)
  }
  return (
    <div className=" z-50  fixed top-0 left-0 w-full ">
      {isClicked && (
        <div className=" flex flex-col gap-4    font-medium capitalize items-center py-4 text-black bg-gray-100">
         
            <div >
              <NavLink link="home" href="/" />
            </div>
            <div>
              <NavLink link="users" href="/users" />
            </div>
            {navlinks.map((link, index) => (
              <div key={index}>
                <NavLink link={link.link} href={link.href} />
              </div>
            ))}

            <button
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
              className="bg-red-500 hover:bg-red-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
            >
              Logout
            </button>
       
          <p className="absolute top-2 right-3 bg-black text-white px-3 rounded-full">
            X
          </p>
        </div>
      )}
    </div>
  );
};

export default MenuBox;
