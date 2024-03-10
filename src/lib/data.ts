import { SessionOptions } from "iron-session";
import { Link, SessionData } from "./type";



export const navlinks: Link[] = [
  {
    link: "about",
    href: "/about",
  },
  {
    link: "contact",
    href: "/contact",
  },
];

export const sessionOptions:SessionOptions = {
password:process.env.SECRET_KEY!,
cookieName:'authentication',
cookieOptions:{
  httpOnly:true,
  secure:process.env.NODE_ENV === 'production'
}
}

export const defaultSession:SessionData={
  isLoggedIn:false,
}
