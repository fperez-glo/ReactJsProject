import { useState, useEffect, View } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContextsCart } from "../context/ContextsCart";
import showAlert from "./Alerts/AlertHelper";
import es from "../idiom/es";
//import CartContext from "../context/CartContext";

const ItemCounter = ({
  enableAddCartButton = true,
  styledParam,
  addedQuantity,
  prodId,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [inCartItemQty, setInCartItemQty] = useState(addedQuantity);
  const [inCart, setInCart] = useState(false);
  const { cartItems, setCartItems, prodSet, setTotalPrice } = useContextsCart();

  useEffect(() => {
    //Busco el indice
    const index = cartItems.findIndex((el) => el.prodId === prodId);
    //Si existe el indice en el carrito ---> modifico la cantidad del producto
    cartItems[index] && (cartItems[index].quantity = inCartItemQty);

    setTotalPrice(
      cartItems.reduce((acum, valor) => acum + valor.quantity * valor.price, 0)
    );
  }, [inCartItemQty]);

  const styles = {
    Card: {
      backgroundColor: "#ffff",
      borderStyle: "none",
      //backgroundColor:'green',
    },
    buttonCounterStyle: {
      color: "black",
      width: "15rem",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 4,
      //borderStyle: "inset",
      //borderColor: "lightGrey",
      borderRadius: 10,
    },
    addCartButton: {
      width: "15rem",
      //backgroundColor:'green',
    },
  };

  const add = () => {
    setQuantity(quantity + 1);
    inCartItemQty && setInCartItemQty(inCartItemQty + 1);
  };

  const subtract = () => {
    if (inCartItemQty > 1 || quantity > 1) {
      setQuantity(quantity - 1);

      inCartItemQty && setInCartItemQty(inCartItemQty - 1);
    }
  };

  const addToCart = () => {
    //Agrego la cantidad elegida al objeto prodSet.
    prodSet.quantity = quantity;

    const findItem = cartItems.find((item) => item.prodId === prodSet.prodId);
    //Valido si el item que quiero ingresar al carro ya existe.
    if (!findItem) {
      setCartItems([...cartItems, prodSet]);
      showAlert.success(es.productSuccess);
      setInCart(true);
    } else {
      showAlert.info(es.productInCart);
      return;
    }
  };

  return (
    <>
      {/*console.log('cartItems en render!!!!!',cartItems)*/}
      {!inCart && (
        <Card style={styles.Card}>
          <Card.Body style={styles.buttonCounterStyle}>
            <Button variant="primary" onClick={() => subtract()}>
              -
            </Button>
            <Card.Text>{inCartItemQty ?? quantity}</Card.Text>
            <Button variant="primary" onClick={() => add()}>
              +
            </Button>
          </Card.Body>
          {enableAddCartButton && (
            <Button
              onClick={() => addToCart()}
              style={styledParam ?? styles.addCartButton}
            >
              Añadir al carrito
            </Button>
          )}
        </Card>
      )}
      {inCart && (
        <Link id="RouterNavLink" to="/cart">
          <Button variant="success" style={styles.addCartButton}>
            Finalizar Compra
          </Button>
        </Link>
      )}
    </>
  );
};

export default ItemCounter;
