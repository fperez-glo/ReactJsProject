import React from "react";
import { Button, Card } from "react-bootstrap";

const ItemCounter = ({
  counter = 1,
  onSubmitAdd,
  onSubmitSubtract,
  onSubmitAddToCart
}) => {
  const styles = {
    buttonCounterStyle: {
      color: "black",
      width: "15rem",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 4,
      //backgroundColor:'red',
    },
    addCartButton: {
      width: "15rem",
      //backgroundColor:'green',
    },
  };

  return (
    <>
      <div style={styles.buttonCounterStyle}>
        <Button variant="primary" onClick={onSubmitSubtract}>
          -
        </Button>
        <Card.Text>{counter}</Card.Text>
        <Button variant="primary" onClick={onSubmitAdd}>
          +
        </Button>
      </div>
      <Button onClick={onSubmitAddToCart} style={styles.addCartButton}>
        Añadir al carrito
      </Button>
    </>
  );
};

export default ItemCounter;
