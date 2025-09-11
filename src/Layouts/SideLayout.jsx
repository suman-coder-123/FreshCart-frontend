import React from 'react'
import { Outlet } from "react-router-dom";
import Sidebar from "../Component/Sidebar";
import SideHeader from '../Component/SideHeader';


const SideLayout = () => {
  return (
    <div className='flex '>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <SideHeader/>
         <main className='p-4 flex-1 overflow-auto'>
          <Outlet/>
        </main>
      </div>
     
    </div>
  )
}

export default SideLayout
