import React, { createContext, useContext, useState } from "react";


const ContextsCart = createContext();

export const useContextsCart = () => useContext(ContextsCart);

const ContextsCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [prodSet, setProd] = useState({});

  return (
    <>
      <ContextsCart.Provider
        value={{
          cartItems,
          setCartItems,
          prodSet,
          setProd,
        }}
      >
        {children}
      </ContextsCart.Provider>
    </>
  );
};

export default ContextsCartProvider;
