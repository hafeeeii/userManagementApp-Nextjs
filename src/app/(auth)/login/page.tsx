
import React from "react";
import { MdFacebook } from "react-icons/md";

import LoginForm from "@/components/loginForm/LoginForm";

const Login = () => {
  return (
    <div className=" h-screen flex flex-col  justify-center items-center bg-gray-200 md:px-10  w-full">
      <div className=" sm:max-w-[450px] w-[90vw]  ">
        <h4 className="font-bold text-lg">Get&apos;s Started.</h4>
        <p className="mt-2 mb-5 sm:mb-10 font-medium text-xs text-gray-500">
          Don&apos;t have an account?{" "}
          <span className="text-blue-700">Register</span>{" "}
        </p>
        <div className="flex gap-3 justify-center flex-wrap ">
          <button className="w-80  lg:w-fit whitespace-nowrap flex gap-2 items-center p-4  border border-blue-700 font-semibold text-sm rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="20px"
              height="20px"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              />
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              />
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              />
            </svg>
            Sign In With Google
          </button>
          <button className="w-80 lg:w-fit whitespace-nowrap flex gap-2 items-center p-4  bg-blue-500 font-semibold text-sm rounded-md text-white">
            <MdFacebook size={20} />
            Sign In With Facebook
          </button>
        </div>
        <div className="flex items-center gap-4 justify-center py-6">
          <div className="h-[1px] w-32 bg-gray-300"></div>
          <p className="font-semibold text-gray-600">or</p>
          <div className="h-[1px] w-32 bg-gray-300"></div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
