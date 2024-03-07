import { UserData } from "@/lib/type";
import Link from "next/link";
import React from "react";

const Card = ({ data }: { data: UserData[] }) => {
  return (
    <div className="lg:hidden block min-h-[80vh] w-full my-10">
      <div className="flex flex-wrap gap-7 justify-center">
        {data.map((user, index) => (
          <Link
            href={`/users/${user.id}`}
            key={index}
            className="w-[90%] md:w-[300px] h-fit bg-gray-100 shadow-md py-3 px-5 rounded-lg text-sm "
          >
            <h2 className="font-bold"> {user.name}</h2>

            <h2 className="text-gray-700 mt-2"> {user.email}</h2>
            <h2 className="text-gray-700"> {user.phone}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;
