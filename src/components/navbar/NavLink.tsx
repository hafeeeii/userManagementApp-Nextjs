import Link from "next/link";
import React from "react";

const NavLink = ({ link, href }: { link: string; href: string }) => {
  return <Link href={href} className="font-semibold tracking-wide text-sm  py-2 px-3 rounded-md hover:bg-gray-200">{link}</Link>;
};

export default NavLink;
