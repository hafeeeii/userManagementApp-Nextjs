'use client'
import { navlinks } from "@/lib/data";
import React, { useState } from "react";
import NavLink from "./NavLink";
import LogoutForm from "../logoutForm/LogoutForm";
import MenuButton from "./MenuButton";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {

  const {data:session} = useSession()


  return (
    <div className="bg-white   sm:px-10 px-5 py-4 flex items-center  justify-end w-full z-50 rounded-b-lg shadow-sm  ">
      <div className="md:flex gap-5  font-medium capitalize items-center hidden  ">
        {navlinks.map((link, index) => (
          <NavLink link={link.link} href={link.href} key={index} />
        ))}
        {session?.user ? (
          <div onClick={()=>signOut()}>

            <LogoutForm />
          </div>
        ) : (
          <div onClick={()=>signIn()}>

            <NavLink link="login" href="/login"  />
          </div>
        )}
      </div>
      {/* <MenuButton isLoggedIn={session.isLoggedIn}/> */}
    </div>
  );
};

export default Navbar;
