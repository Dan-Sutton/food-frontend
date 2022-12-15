import React, { Children, createContext, useContext, useState } from "react";

import React from "react";

const ShopContext = createContext();

import React from "react";

export const StateContext = ({ children }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <ShopContext.Provider value={{ quantity }}>{children}</ShopContext.Provider>
  );
};
