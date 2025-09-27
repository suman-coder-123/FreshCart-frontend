import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {
  const navigate = useNavigate();
    const [productData , setProductData] = useState({
        title:"", category:"",weight:"", weightUnit:"",image1:"",image2:"",image3:"",image4:"", image5:"", description:"",code:"", SKU:"",status:"", regularPrice:"", salePrice:"",
    });
    const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => {
      const updated = { ...prevData, [name]: value };
      return updated;
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post("http://localhost:5000/addproduct" ,{productData})
    .then((res) => {
            if (res.data.status) {
              Swal.fire({
                text: "Product Add",
                icon: "success",
              });
            } else {
              Swal.fire({
                icon: "error",
                title: "not Added........",
              });
            }
          })
          .catch((err) => {});
  }
  return (
    <div>

      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium text-3xl text-[#21313c]">
            Add New Products
          </p>
          <p className="text-sm text-[#21313c]">Dashboard</p>
        </div>
        <button  onClick={()=>navigate('/admin/product')} className="flex items-center px-4 py-2 rounded-lg gap-3 bg-[#f0f3f2] text-black-700 font-medium">
          Back to Products
        </button>
      </div>
    <form onSubmit={handleSubmit} action="">
      <div className="flex  ">
        <div className="w-9/12">
          <div className=" my-10 mx-5 p-5 rounded-xl shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
            <h1 className="text-xl font-medium text-[#21313c] ">
              Product Information
            </h1>
            <div className="flex justify-between  items-center ">
              <div className="py-2">
                <label
                  htmlFor="title"
                  className="text-[#5c6c75] font-medium block "
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={productData.title}
                  onChange={handleChange}
                  placeholder="Product Name"
                  className="w-60  px-4 py-2 my-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-100 border-gray-400"
                />
              </div>
              <div>
                <label
                  htmlFor="category"
                  className="block text-[#5c6c75] font-medium "
                >
                  Product Catagory
                </label>
                <select
                  name="category"
                  id="category"
                  value={productData.category}
                  onChange={handleChange}
                  className="w-60 px-3 py-2 my-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-100 border-gray-400"
                >
                  <option value="">Product Category</option>
                  <option value="Dairy, Bread & Eggs">Dairy, Bread & Eggs</option>
                  <option value="Snacks & Munchies">Snacks & Munchies</option>
                  <option value="Fruits & Vegetables">Fruits & Vegetables</option>
                  <option value="Bakery & Biscuits">Bakery & Biscuits</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between items-center ">
              <div>
                <label
                  htmlFor="weight"
                  className="text-[#5c6c75] font-medium block "
                >
                  Weight
                </label>
                <input
                  type="text"
                  id="weight"
                  name="weight"
                  value={productData.weight}
                  onChange={handleChange}
                  placeholder="Weight"
                  className="w-60 px-3 py-2 my-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-100 border-gray-400"
                />
              </div>
              <div>
                <label
                  htmlFor="weightUnit"
                  className="text-[#5c6c75] font-medium block "
                >
                  Weight
                </label>
                <select
                  name="weightUnit"
                  value={productData.weightUnit}
                  onChange={handleChange}
                  id="weightUnit"
                  className="w-60 px-3 py-2 my-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-100 border-gray-400"
                >
                  <option value=""> Select units </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>

            <div>
              <p className="text-lg font-medium text-[#21313c]">
                Product Images
              </p>
              <input
                type="url"
                placeholder="Enter Your Image URL "
                name="image"
                value={productData.image1}
                onChange={handleChange}
                id="image"
                className="w-full px-3 py-2 my-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-100 border-gray-400"
              />
            </div>

            <div>
             
              <input
                type="url"
                placeholder="Enter Your Image URL "
                name="image"
                value={productData.image2}
                onChange={handleChange}
                id="image"
                className="w-full px-3 py-2 my-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-100 border-gray-400"
              />
            </div>

            <div>
              
              <input
                type="url"
                placeholder="Enter Your Image URL "
                name="image"
                value={productData.image3}
                onChange={handleChange}
                id="image"
                className="w-full px-3 py-2 my-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-100 border-gray-400"
              />
            </div>

            <div>
             
              <input
                type="url"
                placeholder="Enter Your Image URL "
                name="image"
                value={productData.image4}
                onChange={handleChange}
                id="image"
                className="w-full px-3 py-2 my-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-100 border-gray-400"
              />
            </div>

            <div>
              
              <input
                type="url"
                placeholder="Enter Your Image URL "
                name="image"
                value={productData.image5}
                onChange={handleChange}
                id="image"
                className="w-full px-3 py-2 my-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-100 border-gray-400"
              />
            </div>

            <div>
              <p className="text-lg font-medium text-[#21313c]">
                Product Description
              </p>
              
              <textarea
                name="description"
                value={productData.description}
                onChange={handleChange}
                id="description"
                className="w-full px-3 py-2 my-2 border rounded-lg  border-gray-400"
              >
                </textarea>
            </div>
          </div>
        </div>

        <div className="">
          <div className="  my-10 mx-5 p-5 rounded-xl shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
            <p className="text-[#5c6c75]  block ">In Stock</p>
            <div className="py-2">
              <label
                htmlFor="code"
                className="text-[#5c6c75] font-medium block "
              >
                Product Code
              </label>
              <input
                type="text"
                id="code"
                name="code"
                value={productData.code}
                onChange={handleChange}
                placeholder="Enter Product Title"
                className="  px-2 py-2 my-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-100 border-gray-400"
              />
            </div>
            <div className="py-2">
              <label
                htmlFor="SKU"
                className="text-[#5c6c75] font-medium block "
              >
                Product SKU
              </label>
              <input
                type="text"
                id="SKU"
                name="SKU"
                value={productData.SKU}
                onChange={handleChange}
                placeholder="Enter Product Title"
                className=" px-2 py-2 my-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-100 border-gray-400"
              />
            </div>
            <p className="text-[#5c6c75] font-medium block ">Status</p>
            <div className="flex justify-start  items-center ">
              <div className="py-2">
                <label
                  htmlFor="active"
                  className="text-[#5c6c75] font-medium block pr-5"
                >
                  <input type="radio" name="status" value={productData.status} onChange={handleChange} />
                  Active
                </label>
              </div>
              <div className="py-2">
                <label
                  htmlFor="disable"
                  className="text-[#5c6c75] font-medium block pr-5 "
                >
                  <input type="radio" name="status" value={productData.status} onChange={handleChange} />
                  Disable
                </label>
              </div>
            </div>
          </div>

          <div>
            <div className="  my-10 mx-5 p-5 rounded-xl shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)]">
              <p className="text-[#21313c]  text-lg font-medium block ">
                Product Price
              </p>
              <div className="py-2">
                <label
                  htmlFor="regularPrice"
                  className="text-[#5c6c75] font-medium block "
                >
                  Regular Price
                </label>
                <input
                  type="text"
                  id="regularPrice"
                  name="regularPrice"
                  value={productData.regularPrice}
                  onChange={handleChange}
                  placeholder="$0.00"
                  className="  px-2 py-2 my-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-100 border-gray-400"
                />
              </div>
              <div className="py-2">
                <label
                  htmlFor="salePrice"
                  className="text-[#5c6c75] font-medium block "
                >
                  Sale Price{" "}
                </label>
                <input
                  type="text"
                  id="salePrice"
                  name="salePrice"
                  value={productData.salePrice}
                  onChange={handleChange}
                  placeholder="$0.00"
                  className=" px-2 py-2 my-2 border rounded-lg focus:outline-none focus:ring-4 focus:ring-green-100 border-gray-400"
                />
              </div>
            </div>
          </div>

          <div >
        <button type="submit"
                className="w-full m-auto py-3 bg-[#0aad0a]  text-white rounded-lg hover:bg-green-700 transition border-gray-400">
            Create Product
        </button>
      </div>
        </div>
      </div>
      
      </form>
    </div>
  );
};

export default AddProduct;
