import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { useNavigate } from 'react-router-dom';

function Payment() {
  const navigate = useNavigate();
  const { cart, incrementQuantity, decrementQuantity, totalPrice } = useContext(CartContext);

  const handlePayment = (e) => {
    e.preventDefault();
    alert("Payment successful!");
    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div className="container mx-auto p-6 pt-20 text-center">
        <p className="text-gray-600 mb-4">Your cart is empty.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 pt-20 flex gap-6">
  
      <div className="w-2/3">
        <button
          onClick={() => navigate("/")}
          className="mb-6 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Back to Shopping
        </button>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Payment Information</h2>
        
        <form onSubmit={handlePayment} className="bg-white shadow-md rounded-lg p-6">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="cardNumber">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              required
              placeholder="1234 5678 9012 3456"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="expiryDate">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                required
                placeholder="MM/YY"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="cvv">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                required
                placeholder="123"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name on Card
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="John Doe"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Pay ${totalPrice.toFixed(2)}
          </button>
        </form>
      </div>

      <div className="w-1/3 bg-gray-50 shadow-md p-6 rounded-lg h-max">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Your Cart</h2>
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
        </div>
      </div>
    </div>
  );
}

export default Payment;