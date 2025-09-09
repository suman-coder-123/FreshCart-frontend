import React from 'react'
import { Link } from 'react-router-dom'
import amazonpay from '../assets/Images/amazonpay.svg'
import american from '../assets/Images/american.svg'
import appstore from '../assets/Images/appstore.svg'
import googleplay from '../assets/Images/googleplay.svg'
import mastercard from '../assets/Images/mastercard.svg'
import paypal from '../assets/Images/paypal.svg'
import visa from '../assets/Images/visa.svg'
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoInstagram } from "react-icons/io5";


const Footer = () => {
  return (
    <>
    <div className='bottom-0 bg-[#f0f3f2] py-10 w-full'> 
      <div className='mx-20'>
      <div className=' px-5 lg:flex block '>
        <div >
            <h5 className='text-[#21313c] font-medium  mb-2'>Categories</h5>
            <div className='flex lg: flex justify-between text-lg sm:text-md '>
                <div className='flex-col whitespace-nowrap  pr-5 '>
                  <div className='mb-2  '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Vegetables & fruits</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Breakfast & instant food</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Bakery & Biscuits</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Atta, rice & dal</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Sauces & spreads</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'> Organic & gourmet</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Baby Care</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Cleaning essentials</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Personal care</Link>
                  </div>
                </div>

                
                <div className='flex-col  whitespace-nowrap  pr-5 '>
                  <div className='mb-2  '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Dairy, bread & eggs</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Cold drinks & juices</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Tea ,coffee & drinks</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Masala, oil & more</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Chicken , meat & fish</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Paan corner</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Pharma & wellness</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Home & wellness</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Pet care</Link>
                  </div>
                </div>          
            </div>
        </div>

        <div className='pl-0 block lg:pl-4  md:flex'>
          <div className='flex md:flex justify-between my-10 '>
          <div className='pr-4'>
            <h5 className='text-[#21313c] font-medium  mb-2 whitespace-nowrap'>Get to know us</h5>
            <div className='flex-col  text-base pr-5 whitespace-nowrap '>
                  <div className='mb-2  '>
                    <Link to="#"  className='text-[#5c6c75]  text-decoration-none hover:text-[#0aad0a] transition '>Company</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>About</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Blog</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Help Center</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Our Value</Link>
                  </div>
            </div>
          </div>
    
          <div className='pr-4'>
            <h5 className='text-[#21313c] font-medium  mb-2'>For Consumers</h5>
            <div className='flex-col  text-base pr-5 whitespace-nowrap '>
                  <div className='mb-2  '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition '>Payments</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Shipping</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Product Returns</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>FAQ</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Shop Checkout</Link>
                  </div>
            </div>
          </div>
        </div>

        <div className='flex md:flex justify-between my-10'>
          <div className='pr-4'>
            <h5 className='text-[#21313c] font-medium  mb-2'>Become a Shopper</h5>
            <div className='flex-col  text-base pr-5 whitespace-nowrap '>
                  <div className='mb-2  '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition '>Shopper Opportunities</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Become a Shopper </Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Earnings</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Ideas & Guides</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>New Retailers</Link>
                  </div>
            </div>
          </div>

          <div className='pr-4'>
            <h5 className='text-[#21313c] font-medium  mb-2'>Freshcart programs</h5>
            <div className='flex-col  text-base pr-5 whitespace-nowrap '>
                  <div className='mb-2  '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition '>Freshcart programs</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Gift Cards</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Promos & Coupons</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Freshcart Ads</Link>
                  </div>
                  <div className='mb-2 '>
                    <Link to="#"  className='text-[#5c6c75]   text-decoration-none hover:text-[#0aad0a] transition'>Careers</Link>
                  </div>
            </div>
          </div>
          </div>

        </div>

      </div>


      <div className='bottom-t bottom-b  py-10  '>
        <div className='block  xl:flex justify-between items-center'>
           <div className='flex py-5 xl:py-1'>
            <p className='text-[#21313c] font-medium pr-4 sm:text-base whitespace-nowrape'>Payments Partner</p>
            <Link><img src={amazonpay} alt="amazonpay" className='pr-4' /></Link>
            <Link><img src={american} alt="american"  className='pr-4'/></Link>
            <Link><img src={mastercard} alt="mastercard"  className='pr-4' /></Link>
            <Link><img src={paypal} alt="paypal"  className='pr-4' /></Link>
            <Link><img src={visa} alt="visa"  className='pr-4' /></Link>
           </div>


           <div className='flex '>
            <p className='text-[#21313c] font-medium pr-4 items-center pt-3 ' >Get deliveries with FreshCart</p>
            <Link to="https://play.google.com/store/games?hl=en_IN"><img src={googleplay} alt="googleplay" className='pr-4' /></Link>
            <Link to="https://www.apple.com/in/app-store/" ><img src={appstore} alt="appstore" className='pr-4' /></Link>
           </div>

        </div>
      </div>

      <div className='py-5 bottom-t bottom-b '>
        <div className=' block  lg:flex justify-between  '>
          <div className=' '>
            <p className='text-[#5c6c75] text-sm '>© 2022 - 2025 FreshCart eCommerce HTML Template. All rights reserved. Powered by</p>
            <Link to="https://codescandy.com/" className='text-[#0aad0a] text-sm ' >Codescandy</Link>
          </div>

          <div className='flex space-x-3 py-4 lg:py-1'>
            <p className='text-[#5c6c75] text-sm  '>Follow us on</p>
            <Link to="#" className="w-6 h-6  border-gray-400 border rounded flex items-center justify-center "><IoLogoFacebook className='text-gray-400 hover:text-green-500' />
            </Link>
            <Link to="#" className="w-6 h-6 border-gray-400 border rounded flex items-center justify-center "><IoLogoTwitter  className='text-gray-400' />
            </Link>
            <Link to="#" className="w-6 h-6 border-gray-400 border rounded flex items-center justify-center "><IoLogoInstagram className='text-gray-400'  />
            </Link>
            
          </div>
        </div>
      </div>

      </div>
    </div> 
    </>
  )
}

export default Footer
