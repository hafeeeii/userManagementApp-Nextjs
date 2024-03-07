"use client";
import { links } from "@/lib/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col items-start py-6 h-full w-full bg-gray-200  ">
      <ul className="`flex flex-col gap-[2vw] w-full">
        {links.map((link) => (
          <Link href={link.href} className="cursor-pointer">
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
