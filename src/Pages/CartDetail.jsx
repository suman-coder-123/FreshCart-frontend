import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";

export default function CartDetail() {
  let [cartitem, setcartitem] = useState([]);
  

  useEffect(() => {
    cartdata();
  }, []);

  let cartdata = () => {
    axios.get("http://localhost:5000/allcartitem").then((res) => {
      if (res.data.status) {
        setcartitem(res.data.cartitem);
      }
    });
  };


  let removeitem=(item)=>{
    axios.post("http://localhost:5000/removecartitem",{item}).then((res) => {
      if (res.data.status) {
        window.location.reload()
      }
    });
  }

  return (
    < div className="fixed  z-40" >
      <div className="fixed top-0 right-0 w-1/2 h-full shadow-lg z-50 flex flex-col  ">
        <div className="flex justify-between items-center px-5">
          <div>
            <h1 className="text-[#21313c] text-2xl  font-medium  ">
              Shop Cart
            </h1>
            <p className="text-[#5c6c75]   font-medium  ">Location in 382480</p>
          </div>

          <div>
            <button >
              <RxCross2 className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
        <div className="overflow-y-auto flex-1 px-5">
          {cartitem.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between mb-4"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <p className="font-medium px-4 whitespace-nowrap">
                    {item.title}
                  </p>
                  <button
                   onClick={()=>removeitem(item)}
                    className="text-sm  px-4 text-green-600 flex items-center gap-1"
                  >
                    <FaRegTrashAlt className="w-4 h-4" />{" "}
                    <span className="text-sm text-[#5c6c75]">Remove</span>
                  </button>
                </div>
              </div>
              <div className=" flex items-center px-4 justify-between">
                <div className="flex items-center px-4 justify-between">
                  <button className="px-2 border-1 border-gray-200 rounded-l-md ">
                    -
                  </button>
                  <span className=" border-1 border-gray-200 px-2">
                    {item.weightUnit}
                  </span>
                  <button className="px-2 border-1 border-gray-200 rounded-r-md">
                    +
                  </button>
                </div>
                <div>
                  <p className=" px-4 font-bold">${item.regularPrice}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="p-4 border-t flex justify-between">
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Continue Shopping
            </button>
            <button className="bg-black text-white px-4 py-2 rounded">
              Proceed To Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
