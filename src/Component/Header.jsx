import React from 'react'
import freshcart from '../assets/Images/freshcart.svg'
import { FiSearch } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { FiHeart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { IoGridOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <div>
        <p className='bg-[#f0f2f3] text-[#5c6c75] font-medium p-1 pl-20'>Super Value Deals - Save more with coupons</p>      
      </div>
      <div className='flex justify-between items-center px-20 py-7'>
        <div>
          <img src={freshcart} alt="logo" />
        </div>
        <div className='flex items-center gap-2 w-full max-w-xl' >
          <div className='flex items-center border rounded-lg px-3 py-2 w-full border-gray-400 '>
          <input type="text"
          placeholder='search your product '
          className="flex-1 bg-transparent text-gray-600 font-medium" />
          <FiSearch   className="text-black 700 text-xl"/>
          </div>       
          <button className='flex items-center gap-1 border rounded-lg px-4 py-2 text-gray-400 border-gray-400
 font-medium hover:bg-gray-100'>
            <GrLocation    className="text-gray-800 text-lg " /> Location</button>
        </div >
        <div className='flex  items-center gap-3'>
          <button>
            <FiHeart   className="text-gray-800 text-xl "/>
          </button>
          <button>
            <FiUser  className="text-gray-800 text-xl "/>
          </button>
          <button>
            <FiShoppingBag  className="text-gray-800 text-xl "/>
          </button>
        </div>
      </div>

      <div className='px-20 flex items-center gap-6  '>
        <button className='flex items-center px-4 py-2 rounded-lg gap-3 bg-[#0aad0a] text-white'>
          <IoGridOutline className='text-white' />
          All Departments
        </button>

        <div className='flex items-center gap-1'>
          <label htmlFor="home" className='pb-1'>Home</label>
          <select name="home" id="home" >
            <option value="default"> </option>
          </select>
           </div>
           <div className='flex items-center gap-1'>
            <label htmlFor="shop" className='pb-1'>Shop</label>
          <select name="shop" id="shop" >
            <option value="default"> </option>
          </select>
           </div>
          <div className='flex items-center gap-1'>
            <label htmlFor="stores" className='pb-1'>Stores</label>
          <select name="stores" id="stores" >
            <option value="default"> </option>
          </select>
          </div>
          <div className='flex items-center gap-1'>
            <label htmlFor="menu" className='pb-1'>Mega Menu</label>
          <select name="menu" id="menu" >
            <option value="default"> </option>
          </select>
          </div>
          <div className='flex items-center gap-1'>
            <label htmlFor="pages" className='pb-1'>Pages</label>
          <select name="pages" id="pages" >
            <option value="default"> </option>
          </select>
          </div> 
          <div className='flex items-center gap-1'>
          <label htmlFor="account" className='pb-1'>Account</label>
          <select name="account" id="account" >
            <option value="default"> </option>
          </select>
          </div> 
        
        <p className='pb-1'>
          Dashboard
        </p>
        <p className='pb-1'>
          Docs
        </p>
      </div>





    </>
  )
}

export default Header
