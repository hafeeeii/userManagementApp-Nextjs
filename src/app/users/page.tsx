import Table from "@/components/Table";
import useFetch from "@/hooks/useFetch";
import React from "react";

const Users = async () => {
  const data = await useFetch("/users");
  console.log(data);

  return (
    <div>
      <Table userData={data} />
    </div>
  );
};

export default Users;
