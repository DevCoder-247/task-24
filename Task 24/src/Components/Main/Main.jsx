import React, { useState, useContext } from 'react';
import CartContext from '../../Context/cartContext';

const Main = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.name === product.name);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const incrementQuantity = (productName) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === productName ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productName) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.name === productName ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const products = [
    { id: 1, name: 'White Casual Sneaker', price: 70, img: '/Images/shoe1.jpeg' },
    { id: 2, name: 'Red Casual Sneaker', price: 90, img: '/Images/shoe2.jpeg' },
    { id: 3, name: 'Pinkey Paw', price: 50, img: '/Images/shoe3.jpeg' },
    { id: 4, name: 'Blue lensor', price: 60, img: '/Images/shoe4.jpeg' },
    { id: 5, name: 'Abibas Boyses', price: 60, img: '/Images/shoe5.jpeg' },
    { id: 6, name: 'GrandFather Shoe', price: 60, img: '/Images/shoe6.jpeg' },
    { id: 7, name: 'The Lefters', price: 60, img: '/Images/shoe7.jpeg' },
    { id: 8, name: 'Shadi Joda', price: 60, img: '/Images/shoe8.jpeg' },
  ];

  return (
    <div className="container mx-auto p-6 flex gap-6 pt-20">
      {/* Products Section */}
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

      {/* Cart Section */}
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
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Proceed To Pay
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
