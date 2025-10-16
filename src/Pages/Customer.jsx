import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomerTable from "../Component/CustomerTable";

const Customer = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://freshcart-backend-do1f.vercel.app/allusers").then((res) => {
      if (res.data.status) {
        setUsers(res.data.ourusers);
      }
    });
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-3xl text-[#21313c]">Customers</p>
          <p className="text-sm text-[#21313c]">Dashboard</p>
        </div>

        <button className="flex items-center px-4 py-2 rounded-lg gap-3 bg-[#0aad0a] text-white">
          Add new Customers
        </button>
      </div>

      <div className="my-10 mx-5 py-5 rounded-xl shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
        <div className="py-5 px-5">
          <input
            type="text"
            placeholder="Search customer "
            className="border rounded-lg px-2 py-1 bg-transparent text-gray-400 font-medium focus:outline-none focus:ring-4 focus:ring-green-100"
          />
        </div>

        <CustomerTable users={users} />
      </div>
    </div>
  );
};

export default Customer;
