import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";

const ProductTable = ({product}) => {
  return (
    <div>
      <div className="">
        <table className="min-w-full text-left">
            <thead className="bg-gray-200">
                <tr> 
                    <th className='p-3 text-[#5c6c75] font-medium'> <input type="checkbox" /></th>
                    <th className="p-3 text-[#5c6c75] font-medium w-10 h-10 object-cover rounded  ">Image</th>
                    <th className="p-3 text-[#5c6c75] font-medium ">Product Name</th>
                    <th className="p-3 text-[#5c6c75] font-medium ">Category</th>
                    <th className="p-3 text-[#5c6c75] font-medium ">Status</th>
                    <th className="p-3 text-[#5c6c75] font-medium ">Price</th>
                    <th className="p-3 text-[#5c6c75] font-medium ">Created At</th>
                    <th className='p-3 '></th>
                </tr>
            </thead>
        <tbody>
          {product.map((products) => (
         <tr key={products._id} className="">
          <td className='p-3'> <input type="checkbox" /></td>
              <td className="p-3">
                <img src={products.image} alt="product image" />
              </td>
              <td className="p-3">{products.title}</td>
              <td className="p-3">{products.category || "—"}</td>
              <td className="p-3">{products.status || "—"}</td>
              <td className="p-3"> ${products.regularPrice || "—"}</td>
              <td className="p-3">
                {products.createdAt
                  ? new Date(products.createdAt).toLocaleDateString()
                  : "—"}
              </td>
              <td >< BsThreeDotsVertical  className='cursor:pointer'/>
</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductTable
