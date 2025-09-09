import React, { useState } from 'react'
import freshcart from '../assets/Images/freshcart.svg'
import Signup from '../assets/Images/Signup.svg'
import { Link } from 'react-router-dom'



const Registration = () => {

  const [formData , setFormData] =useState({firstname:"", lastname:"", email:"",password:""});
const handleChange = (e) => {
  const { name, value } = e.target  ;
  setFormData((prevData) => {
    const updated = { ...prevData, [name]: value };
    console.log("Updated form data:", updated); 
    return updated;
  });
};

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <div className='flex  flex-col md:flex-row justify-between items-center px-20 py-3 font-medium text text-[#21313c] shadow-[0px_2px_4px_rgba(0,0,0,0.18)]'>
        <div className='mb-3 md:mb-0'>
            <img src={freshcart} alt="logo" className='h-8 md:h-10' />
        </div>
        <div className='flex items-center gap-1 text-sm md:text-base '>
             <p>Already have an account? </p>
             <Link to="/signin" className='text-[#0aad0a] hover:underline'>Sign In </Link>
        </div>  
      </div>

      <div className='flex items-center justify-center  mt-10  xl:mt-20 bg-white'>
                <div className="flex flex-col-reverse  md:flex-row lg:flex-row  max-w-6xl w-full items-center">

                <div className=" flex w-1/2 justify-center  ">
            <img src={Signup} alt="image" className='w-3/4 lg:w-2/3 xl:w-1/2 img-fluid' />
        </div>
        <div className='w-full md:w-1/2 px-4 sm:px-6 md:px-8 lg:px-12 mt-8 md:mt-0'>
                <h2 className='text-xl sm:text-3xl lg:text-4xl  font-bold text-[#21313c] mb-1 sm:mb-2 '>Get Start Shopping</h2>
            <p className='text-gray-600 mb-6 text-sm sm:text-base'>Welcome to FreshCart! Enter your email to get <br  className='hidden sm:block '/> started.</p>
            <form onSubmit={handleSubmit} action="" className="space-y-4">
                <div className= "flex space-x-4  ">
                    <input type="text" name='firstname' placeholder='First Name'value={formData.firstname} onChange={handleChange} className='w-full  sm:w-1/2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border-gray-400'/>
                    <input type="text" name='lastname' placeholder='Last Name'value={formData.lastname} onChange={handleChange} className='w-full sm:w-1/2 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border-gray-400'/>
                </div>  
                <input type="email" name='email' placeholder='Email'value={formData.email} onChange={handleChange}  className=' w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border-gray-400'/>
                <input type="password" name='password' placeholder='*****'value={formData.password} onChange={handleChange} className='  w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 border-gray-400' />
                <button type='submit' className='w-full py-3 bg-[#0aad0a]  text-white rounded-lg hover:bg-green-700 transition border-gray-400'>Register</button>
                <p>By continuing, you agree to our <span>  Terms of Service</span> &<span>Privacy Policy</span> </p>
            </form>
        </div>

        </div>
        </div>
    </>
  )
}

export default Registration
