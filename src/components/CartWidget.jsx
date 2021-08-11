import React from "react";
import logo from "../images/cartLogo.svg";
import { useContextsCart } from "../context/ContextsCart";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from '@material-ui/core/Badge';

const CartWidget = (
  {
    /*Props que recibe el componente*/
  }
) => {
  const { cartItems } = useContextsCart();

  console.log("cartItems:", cartItems);
  return (
    <div className="cartContainer">
      <Badge badgeContent={cartItems.length} color="secondary">
        <ShoppingCartIcon
        fontSize="medium"
        />
      </Badge>
    </div>
  );
};

export default CartWidget;
