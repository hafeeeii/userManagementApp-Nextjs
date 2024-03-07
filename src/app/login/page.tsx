"use client";

import { useAppContext } from "@/context";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

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
    <div className="antialiased bg-gray-200 text-gray-900 font-sans  ">
      <div className="flex md:items-center items-start pt-12 md:pt-0 w-full h-screen">
        <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
          <span className="block w-full text-xl uppercase font-bold mb-4">
            Login
          </span>
          <form className="mb-4" onSubmit={handleSubmit}>
            <div className="mb-4 md:w-full">
              <label htmlFor="name" className="block text-xs mb-1">
                Username or Email
              </label>
              <input
                autoComplete="off"
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="text"
                id="email"
                placeholder="Username"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <div className="mb-6 md:w-full">
              <label htmlFor="password" className="block text-xs mb-1">
                Password
              </label>
              <input
                className="w-full border rounded p-2 outline-none focus:shadow-outline"
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <button className="bg-green-500 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
