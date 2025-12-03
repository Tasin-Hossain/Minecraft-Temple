import React from 'react'

const Resources = ({products}) => {
  
  return (
    <>
      <div className="flex items-center justify-between flex-wrap gap-4">
            {products.map((prod) => (
              <div
                key={prod.id}
                className="p-2 border border-(--border-color) rounded-lg shadow-sm flex flex-col"
              >
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-50 object-cover rounded-md"
                />
                <div className="mt-3 flex-1">
                  <div className="font-medium">{prod.name}</div>
                  <div className="text-xs text-gray-500">{prod.category}</div>
                </div>
                <div className="mt-2 text-blue-600 font-semibold">
                  {prod.price}
                </div>
              </div>
            ))}
          </div>
    </>
  )
}

export default Resources