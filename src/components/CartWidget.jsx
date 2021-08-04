import React from "react";
import logo from "../images/cartLogo.svg";
import { useContextsCart } from "../context/ContextsCart"

const CartWidget = ({ 
    /*Props que recibe el componente*/
}) => {

  const { cartItems } = useContextsCart();

  console.log('cartItems:',cartItems);
  return (
    <div className="cartContainer">
        <img src={logo} alt="" width="45" height="35" />
        <p>{cartItems.length}</p> 
    </div>
  );
};

export default CartWidget;
