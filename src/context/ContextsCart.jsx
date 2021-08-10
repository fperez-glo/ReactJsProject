import React, { createContext, useContext, useState } from "react";


const ContextsCart = createContext();

export const useContextsCart = () => useContext(ContextsCart);

const ContextsCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [prodSet, setProd] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <ContextsCart.Provider
        value={{
          cartItems,
          setCartItems,
          prodSet,
          setProd,
          totalPrice,
          setTotalPrice,
        }}
      >
        {children}
      </ContextsCart.Provider>
    </>
  );
};

export default ContextsCartProvider;
