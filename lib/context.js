import React, { Children, createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const decreaseQty = () => {
    setQuantity((prevQty) => {
      if (prevQty > 0) {
        return prevQty - 1;
      }
    });
  };
  return (
    <ShopContext.Provider value={{ quantity, increaseQty, decreaseQty }}>
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
