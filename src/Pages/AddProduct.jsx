import React from 'react'

const AddProduct = () => {
  return (
    <div>
      <div>        
        <div className='flex justify-between items-center'>
         <div>
            <p className='font-bold text-3xl text-[#21313c]'> Add New Products</p>
            <p className='text-sm text-[#21313c]'>Dashboard</p>
         </div>
         <button className='flex items-center px-4 py-2 rounded-lg gap-3 bg-gray-300 text-white'>Back to Products</button>
      </div>
      
      <div>
        <div className=' my-10 mx-5 p-5 rounded-xl shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]'>
            <h1 className='text-md font-medium text-[#5c6c75] ' >Product Information</h1>
            <div className='flex justify-between  items-center '>
                <div>
                    <label htmlFor="title" className='text-[#5c6c75] font-medium '>Title</label>
                    <input type="text" id='title' name='title' placeholder='Product Name' className='border-gray-300 rounded-lg text-[#5c6c75] font-medium' />
                </div>
                <div>
                    <label htmlFor="category">Product Catagory</label>
                    <select name="category" id="category">
                        <option value="">Product Category</option>
                        <option value="">Dairy, Bread & Eggs</option>
                        <option value="">Snacks & Munchies</option>
                        <option value="">Fruits & Vegetables</option>
                    </select>
                </div>
            </div>

            <div className='flex justify-between  items-center '>
                <div>
                    <label htmlFor="weight" className='text-[#5c6c75] font-medium '>Weight</label>
                    <input type="text" id='weight' name='weight' placeholder='Weight' className='border-gray-300 rounded-lg text-[#5c6c75] font-medium' />
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <select name="weight" id="weight">
                        <option value="">Select Unit</option>
                        <option value="">1</option>
                        <option value="">2</option>
                        <option value="">4</option>
                    </select>
                </div>
            </div>

            <div>
                <p className='text-md font-medium text-[#5c6c75]'>Product Images</p>
                <input type="url" placeholder='Enter Your Image URL ' name='image' id='image'  />
            </div>
        </div>
      </div>
        
      </div>
    </div>
  )
}

export default AddProduct
