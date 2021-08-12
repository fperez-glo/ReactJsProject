import { useEffect } from "react";
import { useContextsCart } from "../context/ContextsCart";
import Grid from "@material-ui/core/Grid";
import CartCard from "./CartCard";

const Cart = () => {
  const { cartItems, setCartItems, totalPrice,setTotalPrice } = useContextsCart();
  
  useEffect(() => {
    setTotalPrice(cartItems.reduce((acum, valor)=>(acum + (valor.quantity * valor.price)), 0));
  }, [])

  console.log("Items en el carrito:", cartItems);
  return (
    <>
      {/* <h1>Carrito de Compras.</h1> */}
      {cartItems.length ? (
        <>
          <Grid container spacing={2}>
            {cartItems.map((item) => (
              <Grid item xs={12}>
                <CartCard
                  key={item.prodId}
                  price={item.price}
                  addedQuantity={item.quantity}
                  prodId={item.prodId}
                  srcImg={item.srcImg}
                  prodTitle={item.prodTitle}
                  description={item.description}
                />
              </Grid>
            ))}
            <Grid item xs={12}>
                Total: ${totalPrice}
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <h1>No hay elementos en el carrito.</h1>
        </>
      )}
    </>
  );
};

export default Cart;
