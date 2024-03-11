import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const Error = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col gap-8 px-6">
        <h2 className="uppercase text-yellow-500 font-bold text-5xl">
          you seems to be <br /> lost!
        </h2>
        <p className="text-gray-700 text-sm">
          The page you're looking for isn't availabe. <br /> Try searching again
          or use the Go Back button below.
        </p>

        <Link href="/">
          <button className="text-yellow-500 flex items-center gap-2">
            <FaArrowLeft />
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
