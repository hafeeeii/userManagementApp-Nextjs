"use client";
import { links } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  if(pathname === '/login') return null
  return (
    <div className="flex flex-col items-start h-full w-full bg-gray-200 min-w-[200px] border-r-2 border-gray-300 ">
      <ul className="`flex flex-col gap-[2vw] w-full">
        {links.map((link,index) => (
          <Link href={link.href} className="cursor-pointer" key={index}>
          <li
            key={link.link}
            className={`sidebar-btn capitalize font-normal  ${pathname === link.href && "bg-gray-500 text-white"}`}
          >
              {link.link}
          </li>
            </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
