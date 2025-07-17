import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'

function Payment() {
  const {cart, incrementQuantity, decrementQuantity, totalPrice, showPayment, togglePaymentSection} = useContext(CartContext);

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment successful!");
    navigate("/");
  };
  
  return (
    <div className="container mx-auto p-6 pt-20">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Payment</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Order Summary:</h3>
          <ul className="mb-4">
            {cart.map((item) => (
              <li key={item.name} className="flex justify-between">
                <span>{item.name} (x{item.quantity})</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold mb-6">Total: ${totalPrice.toFixed(2)}</p>

          <form onSubmit={handlePayment} className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                type="text"
                id="cardNumber"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="expiryDate">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="cvv">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Pay Now
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Payment