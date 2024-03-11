import React from 'react'

const UserDetailItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="bg-white w-fit py-2 px-7 rounded-md capitalize shadow-sm border  tracking-wide hover:bg-gray-50">
    <h4 className="font-bold">{label}:</h4>
    <p>{value}</p>
  </div>
  )
}

export default UserDetailItem