import Table from "@/components/table/Table";
import useFetch from "@/hooks/useFetch";

import React from "react";

const Users = async () => {
  const data = await useFetch("/users");

  return (
    <div className=" w-full">
      <Table userData={data} />
    </div>
  );
};

export default Users;
