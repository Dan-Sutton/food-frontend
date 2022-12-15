import React, { Children, createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <ShopContext.Provider value={{ quantity }}>{children}</ShopContext.Provider>
  );
};
