import React, { Children, createContext, useContext, useState } from "react";

const ShopContext = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [totalQuantities, setTotalQuantities] = useState(0);

  const increaseQty = () => {
    setQuantity((prevQty) => prevQty + 1);
  };

  const decreaseQty = (prevQty) => {
    setQuantity(() => {
      if (prevQty >= 1) {
        return prevQty - 1;
      }
    });
  };

  const onAdd = (product, quantity) => {
    setTotalQuantities((prevTotal) => prevTotal + quantity);

    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: quantity }]);
    }
  };

  const onRemove = (product) => {
    setTotalQuantities((prevTotal) => prevTotal - 1);
    const exist = cartItems.find((item) => item.slug === product.slug);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.slug !== product.slug));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.slug === product.slug
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <ShopContext.Provider
      value={{
        quantity,
        increaseQty,
        decreaseQty,
        cartItems,
        showCart,
        onAdd,
        setShowCart,
        onRemove,
        totalQuantities,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useStateContext = () => useContext(ShopContext);
