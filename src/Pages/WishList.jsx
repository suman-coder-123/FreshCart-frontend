import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";


const WishList = () => {
  const [listItem , setListItem] = useState([]);

  useEffect(()=>{
    WishList();
  },[])

  let WishList = () =>{
    axios.get("http://localhost:5000/allListItem").then((res) =>{
      if(res.data.status){
        setListItem(res.data.listItem || []);
      }
    });
  };


  let removeProduct=(item)=>{
    axios.post("http://localhost:5000/removeListItem",{item}).then((res) => {
      if (res.data.status) {
        window.location.reload()
      }
    });
  }
  return (
    <div>
      <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900">My Wishlist</h1>
      <p className="text-gray-600 mt-1">
        There are  products in this wishlist.
      </p>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-gray-50 text-left text-gray-700 text-sm uppercase">
              <th className="p-3">
                <input type="checkbox" />
              </th>
              <th className="p-3">Product</th>
              <th className="p-3">Amount</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
              <th className="p-3">Remove</th>
            </tr>
          </thead>
          <tbody>
            {listItem.map((item) => (
              <tr
                key={item.id}
                className="border-b last:border-b-0 hover:bg-gray-50"
              >
                <td className="p-3">
                  <input type="checkbox" />
                </td>
                <td className="p-3 flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 object-cover rounded"
                  />
                  <div>
                    <div className="font-medium text-gray-900">{item.title}</div>
                    <div className="text-sm text-gray-500">{item.weightUnit}</div>
                  </div>
                </td>
                <td className="p-3 text-gray-900">{item.regularPrice}</td>
                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-sm font-medium ${
                      item.inStock
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-3">
                  {item.inStock ? (
                    <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-2 rounded">
                      Add to cart
                    </button>
                  ) : (
                    <button className="bg-gray-900 hover:bg-gray-800 text-white text-sm px-3 py-2 rounded">
                      Contact us
                    </button>
                  )}
                </td>
                <td className="p-3">
                  <button  onClick={()=>removeProduct(item)} className="text-gray-500 hover:text-red-500">
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default WishList;
