"use client";

import { signIn } from "next-auth/react";
import React, { useRef } from "react";

const LoginForm = () => {
  const username = useRef('')
  const password = useRef('')

  const submit = async ()=>{
    
    const result = await signIn('credentials',{
      
      username:username.current,
      password:password.current,
      redirect:true,
      callbackUrl:'/'
    })
  }

  return (
    <form  className="mb-4  " onSubmit={submit}>
   
      <div className="bg-white  py-5 px-5 rounded-lg shadow-sm">
        <div className="mb-5 md:w-full">
          <label
            htmlFor="name"
            className="block text-xs mb-2 font-bold text-gray-700"
          >
            Username
          </label>
          <input
            autoComplete="off"
            className="  w-full text-sm border border-gray-400 rounded-md p-3 outline-none focus:shadow-outline"
            type="text"
            id="email"
            placeholder="Username"
            name="username"
            required
            onChange={(e)=>username.current = e.target.value}
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
            name="password"
            required
            onChange={(e)=>password.current = e.target.value}
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
  );
};

export default LoginForm;
