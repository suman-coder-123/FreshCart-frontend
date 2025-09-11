import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import ProductTable from '../Component/ProductTable'
import { Products } from '../Data/Products'


const Product = () => {
    const navigate= useNavigate();

  return (
    <div>
      <div className='flex justify-between items-center'>
        <div>
            <p className='font-bold text-3xl text-[#21313c]'>Products</p>
            <p className='text-sm text-[#21313c]'>Dashboard</p>
        </div>
        
        <button  onClick={()=> navigate('/addproduct')} className='flex items-center px-4 py-2 rounded-lg gap-3 bg-[#0aad0a] text-white'>Add Product</button>
    
      </div>

      <div className=' my-10 mx-5 rounded-xl shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]'>
        <div className="py-5 px-5  flex justify-between items-center ">
        <input
        type="text"
        placeholder="Search Product "
        className="border rounded-lg px-2 py-1 bg-transparent text-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-green-500"/>

        <div className="flex border rounded-lg px-2 py-1 bg-transparent text-[#21313c] font-medium focus:outline-none focus:ring-2 focus:ring-green-500" >
          <select name="status" id="status">
            <option value="">Status</option>
            <option value="">Active</option>
            <option value="">Draft</option>
            <option value="">Deactive</option>
          </select>
        </div>
      
        </div>

        <ProductTable products={Products}/>

        


      </div>

      

    </div>
  )
}

export default Product
