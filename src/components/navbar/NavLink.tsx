import Link from "next/link";
import React from "react";

const NavLink = ({ link, href }: { link: string; href: string }) => {
  return <Link href={href}>{link}</Link>;
};

export default NavLink;
