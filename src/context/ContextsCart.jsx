import React, { createContext, useContext, useState } from "react";


const ContextsCart = createContext();

export const useContextsCart = () => useContext(ContextsCart);

const ContextsCartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(['azucar','asd','asd','asdasd']);
  const [prodIdSet, setProdId] = useState("");

  return (
    <>
      <ContextsCart.Provider
        value={{
          cartItems,
          setCartItems,
          prodIdSet,
          setProdId,
        }}
      >
        {children}
      </ContextsCart.Provider>
    </>
  );
};

export default ContextsCartProvider;
