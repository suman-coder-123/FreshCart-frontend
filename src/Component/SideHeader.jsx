import React from 'react'
import { CiBellOn } from "react-icons/ci";

const SideHeader = () => {
  return (
    <div>
      <div className="flex justify-between items-center px-5 py-4 ">
      <input
        type="text"
        placeholder="Search"
        className="border rounded-lg px-3 py-2 bg-transparent text-gray-400 font-medium focus:outline-none focus:ring-4 focus:ring-green-100"
      />
      <div className="flex items-center space-x-4 px-3">
        <button>
            <CiBellOn className='text-2xl text-[#5c6c75]'/>
        </button>
        <img
          src=""
          alt="profile"
          className="w-8 h-8 rounded-full"
        />
      </div>
    </div>

    </div>
  )
}

export default SideHeader
