import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

function Products() {

    const {products, addToCart} = useContext(CartContext);

  return (
    <div className="w-2/3">
    <h2 className="text-2xl font-bold mb-6 text-gray-800">Products</h2>
    <div className="grid grid-cols-2 gap-6">
      {products.map((product) => (
        <div
          className="product-card bg-white shadow-md rounded-lg p-4 text-center"
          key={product.id}
        >
          <img
            src={product.img}
            alt={product.name}
            className="h-32 w-32 object-cover mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <p className="text-gray-600">${product.price}</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Products