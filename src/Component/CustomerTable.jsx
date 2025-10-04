import React from "react";

const CustomerTable = ({ users }) => {
  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full text-left ">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-[#5c6c75] font-medium">Name</th>
            <th className="p-3 text-[#5c6c75] font-medium">Email</th>
            <th className="p-3 text-[#5c6c75] font-medium">Purchase Date</th>
            <th className="p-3 text-[#5c6c75] font-medium">Phone</th>
            <th className="p-3 text-[#5c6c75] font-medium">Spent</th>
            <th className="p-3 text-[#5c6c75] font-medium">Created At</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="">
              <td className="p-3">
                {user.firstname} {user.lastname}
              </td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.purchaseDate || "—"}</td>
              <td className="p-3">{user.phone || "—"}</td>
              <td className="p-3">{user.spent || "—"}</td>
              <td className="p-3">
                {user.createdAt
                  ? new Date(user.createdAt).toLocaleDateString()
                  : "—"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
