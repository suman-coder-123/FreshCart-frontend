import React from "react";
import { CiGrid41 } from "react-icons/ci";
import { CiCircleList } from "react-icons/ci";

export default function Sellers() {
  const vendors = [
    {
      name: "BigBasket",
      id: "#015",
      email: "lizin@armyspy.com",
      grossSale: "$560.00",
      earning: "$120.00",
      image: "https://freshcart-next-js.vercel.app/images/stores-logo/stores-logo-6.svg",
    },
    {
      name: "Swiggy Instamart",
      id: "#014",
      email: "tured@jourrapide.com",
      grossSale: "$780.00",
      earning: "$360.00",
      image: "https://freshcart-next-js.vercel.app/images/stores-logo/stores-logo-7.svg",
    },
    {
      name: "Online Grocery Mart",
      id: "#013",
      email: "liturname@einrot.com",
      grossSale: "$460.00",
      earning: "$175.00",
      image: "https://freshcart-next-js.vercel.app/images/stores-logo/stores-logo-6.svg",
    },
  ];

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Vendors</h1>
          <p className="text-gray-500 mt-1">Dashboard / Sellers</p>
        </div>
        <div className="flex gap-3 mt-3 sm:mt-0">
          <button className="bg-green-500 text-white p-2 rounded-lg">
            <CiGrid41 size={20} />
          </button>
          <button className="bg-gray-200 p-2 rounded-lg">
            <CiCircleList size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {vendors.map((vendor, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-all"
          >
            <div className="flex justify-center mb-4">
              <img
                src={vendor.image}
                alt={vendor.name}
                className="w-20 h-20 object-contain"
              />
            </div>

            <h2 className="text-xl font-semibold text-center text-gray-800">
              {vendor.name}
            </h2>
            <p className="text-center text-[#5c6c75] font-medium text-sm mt-1">
              Seller ID: {vendor.id}
            </p>
            <p className="text-center  text-[#5c6c75]  font-medium mt-2">{vendor.email}</p>

            <div className="flex justify-between mt-6 text-center">
              <div>
                <p className=" text-[#5c6c75] font-medium text-sm">Gross Sale</p>
                <p className="text-lg font-semibold text-gray-800">
                  {vendor.grossSale}
                </p>
              </div>
              <div>
                <p className=" text-[#5c6c75] font-medium text-sm">Earning</p>
                <p className="text-lg font-semibold text-gray-800">
                  {vendor.earning}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
