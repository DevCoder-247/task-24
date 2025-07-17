import React, { useState, useContext } from 'react';
import { CartProvider } from '../../Context/CartContext';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';

const Main = () => {
  return (

    <CartProvider>
      <div className="container mx-auto p-6 flex gap-6 pt-20">
        <Products />
        <Cart />
      </div>
    </CartProvider>
    
  );
};

export default Main;
