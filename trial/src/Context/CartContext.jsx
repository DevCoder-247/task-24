import React, { createContext, useState } from 'react';

// Create a context
export const CartContext = createContext(); 

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  // const [showPayment, setShowPayment] = useState(false);

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

  // const togglePaymentSection = () => {
  //   setShowPayment((prev) => !prev); 
  // };

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
    <CartContext.Provider
      value={{
        cart,
        products,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        totalPrice
        // showPayment,
        // togglePaymentSection
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

