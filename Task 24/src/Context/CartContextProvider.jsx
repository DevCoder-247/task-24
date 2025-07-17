import React from "react";
import CartContext from "./cartContext";

const CartContextProvider = ( {children} ) => {

    const [cart, setCart] = React.useState(null);

    return (
        <CartContext.Provider value={{cart,setCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;