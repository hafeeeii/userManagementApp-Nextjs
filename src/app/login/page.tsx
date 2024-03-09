"use client";

import { useAppContext } from "@/context";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdFacebook } from "react-icons/md";

const Login = () => {
  let [name, setName] = useState("");
  let [password, setPassword] = useState("");
  let router = useRouter();
  let { setIsLogged } = useAppContext();

  let handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name === "demo" && password === "demo") {
      router.push("/");
      setIsLogged(true);
    } else {
      toast.error("Invalid credentials! Please try Again");
    }
  };
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-black">
      <div className=" ">
        <h4 className="font-bold text-lg">Get's Started.</h4>
        <p className="mt-2 mb-10 font-medium text-xs text-gray-500">
          Don't have an account? <span className="text-blue-700">Register</span>{" "}
        </p>
        <div className="flex  gap-3">
          <button className=" whitespace-nowrap flex gap-2 items-center px-4 py-4 border border-blue-700 font-semibold text-sm rounded-md">
            <Image src="/google.svg" width={20} height={20} alt="icon" />
            Sign In With Google
          </button>
          <button className=" whitespace-nowrap flex gap-2 items-center px-4 py-4 border bg-blue-500 font-semibold text-sm rounded-md text-white">
            <MdFacebook size={20} />
            Sign In With Facebook
          </button>
        </div>
        <div className="flex items-center gap-4 justify-center py-6">
          <div className="h-[1px] w-32 bg-gray-200"></div>
          <p className="font-semibold text-gray-600">or</p>
          <div className="h-[1px] w-32 bg-gray-200"></div>
        </div>

        <form className="mb-4  " onSubmit={handleSubmit}>
          <div className="bg-white  py-5 px-5 rounded-lg shadow-sm">
            <div className="mb-5 md:w-full">
              <label htmlFor="name" className="block text-xs mb-2 font-bold text-gray-700">
                Username
              </label>
              <input
                autoComplete="off"
                className="  w-full text-sm border border-gray-400 rounded-md p-3 outline-none focus:shadow-outline"
                type="text"
                id="email"
                placeholder="Username"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="mb-6 md:w-full">
              <label
                htmlFor="password"
                className="block text-xs mb-2  font-bold text-gray-700"
              >
                Password
              </label>
              <input
                className="w-full border border-gray-400 rounded-md text-sm p-3 outline-none focus:shadow-outline"
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>

          <div className="flex items-center my-6 justify-between font-medium text-xs">
            <label className="flex gap-2   text-gray-400 items-center">
              <input type="checkbox" />
              <h4>Remember me</h4>
            </label>
            <h4 className="text-blue-500">Forgot your password?</h4>
          </div>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white uppercase text-sm font-semibold px-4 py-5  rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
