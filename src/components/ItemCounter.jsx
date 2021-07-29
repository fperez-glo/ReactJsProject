import { useState, useEffect, View } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const ItemCounter = ({
  //counter = 1,
  //onSubmitAdd,
  //onSubmitSubtract,
  //onSubmitAddToCart
}) => {
  const [value, setValue] = useState(1);
  const [inCart, setInCart] = useState(false);

  const styles = {
    buttonCounterStyle: {
      color: "white",
      width: "15rem",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 4,
      backgroundColor:'#282c34',
    },
    addCartButton: {
      width: "15rem",
      //backgroundColor:'green',
    },
  };

  const add = () => {
    setValue(value +1);
  };

  const subtract = () => {
    if (value > 1) {
      setValue(value -1);
    }
  };

  const addToCart = () => {
    setInCart(true);
  }

  return (
    <>
      <Card style={styles.buttonCounterStyle}>
        <Button variant="primary" onClick={() => subtract()}>
          -
        </Button>
        <Card.Text>{value}</Card.Text>
        <Button variant="primary" onClick={() => add()}>
          +
        </Button>
        </Card>
        <Button onClick={() => addToCart()} style={styles.addCartButton}>
          Añadir al carrito
        </Button>
        
      

      { inCart && (
      <Link to="/cart">
        <Button style={styles.addCartButton}>
          Finalizar Compra
        </Button>
      </Link>
      ) }
      
    </>
  );
};

export default ItemCounter;
