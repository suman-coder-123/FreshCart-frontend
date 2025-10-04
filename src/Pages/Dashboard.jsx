import React from "react";
// import { ShoppingCart, Users, DollarSign } from "lucide-react";
import { BsCurrencyDollar } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";

export default function DashboardHeader() {
  return (
    <div>
        <div
        className="relative h-70 w-full bg-cover bg-center rounded-xl my-10 "
        style={{ backgroundImage: `url("https://freshcart-next-js.vercel.app/images/banner/grocery-banner.png")`}}
        >
        <div className="z-10 max-w-lg p-15">
          <h1 className="text-3xl font-bold mb-2 text-[#21313c]">Welcome back! FreshCart</h1>
          <p className="text-[#5c6c75] mb-4">
            FreshCart is simple & clean design for developer and designer.
          </p>
          <button className="px-5 py-2 bg-[#0aad0a] text-white font-medium rounded-lg shadow hover:bg-green-700 transition">
            Create Product
          </button>
        </div>
         </div>
        

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Earnings */}
        <div className="bg-white p-6 rounded-2xl shadow flex justify-between items-center">
          <div>
            <p className="text-gray-500">Earnings</p>
            <h2 className="text-3xl font-bold mt-1">$93,438.78</h2>
            <p className="text-gray-400 text-sm">Monthly revenue</p>
          </div>
          <span className="bg-red-100 p-3 rounded-full">
            <BsCurrencyDollar  className="text-red-500 w-6 h-6" />
          </span>
        </div>

        {/* Orders */}
        <div className="bg-white p-6 rounded-2xl shadow flex justify-between items-center">
          <div>
            <p className="text-gray-500">Orders</p>
            <h2 className="text-3xl font-bold mt-1">42,339</h2>
            <p className="text-gray-400 text-sm">
              <span className="font-bold">35+</span> New Sales
            </p>
          </div>
          <span className="bg-yellow-100 p-3 rounded-full">
            <HiOutlineShoppingCart className="text-yellow-500 w-6 h-6" />
          </span>
        </div>

        {/* Customers */}
        <div className="bg-white p-6 rounded-2xl shadow flex justify-between items-center">
          <div>
            <p className="text-gray-500">Customer</p>
            <h2 className="text-3xl font-bold mt-1">39,354</h2>
            <p className="text-gray-400 text-sm">
              <span className="font-bold">30+</span> new in 2 days
            </p>
          </div>
          <span className="bg-blue-100 p-3 rounded-full">
            <HiOutlineUsers  className="text-blue-500 w-6 h-6" />
          </span>
        </div>
      </div>

     
    </div>
  );
}
