"use client";
import { UserData } from "@/lib/type";
import React, { useState } from "react";
import Card from "../card/Card";
import { useRouter } from "next/navigation";

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
  const totalPages = Math.ceil(userData.length / itemPerPage);
  // FUNCTON TO RENDER NUMBER OF PAGES
  const renderPageNumbers = () => {
    let pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          disabled={currentPage === i}
          className={` border py-1 px-5 text-xs ${
            currentPage === i && "bg-gray-500 text-white"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="w-full h-screen flex flex-col items-center  ">
      <div className="my-10 hidden lg:block ">
        <table className="leading-loose    ">
          <thead className="capitalize text-xs  bg-gray-200 border-b-2  border-gray-400 ">
            <tr>
              <th className="text-left whitespace-nowrap py-4 px-8 font-semibold tracking-wide  ">
                Name <span className="xl:hidden"> & email</span>
              </th>
              <th className="text-left whitespace-nowrap py-4 px-8 font-semibold tracking-wide">
                UserName
              </th>
              <th className="text-left whitespace-nowrap py-4 px-8 font-semibold tracking-wide hidden xl:block">
                {" "}
                Email
              </th>
              <th className="text-left whitespace-nowrap py-4 px-8 font-semibold tracking-wide">
                Phone
              </th>
              <th className="text-left whitespace-nowrap py-4 px-8 font-semibold tracking-wide ">
                Website
              </th>
            </tr>
          </thead>
          <tbody className=" text-gray-700  ">
            {currentItems?.map((user, index) => (
              <tr
                key={index}
                className="border-b-2 border-gray-200 text-xs font-medium cursor-pointer hover:bg-gray-100"
                onClick={() => router.push(`/users/${user.id}`)}
              >
                <td className=" min-w-[16vw]  whitespace-nowrap  py-4 px-8 ">
                  {user?.name}
                  <div className="xl:hidden text-gray-500">{user?.email}</div>
                </td>
                <td className="   min-w-[16vw] whitespace-nowrap  py-4 px-8 ">
                  {user?.username}
                </td>
                <td className="  min-w-[16vw]   whitespace-nowrap  py-4 px-8  hidden xl:block">
                  {user?.email}
                </td>
                <td className="  min-w-[16vw]  whitespace-nowrap  py-4 px-8 ">
                  {user?.phone}
                </td>
                <td className="  min-w-[16vw]  whitespace-nowrap  py-4 px-8  ">
                  {user?.website}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Card data={currentItems} />

      <div>
        <button
          className="mr-2"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          ⬅️
        </button>
        {renderPageNumbers()}
        <button
          className="ml-2 "
          onClick={nextPage}
          disabled={indexOfLastItem >= userData.length}
        >
          ➡️
        </button>
      </div>
    </div>
  );
};

export default Table;
