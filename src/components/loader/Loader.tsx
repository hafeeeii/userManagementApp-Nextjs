"use client";
import React from "react";
import {  TailSpin} from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <TailSpin
        visible={true}
        height="40"
        width="40"
        color="black"
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </div>
  );
};

export default Loader;
