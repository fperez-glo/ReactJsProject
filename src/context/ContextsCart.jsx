import React, { createContext, useContext, useState } from "react";


const ContextsCart = createContext();

export const useContextsCart = () => useContext(ContextsCart);

const ContextsCartProvider = ({ children }) => {
  //Estado para guardar los items agregados al carrito.
  const [cartItems, setCartItems] = useState([]);
  //Estado que se utiliza antes de enviar los items/productos al cartItems
  const [prodSet, setProd] = useState({});
  //Estado para guardar el precio total almacenado de los items del carrito.
  const [totalPrice, setTotalPrice] = useState(0);
  //Estado para guardar la compra con la data total.
  const [purchase, setPurchase] = useState({})

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
          purchase,
          setPurchase,
        }}
      >
        {children}
      </ContextsCart.Provider>
    </>
  );
};

export default ContextsCartProvider;
