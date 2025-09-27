import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import freshcart from '../assets/Images/freshcart.svg'
import { FiSearch } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { FiHeart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { IoGridOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {

  return (
    <>
      <div>
        <p className='bg-[#f0f2f3] text-[#5c6c75] font-medium p-1 pl-20'>Super Value Deals - Save more with coupons</p>      
      </div>
      <div className='flex justify-between items-center px-20 py-7'>
        <div>
          <Link to="/home">
           <img src={freshcart} alt="logo" />
          </Link>  
        </div>
        <div className='flex items-center gap-2 w-full max-w-xl' >
          <div className=' hidden lg:flex items-center border rounded-lg px-3 py-2 w-full border-gray-400 '>
          <input type="text"
          placeholder='search your product '
          className="flex-1 bg-transparent text-gray-600 font-medium" />
          <FiSearch   className="text-black 700 text-xl"/>
          </div>       
          <button className=' hidden lg:flex items-center gap-1 border rounded-lg px-4 py-2 text-gray-400 border-gray-400
 font-medium hover:bg-gray-100'>
            <GrLocation    className="text-gray-800 text-lg " /> Location</button>
        </div >
        <div className='flex  items-center gap-3'>
          <Link to="/wishlist">
          <button>
            <FiHeart   className="text-gray-800 text-xl "/>
          </button>
          </Link>
          <button>
            <FiUser  className="text-gray-800 text-xl "/>
          </button>
          <Link to="/CartDetail">
          <button >
            <FiShoppingBag  className="text-gray-800 text-xl  cursor-pointer"/>
          </button>
           </Link>
          <button  className='lg:hidden '>
            <GiHamburgerMenu  className='text-green-500 text-2xl '/>
          </button>
         
        </div>
      </div>

      <div className='  hidden lg:flex px-20 items-center gap-6  '>
        <button className=' hidden lg:flex items-center px-4 py-2 rounded-lg gap-3 bg-[#0aad0a] text-white'>
          <IoGridOutline className='text-white' />
          All Departments
        </button>

        <div className=' flex items-center gap-1'>
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
          <Link to="/admin">
          Dashboard
          </Link>          
        </p>
        <p className='pb-1'>
          Docs
        </p>
      </div>

     {open && (
      < div className=' fixed max-w-lg inset-0 bg-white z-50 overflow-y-auto shadow-lg lg:hidden '>
      <div className='flex justify-between itmes-center px-3 my-5 lg:hidden '>
        <div>
          <img src={freshcart} alt="logo" />
        </div>

        <button onClick={()=>setOpen(false)} ><RxCross2 className='text-grey-700 w-5 h-5' /></button>
      </div>

      <div className='  flex items-center border rounded-lg px-3 py-2  mx-5 my-5 w-auto border-gray-400  lg:hidden'>
          <input type="text"
          placeholder='search your product '
          className="flex-1 bg-transparent text-gray-400 font-medium" />
          <FiSearch   className="text-black 700 text-xl"/>
          </div> 

          <div className=' px-4 py-2 mx-5  w-auto flex items-center justify-center rounded-lg gap-3 bg-[#0aad0a] text-white lg:hidden  '>        
          <IoGridOutline className='text-white' />
          <p> All Departments</p>
          </div>
      <div className=' px-5 my-7  items-center gap-6  lg:hidden '>
        <div className=' flex justify-between items-center pb-2 gap-1 font-medium'>
          <label htmlFor="home" className='pb-1 text-[#5c6c75]'>Home</label>
          <select name="home" id="home" className='text-[#5c6c75]' >
            <option value="default"> </option>
          </select>
           </div>
           <div className='flex justify-between  items-center  pb-2 gap-1 font-medium'>
            <label htmlFor="shop" className='pb-1 text-[#5c6c75]'>Shop</label>
          <select name="shop" id="shop" className='text-[#5c6c75]' >
            <option value="default"> </option>
          </select>
           </div>
          <div className='flex justify-between  items-center pb-2 gap-1 font-medium'>
            <label htmlFor="stores" className='pb-1 text-[#5c6c75]'>Stores</label>
          <select name="stores" id="stores" className='text-[#5c6c75]' >
            <option value="default"> </option>
          </select>
          </div>
          <div className='flex justify-between  items-center pb-2 gap-1 font-medium'>
            <label htmlFor="menu" className='pb-1 text-[#5c6c75]'>Mega Menu</label>
          <select name="menu" id="menu" className='text-[#5c6c75]' >
            <option value="default"> </option>
          </select>
          </div>
          <div className='flex justify-between  items-center pb-2 gap-1 font-medium'>
            <label htmlFor="pages" className='pb-1 text-[#5c6c75]'>Pages</label>
          <select name="pages" id="pages" className='text-[#5c6c75]' >
            <option value="default"> </option>
          </select>
          </div> 
          <div className='flex justify-between  items-center pb-2 gap-1 font-medium'>
          <label htmlFor="account" className='pb-1 text-[#5c6c75]'>Account</label>
          <select name="account" id="account" className='text-[#5c6c75]' >
            <option value="default"> </option>
          </select>
          </div> 
        
        <p className='text-[#5c6c75] pb-2 font-medium'>
          <Link to="/admin">
          Dashboard
          </Link>
          
        </p>
        <p className=' text-[#5c6c75] pb-2 font-medium'>
          Docs
        </p>
      </div>
    </div>
     )}



    </>
  )
}

export default Header
