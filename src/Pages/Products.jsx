import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Products() {
  let [product, setproduct] = useState([]);

  useEffect(() => {
    apidata();
  }, []);

  let apidata = () => {
    axios.get("https://freshcart-backend-opal.vercel.app/products").then((res) => {
      if (res.data.status) {
        setproduct(res.data.ourproducts);
      }
    });
  };
  // productdeatails-------------------
  let go = useNavigate();
  let productdeatails = (productdata) => {
    go("/productdeatails", { state: productdata });
  };

  return (
    <>
      <h1 className="text-[#21313c] text-2xl font-medium my-10">
        Popular Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {product.map((item) => {
          return (
            <>
              <div
                className="border border-gray-300 rounded-lg p-4 transition-all duration-300 
                hover:border-green-500 hover:shadow-lg cursor-pointer"
                onClick={() => productdeatails(item)}
              >
                <img src={item.image1} className="w-60 h-40" />
                <p className="text-[#5c6c75] text-base">{item.category}</p>
                <p className="text-[#21313c] text-md font-medium">
                  {item.title}
                </p>
                <div className="flex justify-between item-center py-3">
                  <p className=' py-1 text-md font-semibold"'>
                    ${item.regularPrice}{" "}
                    <span className="line-through text-gray-400 text-sm ml-2">
                      ${item.salePrice}
                    </span>
                  </p>
                  <button className="bg-[#0aad0a] text-[#ffffff] text-md font-medium px-2 py-1 rounded">
                    {" "}
                    + Add
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
