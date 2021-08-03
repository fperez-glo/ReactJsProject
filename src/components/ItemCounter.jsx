import { useState, useEffect, View } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContextsCart } from "../context/ContextsCart";
//import CartContext from "../context/CartContext";

const ItemCounter = ({}) => {
  const [quantity, setQuantity] = useState(1);
  const [inCart, setInCart] = useState(false);
  const { cartItems, setCartItems, prodSet} = useContextsCart();

  const styles = {
    Card: {
      backgroundColor: "#282c34",
      borderStyle: "none",
      //backgroundColor:'green',
    },
    buttonCounterStyle: {
      color: "white",
      width: "15rem",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 4,
      
    },
    addCartButton: {
      width: "15rem",
      //backgroundColor:'green',
    },
  };

  const add = () => {
    setQuantity(quantity + 1);
  };

  const subtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    setInCart(true);

    setCartItems([
      ...cartItems,
      cartItems.push(prodSet)
    ]);
    
    console.log('cartItems:',cartItems);
  };

  return (
    <>
      {/*console.log('cartItems en render!!!!!',cartItems)*/}
      {!inCart &&(
      <Card style={styles.Card}>
        <Card.Body style={styles.buttonCounterStyle}>
          <Button variant="primary" onClick={() => subtract()}>
            -
          </Button>
          <Card.Text>{quantity}</Card.Text>
          <Button variant="primary" onClick={() => add()}>
            +
          </Button>
        </Card.Body>
        <Button onClick={() => addToCart()} style={styles.addCartButton}>
          Añadir al carrito
        </Button>
      </Card>
      )}
      {inCart && (
        <Link to="/cart">
          <Button variant="success" style={styles.addCartButton}>Finalizar Compra</Button>
        </Link>
      )}
    </>
  );
};

export default ItemCounter;
