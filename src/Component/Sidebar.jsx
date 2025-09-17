import React from 'react'
import { Link } from 'react-router-dom';
import freshcart from '../assets/Images/freshcart.svg'
import { BsHouse } from "react-icons/bs";
import { MdProductionQuantityLimits } from "react-icons/md";
import { CiCircleList } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { BsArrow90DegDown } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div>
      <div className='w-60 border-dashed border-r border-gray-300'>
        <div className='py-4 px-4'>
             <img src={freshcart} alt="logo" />
        </div>
       <div >
        <Link className='flex items-center space-x-4 px-5 py-4 text-[#5c6c75] font-medium  mx-3 hover:bg-gray-100 border-gray-200 rounded-xl transition '>
        <BsHouse />
        <p>Dashboard</p>
        </Link>     
       </div>

       <div className='px-4 py-3'>
        <p className='text-[#5c6c75] text-sm  px-5 py-4'>Store Management</p>
        <div >
        <Link to="product" className='flex items-center space-x-4 px-5 py-2 my-3  w-full text-[#5c6c75] font-medium  hover:bg-gray-100 border-gray-200 rounded-xl transition '>
        <MdProductionQuantityLimits />
        <p>Product</p>
        </Link>
        </div>
        
        <div >
        <Link  className='flex items-center space-x-4 px-5 py-2 my-3 text-[#5c6c75] font-medium  hover:bg-gray-100 border-gray-200 rounded-xl transition '>
        <CiCircleList  />
        <p>Catagories</p>
        </Link>
        </div>

         <div >
        <Link className='flex items-center space-x-4 px-5 py-2  my-3 text-[#5c6c75] font-medium  hover:bg-gray-100 border-gray-200 rounded-xl transition '>
        <IoBagOutline   />
        <p>Orders</p>
        </Link>
        </div>

         <div >
        <Link className='flex items-center space-x-4 px-5 py-2 my-3 text-[#5c6c75] font-medium  hover:bg-gray-100 border-gray-200 rounded-xl transition '>
        <IoStorefrontOutline    />
        <p>Sellers/Venders</p>
        </Link>
        </div>

         <div >
        <Link to="customer" className='flex items-center space-x-4 px-5 py-2 my-3 text-[#5c6c75] font-medium  hover:bg-gray-100 border-gray-200 rounded-xl transition '>
        <IoPeopleOutline />
        <p>Customers</p>
        </Link>
        </div>

         <div >
        <Link className='flex items-center space-x-4 px-5 py-2 my-3 text-[#5c6c75] font-medium  hover:bg-gray-100 border-gray-200 rounded-xl transition '>
        <CiStar  />
        <p>Reviews</p>
        </Link>
        </div>

        <div >
        <Link className='flex items-center space-x-4 px-5 py-2 my-3 text-[#5c6c75] font-medium  hover:bg-gray-100 border-gray-200 rounded-xl transition '>
        <BsArrow90DegDown />
        <p>Menu Level</p>
        </Link>
        </div>

       </div>



      </div>
    </div>
  )
}

export default Sidebar
