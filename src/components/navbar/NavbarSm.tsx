"use client";
import { navlinks } from "@/lib/data";
import React from "react";
import NavLink from "./NavLink";
import { useAppContext } from "@/context";
type NavbarSmProps = {
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavbarSm = ({ setIsClicked }: NavbarSmProps) => {
  const { isLogged, setIsLogged } = useAppContext();
  function handleCloseButton() {
    setIsClicked((prev) => !prev);
  }
  return (
    <div className="relative z-50">
      <div className="flex flex-col  gap-3  font-medium capitalize items-center py-4 ">
        <div onClick={handleCloseButton}>
          <NavLink link="home" href="/" />
        </div>
        <div onClick={handleCloseButton}>
          <NavLink link="users" href="/users" />
        </div>
        {navlinks.map((link, index) => (
          <div key={index} onClick={handleCloseButton}>
            <NavLink link={link.link} href={link.href} />
          </div>
        ))}

        {!isLogged ? (
          <div onClick={handleCloseButton}>
            <NavLink link="login" href="/login" />
          </div>
        ) : (
          <button
            onClick={() => {
              setIsLogged(false);
              handleCloseButton();
            }}
            className="bg-red-500 hover:bg-red-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded"
          >
            Logout
          </button>
        )}
      </div>
      <p
        className="absolute top-2 right-3 bg-black text-white px-3 rounded-full"
        onClick={handleCloseButton}
      >
        X
      </p>
    </div>
  );
};

export default NavbarSm;
