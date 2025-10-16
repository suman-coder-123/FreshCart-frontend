import React, { useEffect, useState } from 'react'
import { Link , useNavigate } from 'react-router-dom'
import ProductTable from '../Component/ProductTable'
import axios from 'axios';


const Product = () => {
    const navigate= useNavigate();

    const [product, setProduct] =useState([]);

    useEffect (() =>{
      axios.get("https://freshcart-backend-opal.vercel.app/products").then((res) =>{
        if (res.data.status){
          setProduct(res.data.ourproducts);
        }
      });
    } ,[]);

  return (
    <div>
      <div className='flex justify-between items-center'>
        <div>
            <p className='font-bold text-3xl text-[#21313c]'>Products</p>
            <p className='text-sm text-[#21313c]'>Dashboard</p>
        </div>
        
        <button  onClick={()=> navigate('/admin/addproduct')} className='flex items-center px-4 py-2 rounded-lg gap-3 bg-[#0aad0a] text-white'>Add Product</button>
    
      </div>

      <div className=' my-10 mx-5 rounded-xl shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]'>
        <div className="py-5 px-5  flex justify-between items-center ">
        <input
        type="text"
        placeholder="Search Product "
        className="border rounded-lg px-2 py-1 bg-transparent text-gray-400 font-medium focus:outline-none focus:ring-4 focus:ring-green-100"/>

        <div className="flex border rounded-lg px-2 py-1 bg-transparent text-[#21313c] font-medium focus:outline-none focus:ring-4 focus:ring-green-100" >
          <select name="status" id="status">
            <option value="">Status</option>
            <option value="">Active</option>
            <option value="">Draft</option>
            <option value="">Deactive</option>
          </select>
        </div>
      
        </div>

        <ProductTable  product={product}/>

        


      </div>

      

    </div>
  )
}

export default Product
