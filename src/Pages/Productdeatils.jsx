import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { LuShoppingBag } from "react-icons/lu";
import { GoArrowSwitch } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";

export default function Productdeatils() {
  let loc = useLocation();
  let product = loc.state;

  const [activeTab, setActiveTab] = useState("details");
  const tabs = [
    { id: "details", label: "Product Details" },
    { id: "info", label: "Information" },
    { id: "reviews", label: "Reviews" },
  ];

  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("https://freshcart-backend-do1f.vercel.app/allcartitem").then((res) => {
      if (res.data.status) 
      setCart(res.data.cartitem);
    });
  }, []);

  const addtocart = (item) => {
    const exist = cart.find((c) => c.code === item.title);

    if (exist) {
      Swal.fire({
        icon: "error",
        title: "Already in cart",
      });
    } else {
      axios
        .post("https://freshcart-backend-do1f.vercel.app/addcart", { item })
        .then((res) => {
          if (res.data.status) {
            Swal.fire({
              text: "Product Added",
              icon: "success",
            });
            setCart((prev) => [...prev, item]);
          } else {
            Swal.fire({
              icon: "error",
              title: res.data.message || "Not Added........",
            });
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const [list , setList] = useState([]);

  useEffect(() => {
    axios.get("https://freshcart-backend-do1f.vercel.app/allListItem").then((res) => {
      if (res.data.status) 
      setList(res.data.listItem);
    });
  }, []);

  const wishlist = (item) =>{
    const exist = list.find((c) => c.code === item.title);

    if (exist) {
      Swal.fire({
        icon: "error",
        title: "Already in wishlist",
      });
    } else{
       axios.post("https://freshcart-backend-do1f.vercel.app/WishList", { item })
        .then((res) => {
          if (res.data.status) {
            Swal.fire({
              text: "Product Added wishlist",
              icon: "success",
            });
            setList((prev) => [...prev, item]);
          } else {
            Swal.fire({
              icon: "error",
              title: res.data.message || "Not Added........",
            });
          }
        })
        .catch((err) => console.log(err));
    }
  
    }
  
   
  
  return (
    <>
      <div>
        <div className="flex w-full px-10 py-4 ">
          <div className="w-1/2 ">
            <img
              src={product.image}
              alt={product.title}
              className="w-80 h-80 m-auto object-cover rounded-lg"
            />
            <div className="flex items-center ">
              <img
                src={product.image}
                alt={product.title}
                className="w-30 h-30 object-cover rounded-lg"
              />
              <img
                src={product.image}
                alt={product.title}
                className="w-30 h-30 object-cover rounded-lg"
              />
              <img
                src={product.image}
                alt={product.title}
                className="w-30 h-30 object-cover rounded-lg"
              />
              <img
                src={product.image}
                alt={product.title}
                className="w-30 h-30 object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="p-6 w-1/2 ">
            <p className="text-[#0aad0a]  mt-2">{product.category}</p>
            <h1 className="text-4xl text-[#21313c] font-bold mt-4">
              {product.title}
            </h1>
            <p className="mt-1">
              ⭐⭐⭐⭐ <span className="text-[#0aad0a] ">(4 reviews)</span>{" "}
            </p>
            <div className="flex items-center mt-4  ">
              <p className=" text-2xl font-semibold  ">
                ${product.regularPrice}
              </p>
              <p className=" px-4 line-through text-2xl text-gray-400">
                ${product.salePrice}
              </p>
            </div>
            <hr className="text-gray-300 my-6" />

            <div className="flex items-center ">
              <div className="border-1 border-gray-300 rounded-lg py-2 px-4 mr-3 inline-block">
                <p className="text-gray-400 font-medium ">{product.weight}</p>
              </div>
              <div className="border-1 border-gray-300 rounded-lg py-2 px-4 mr-3 inline-block">
                <p className="text-gray-400 font-medium ">500g</p>
              </div>
              <div className="border-1 border-gray-300 rounded-lg py-2 px-4 mr-3 inline-block">
                <p className="text-gray-400 font-medium ">1kg</p>
              </div>
            </div>

            <div className="flex items-center my-5 ">
              <div className="border-1 border-gray-300 rounded-l-md py-1 px-2 inline-block">
                <p className="text-gray-400 font-medium ">-</p>
              </div>
              <div className="border-1 border-gray-300  py-1 px-4  inline-block">
                <p className="text-gray-400 font-medium ">1 </p>
              </div>
              <div className="border-1 border-gray-300   rounded-r-md py-1 px-2  inline-block">
                <p className="text-gray-400 font-medium ">+</p>
              </div>
            </div>

            <div className="flex items-center  mt-5 ">
              <button
                onClick={() => addtocart(product)}
                className="bg-[#0aad0a] font-medium text-white px-5 py-2 rounded-lg  flex  items-center  "
              >
                <span className="px-3 ">
                  {" "}
                  <LuShoppingBag className=" w-5 h-5" />
                </span>
                Add to Cart
              </button>
              <div className="bg-[#f0f3f2] rounded-md px-4 py-3 mx-2 ">
                <GoArrowSwitch className="text-black -400" />
              </div>
              <div className="bg-[#f0f3f2] rounded-md px-4 py-3 mx-2 ">
                <button onClick={() => wishlist(product)} >
                <IoMdHeartEmpty className="text-black-400" />
                </button>
              </div>
            </div>

            <hr className="text-gray-300 my-6" />

            <div className="text-[#5c6c75] ">
              <p className="my-4">
                Product Code : <span className="px-4">{product.code}</span>
              </p>
              <p className="my-4">
                Availability : <span className="px-4">In Stock </span>{" "}
              </p>
              <p className="my-4">
                Type : <span className="px-4"> {product.category}</span>
              </p>
              <p className="my-4">
                Shipping:{" "}
                <span className="px-4">
                  01 day shipping.( Free pickup today)
                </span>
              </p>
            </div>

            <button className="border-1 border-gray-300 rounded-md py-2 px-4  text-[#5c6c75] my-4 flex item-center hover:bg-gray-400 hover:text-[#ffffff]">
              {" "}
              <span>Share </span>{" "}
              <span className="pt-1 pb-1 px-1">
                <MdOutlineKeyboardArrowDown />
              </span>
            </button>
          </div>
        </div>

        <div className="w-full  px-10 ">
          <div className="flex border-b border-gray-300 my-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 font-medium text-[#5c6c75] transition-colors ${
                  activeTab === tab.id
                    ? "text-green-600 border-b-2 border-green-600"
                    : "text--gray-500 hover:text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div>
            {activeTab === "details" && (
              <div className="py-4 ">
                <h1 className="text-[#21313c] font-medium text-2xl pb-2 ">
                  Nutrient Value & Benefits
                </h1>
                <p className="text-[#5c6c75] ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Animi, omnis. Veritatis omnis repudiandae fugiat, repellendus
                  itaque assumenda vero suscipit obcaecati, ab autem
                  necessitatibus reprehenderit voluptatum tempora, ducimus
                  quaerat nisi ipsum! Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Neque quod, sint architecto cumque eum
                  eveniet distinctio sit, doloremque doloribus voluptates
                  explicabo sapiente accusantium iure! Eveniet, similique
                  laborum! Maiores, nemo mollitia.
                </p>

                <div className="py-5">
                  <h1 className="text-[#21313c] font-medium text-2xl pb-2 ">
                    Storage Tips{" "}
                  </h1>
                  <p className="text-[#5c6c75] ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Est, ipsam. Necessitatibus quo nam corrupti reprehenderit
                    asperiores ad est sint odio unde dolore, voluptas aliquid
                    eaque aspernatur mollitia aut deserunt similique?Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Corrupti minus
                    eaque suscipit libero. Nulla ex at, cum rem eius esse
                    dolorum deserunt quisquam aliquam sit harum iste reiciendis
                    eos molestiae.
                  </p>
                </div>

                <div className="py-3">
                  <h1 className="text-[#21313c] font-medium text-2xl pb-2 ">
                    {" "}
                    Units{" "}
                  </h1>
                  <p className="text-[#5c6c75] ">3 Units </p>
                </div>

                <div className="py-3">
                  <h1 className="text-[#21313c] font-medium text-2xl pb-2 ">
                    {" "}
                    Seller
                  </h1>
                  <p className="text-[#5c6c75] ">D mart Private Limited </p>
                </div>

                <div className="py-3">
                  <h1 className="text-[#21313c] font-medium text-2xl pb-2 ">
                    {" "}
                    Disclaimer{" "}
                  </h1>
                  <p className="text-[#5c6c75] ">
                    Image shown is a representation and may slightly vary from
                    the actual product. Every effort is made to maintain
                    accuracy of all information displayed.
                  </p>
                </div>
              </div>
            )}
          </div>

          <div>
            {activeTab === "info" && (
              <div>
                <h1 className="text-[5c6c75] font-medium text-2xl ">Details</h1>
                <div className="flex justify-between itmes-center  py-5 ">
                  <div className="w-1/2 ">
                    <div className="flex justify-between items-center px-4 py-3 bg-[#f0f3f2] text-[#5c6c75] font-medium ">
                      <p>Weight</p>
                      <p className="pr-20   ">1000 Grams</p>
                    </div>
                    <div className="flex justify-between items-center px-4 py-3  text-[#5c6c75] font-medium ">
                      <p>Ingredient Type</p>
                      <p className="pr-20 ">Vegetarian</p>
                    </div>
                    <div className="flex justify-between items-center px-4 py-3 bg-[#f0f3f2] text-[#5c6c75] font-medium ">
                      <p>Brand </p>
                      <p className="pr-20 ">Dmart</p>
                    </div>
                    <div className="flex justify-between items-center px-4 py-3  text-[#5c6c75] font-medium ">
                      <p>Item Package Quantity</p>
                      <p className="pr-20 ">1</p>
                    </div>
                    <div className="flex justify-between items-center px-4 py-3 bg-[#f0f3f2] text-[#5c6c75] font-medium ">
                      <p>Form</p>
                      <p className="pr-20 ">Larry the Bird</p>
                    </div>
                    <div className="flex justify-between items-center px-4 py-3  text-[#5c6c75] font-medium ">
                      <p>Manufacturer</p>
                      <p className="pr-20 ">Dmart</p>
                    </div>
                    <div className="flex justify-between items-center px-4 py-3 bg-[#f0f3f2] text-[#5c6c75] font-medium ">
                      <p>Net Quantity</p>
                      <p className="pr-20 ">340.0 Gram</p>
                    </div>
                    <div className="flex justify-between items-center px-4 py-3  text-[#5c6c75] font-medium ">
                      <p>Product Dimensions</p>
                      <p className="pr-20 ">9.6 x 7.49 x 18.49 cm</p>
                    </div>
                  </div>

                  <div className="w-1/2 pl-4">
                    <div className="flex justify-between items-center px-4 py-3 bg-[#f0f3f2]  text-[#5c6c75] font-medium ">
                      <p>ASIN</p>
                      <p className="pr-20 ">SB0025UJ75W</p>
                    </div>
                    <div className="flex justify-between items-center px-4 py-3  text-[#5c6c75] font-medium ">
                      <p>Best Sellers Rank</p>
                      <p className="pr-20 ">#2 in Fruits</p>
                    </div>
                    <div className="flex justify-between items-center px-4 py-3  bg-[#f0f3f2] text-[#5c6c75] font-medium ">
                      <p>Date First Available</p>
                      <p className="pr-20 ">30 April 2022</p>
                    </div>
                    <div className="flex justify-between items-center px-4 py-3  text-[#5c6c75] font-medium ">
                      <p>Item Weight</p>
                      <p className="pr-20 ">500g </p>
                    </div>
                    <div className="flex justify-between items-center px-4 py-3  bg-[#f0f3f2] text-[#5c6c75] font-medium ">
                      <p>Generic Name </p>
                      <p className="pr-20 ">Banana Robusta</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div>
            {activeTab === "reviews" && (
              <div className="flex justify-between py-3">
                <div className="w-3/12">
                  <p>Customer Reviews </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
