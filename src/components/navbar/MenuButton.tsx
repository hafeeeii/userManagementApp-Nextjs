"use client";
import { navlinks } from "@/lib/data";
import React, { useState } from "react";
import NavLink from "./NavLink";
import LogoutForm from "../logoutForm/LogoutForm";

const MenuButton = ({isLoggedIn}:{isLoggedIn:boolean}) => {
  const [isClicked, setIsClicked] = useState(false);
  function handleClose(){
    setIsClicked((prev) => !prev)
  }
  return (
    <div className="relative z-50 md:hidden">
      <h4 onClick={handleClose}>menu+</h4>

      {isClicked && (
        <div className="fixed top-0 left-0 w-full  flex flex-col  gap-3  font-medium capitalize items-center py-4 text-white bg-black">
          <div className="text-center w-full">
            <div>
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

            {isLoggedIn ? (
             
              <button onClick={handleClose}>
              <LogoutForm/>
              </button>
            ) : (
              <div>
              <NavLink link="login" href="/login" />
            </div>
            )}
          </div>
          <p
            onClick={() => setIsClicked((prev) => !prev)}
            className="absolute top-2 right-3 bg-black text-white px-3 rounded-full"
          >
            X
          </p>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
