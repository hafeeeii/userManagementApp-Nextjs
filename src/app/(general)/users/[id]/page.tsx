import UserDetailItem from "@/components/userDetail/UserDetailItem";
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
  let userDetail: UserData = await useFetch(`/users/${newId}`);

  return (
    <div className="w-full h-fit p-2 sm:p-20 flex gap-4 flex-wrap justify-center">
      {userDetail && (
        <>
          <UserDetailItem label="Name" value={userDetail.name} />
          <UserDetailItem label="Username" value={userDetail.username} />
          <UserDetailItem label="Phone" value={userDetail.phone} />
          <UserDetailItem label="Email" value={userDetail.email} />
          <UserDetailItem label="Website" value={userDetail.website} />
          <UserDetailItem label="Company" value={userDetail.company.name} />
          <UserDetailItem
            label="Company Catchphrase"
            value={userDetail.company.catchPhrase}
          />
          <UserDetailItem label="City" value={userDetail.address.city} />
          <UserDetailItem label="Street" value={userDetail.address.street} />
          <UserDetailItem label="Zipcode" value={userDetail.address.zipcode} />
        </>
      )}
    </div>
  );
};

export default UserDetails;
