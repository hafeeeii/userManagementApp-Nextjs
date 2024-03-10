
import LoginForm from "@/components/loginForm/LoginForm";

import Image from "next/image";
import React from "react";
import { MdFacebook } from "react-icons/md";


const Login = () => {

  return (
    <div className=" h-screen flex flex-col justify-center items-center px-10 ">
      <div className=" ">
        <h4 className="font-bold text-lg">Get&apos;s Started.</h4>
        <p className="mt-2 mb-10 font-medium text-xs text-gray-500">
          Don&apos;t have an account? <span className="text-blue-700">Register</span>{" "}
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

        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
