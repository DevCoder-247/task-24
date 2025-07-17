import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

function Cart() {

  const {cart, incrementQuantity, decrementQuantity, totalPrice, showPayment, togglePaymentSection} = useContext(CartContext);

  return (
    <div className="w-1/3 bg-gray-50 shadow-md p-6 rounded-lg h-max mt-15 ">
    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Cart</h2>
    {cart.length === 0 ? (
      <div className="text-center">
        <p className="text-gray-600">Your cart is empty.</p>
        <img
          src="/Images/error2.png"
          alt="Cart Empty"
          className="h-20 w-auto mx-auto mt-4"
        />
      </div>
    ) : (
      <div>
        {cart.map((item) => (
          <div
            className="cart-item flex items-center justify-between mb-4 p-4 bg-white rounded-lg shadow"
            key={item.name}
          >
            <img src={item.img} alt={item.name} className="h-16 w-16 object-cover" />
            <div>
              <p className="font-semibold text-gray-800">{item.name}</p>
              <p className="text-gray-600">${item.price}</p>
            </div>
            <div className="quantity flex items-center space-x-2">
              <button
                onClick={() => decrementQuantity(item.name)}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
              >
                -
              </button>
              <input
                type="text"
                value={item.quantity}
                readOnly
                className="w-8 text-center border rounded"
              />
              <button
                onClick={() => incrementQuantity(item.name)}
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>

        ))}
        <div className="mt-4 text-center">
          <p className="text-lg font-semibold text-gray-800">
            Total: ${totalPrice.toFixed(2)}
          </p>
          <button
            onClick={togglePaymentSection}
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {showPayment ? 'Continue Shopping' : 'Proceed to pay'}
          </button>
        </div>
      </div>
    )}
  </div>
  )
}

export default Cart