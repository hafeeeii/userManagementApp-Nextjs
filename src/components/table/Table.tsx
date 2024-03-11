"use client";
import { UserData } from "@/lib/type";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const Table = ({ userData }: { userData: UserData[] }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 5;
  const indexOfLastItem = currentPage * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const currentItems = userData?.slice(indexOfFirstItem, indexOfLastItem);
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const totalPages = Math.ceil(userData?.length / itemPerPage);

  return (
    <div className="w-full h-screen md:h-fit flex flex-col  shadow-sm pb-4 rounded-lg ">
      <h4 className="font-bold  text-lg  py-6 px-4 ">Users</h4>
      <div className="scrollbar  overflow-x-auto  w-[100vw] md:w-[73vw] lg:w-[80vw] xl:w-full  ">

      <div className="w-full px-4  ">
        <table className="leading-loose table-auto  ">
          <thead className="capitalize text-sm  bg-blue-50  ">
            <tr>
              <th className=" text-left whitespace-nowrap py-4 px-8  tracking-wide  ">
                Name 
              </th>
              <th className=" text-left whitespace-nowrap py-4 px-8  tracking-wide">
                UserName
              </th>
              <th className=" text-left whitespace-nowrap py-4 px-8  tracking-wide ">
    
                Email
              </th>
              <th className=" text-left whitespace-nowrap py-4 px-8  tracking-wide">
                Phone
              </th>
              <th className=" text-left whitespace-nowrap py-4 px-8  tracking-wide ">
                Website
              </th>
            </tr>
          </thead>
          <tbody className=" text-gray-700  ">
            {currentItems?.map((user, index) => (
              <tr
                key={index}
                className=" text-xs font-semibold cursor-pointer hover:bg-blue-50"
                onClick={() => router.push(`/users/${user.id}`)}
              >
                <td className=" min-w-[16vw]  whitespace-nowrap  py-4 px-8 ">
                  {user?.name}
             
                </td>
                <td className="   min-w-[16vw] whitespace-nowrap  py-4 px-8 ">
                  {user?.username}
                </td>
                <td className="  min-w-[16vw]   whitespace-nowrap  py-4 px-8  ">
                  {user?.email}
                </td>
                <td className="  min-w-[16vw]  whitespace-nowrap  py-4 px-8 ">
                  {user?.phone}
                </td>
                <td className="  min-w-[10vw]  whitespace-nowrap  py-4 px-8  ">
                  {user?.website}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-end p-5 ">
        <button
          className="mr-2 bg-gray-200 px-2 py-1" 
          onClick={prevPage}
          disabled={currentPage === 1}
        >
         <FaAngleDoubleLeft />
        </button>
        <span className="text-xs text-gray-500 font-medium tracking-tight  ">
          Page {currentPage} to {totalPages} of {userData.length} Entries
        </span>
        <button
          className="ml-2 bg-gray-200 px-2 py-1"
          onClick={nextPage}
          disabled={indexOfLastItem >= userData.length}
        >
    <FaAngleDoubleRight />
        </button>
      </div>




      </div>
   
    </div>
  );
};

export default Table;
