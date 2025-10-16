import React  , {useState}from 'react'
import freshcart from '../assets/Images/freshcart.svg'
import reset from '../assets/Images/reset.svg'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../Component/Footer'
import axios from 'axios'
import Swal from 'sweetalert2'

const Reset = () => {
  const [resetData , setResetData] = useState({email:"" , password:""});
    const handleChange=(e)=>{
      const {name, value}=e.target;
      setResetData((prevData)=>{
        const updated ={...prevData, [name]:value};
        return updated ;
      });
    };
  
     let set = useNavigate();
    const handleSubmit =(e)=>{
      e.preventDefault();

      axios.post("https://freshcart-backend-do1f.vercel.app/reset", {resetData}).then ((res)=>{
         if (res.data.status) {
                Swal.fire({
                  text: "Sigin success",
                  icon: "success",
                });
                set("/signin");
        
              } else {
                Swal.fire({
                  icon: "error",
                  title: "invalid email",
                });
              }
      })
    };
  return (
    <div>
            <div className='flex  flex-col md:flex-row justify-between  items-center  px-20 py-3 font-medium text text-[#21313c] shadow-[0px_2px_4px_rgba(0,0,0,0.18)]'>
              <div className='mb-3 md:mb-0'>
                  <img src={freshcart} alt="logo" className='h-8 md:h-10' />
              </div>
              <div className='flex items-center gap-1 text-sm md:text-base '>
                   <p>Already have an account? </p>
                   <Link to="/signin" className='text-[#0aad0a] hover:underline'>Sign In </Link>
              </div>  
            </div>
      
            <div className='flex items-center justify-center my-20  bg-white'>
                      <div className="flex flex-col-reverse  md:flex-row lg:flex-row  max-w-6xl w-full items-center">
      
                      <div className=" flex w-1/2 justify-center  ">
                  <img src={reset} alt="image" className='w-3/4 lg:w-2/3 xl:w-1/2 img-fluid' />
              </div>
              <div className='w-full md:w-1/2 px-4 sm:px-6 md:px-8 lg:px-12 mt-4 md:mt-0'>
                      <h2 className='text-xl sm:text-2xl lg:text-3xl  font-bold text-[#21313c] mb-1 sm:mb-2 '>Forgot your password?</h2>
                  <p className='text-gray-500 mb-6 text-sm sm:text-base '>Please enter the email address associated with your <br  className='hidden sm:block '/> account and We will email you a link to reset your.<br  className='hidden sm:block '/>password.</p>
                  <form onSubmit={handleSubmit} action="" className="space-y-4">
                      
                      <input type="email" name='email' placeholder='Email'
                       value={resetData.email} 
                       onChange={handleChange} 
                        className=' w-2/3  px-3 py-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-100 border-gray-400'/>
                      
                      <input required
                       type="password"
                       name="password"
                       placeholder="*****"
                       value={resetData.password}
                       onChange={handleChange}
                       className=" w-2/3  px-3 py-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-100 border-gray-400"
              />
                      <button type='submit' className='w-2/3 py-2 bg-[#0aad0a] text-white rounded-lg hover:bg-green-700 transition border-gray-400'>Reset Password</button>
                      <button className='block w-2/3 py-2 bg-gray-100 text-black rounded-lg hover:bg-gray-200 transition border-gray-400'>Back </button>
                  </form>
              </div>
      
              </div>
              </div>

              <div>
                <Footer/>
              </div>
    </div>
  )
}

export default Reset
