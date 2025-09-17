import React from 'react'

const ProductTable = ({products}) => {
  return (
    <div>
      <div className="">
        <table className="min-w-full text-left">
            <thead className="bg-gray-200">
                <tr> 
                    <th className="p-3 text-[#5c6c75] font-medium ">Image</th>
                    <th className="p-3 text-[#5c6c75] font-medium ">Product Name</th>
                    <th className="p-3 text-[#5c6c75] font-medium ">Category</th>
                    <th className="p-3 text-[#5c6c75] font-medium ">Status</th>
                    <th className="p-3 text-[#5c6c75] font-medium ">Price</th>
                    <th className="p-3 text-[#5c6c75] font-medium ">Created At</th>
                </tr>
            </thead>
            <tbody>
                {products.map((p)=>(
                    <tr key={p.id} className='border-t border-gray-400'>
                        <td className='p-3'>
                            <img src={p.image}  alt={p.name} className='w-8 h-8 ' />
                        </td>
                        <td className='p-3'> {p.name}</td>
                        <td className='p-3'>{p.category}</td>
                        <td className='p-3'> <span className={`px-2 py-1 rounded text-xs ${
                  p.status === 'Active' ? 'bg-green-100 text-green-600' :
                  p.status === 'Draft' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-green-100 text-green-600'
                }`}>{p.status} </span></td>
                        <td className='p-3'> {p.price}</td>
                        <td className='p-3'> {p.createdAt}</td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default ProductTable
