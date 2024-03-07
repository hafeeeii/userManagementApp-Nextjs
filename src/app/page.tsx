import Navbar from "@/components/navbar/Navbar";
import NavbarSm from "@/components/navbar/NavbarSm";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="hidden md:block">
        <Navbar />
      </div>

      <div className="w-full relative h-[50vh] -z-10">
        <Image
          src="https://images.unsplash.com/photo-1709424111307-a0edc36fb50a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill
          alt="img"
          className="object-cover"
        />
      </div>

      <h1 className="font-bold text-[10vw] uppercase">home</h1>
    </div>
  );
};

export default page;
