import useFetch from "@/hooks/useFetch";
import { UserData } from "@/lib/type";
import React from "react";

const UserDetails = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  let newId = parseInt(params.id);
  let data: UserData = await useFetch(`/users/${newId}`);

  return (
    <div className=" w-full h-screen bg-gray-200 p-2 sm:p-20 ">
      <div className="flex gap-4 flex-wrap justify-center">
        <div className="bg-white w-fit py-2 px-7 rounded-sm capitalize shadow-md tracking-wide">
          <h4 className="font-bold">name:</h4>
          <p > {data.name}</p>
        </div>
        <div className="bg-white w-fit py-2 px-7 rounded-sm capitalize shadow-md tracking-wide">
          <h4 className="font-bold">username:</h4>
          <p > {data.username}</p>
        </div>
        <div className="bg-white w-fit py-2 px-7 rounded-sm capitalize shadow-md tracking-wide">
          <h4 className="font-bold">phone:</h4>
          <p > {data.phone}</p>
        </div>
        <div className="bg-white w-fit py-2 px-7 rounded-sm capitalize shadow-md tracking-wide">
          <h4 className="font-bold">email:</h4>
          <p > {data.email}</p>
        </div>
        <div className="bg-white w-fit py-2 px-7 rounded-sm capitalize shadow-md tracking-wide">
          <h4 className="font-bold">website: </h4>
          <p > {data.website}</p>
        </div>
        <div className="bg-white w-fit py-2 px-7 rounded-sm capitalize shadow-md tracking-wide">
          <h4 className="font-bold">company: </h4>
          <p > {data.company.name}</p>
        </div>
        <div className="bg-white w-fit py-2 px-7 rounded-sm capitalize shadow-md tracking-wide">
          <h4 className="font-bold">company catchphrase: </h4>
          <p > {data.company.catchPhrase}</p>
        </div>
        <div className="bg-white w-fit py-2 px-7 rounded-sm capitalize shadow-md tracking-wide">
          <h4 className="font-bold">city: </h4>
          <p > {data.address.city}</p>
        </div>
        <div className="bg-white w-fit py-2 px-7 rounded-sm capitalize shadow-md tracking-wide">
          <h4 className="font-bold">street: </h4>
          <p > {data.address.street}</p>
        </div>
        <div className="bg-white w-fit py-2 px-7 rounded-sm capitalize shadow-md tracking-wide">
          <h4 className="font-bold">zipcode: </h4>
          <p > {data.address.zipcode}</p>
        </div>
       
      </div>
    </div>
  );
};

export default UserDetails;
