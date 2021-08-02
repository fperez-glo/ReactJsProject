import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import ItemCounter from "./ItemCounter";
import { Link, useParams } from "react-router-dom";
import { useContextsCart } from "../context/ContextsCart";

const ItemCountCard = ({
  price = 99999,
  srcImg,
  prodTitle = "prodTitle",
  prodId,
  stock,
}) => {

  const route = `/detail/${prodId}`
  const { setProdId } = useContextsCart();
  
  //Styles propios del componente.
  const styles = {
    card: {
      width: "17rem",
    },
    cardBody: {
      width: "17rem",
      //backgroundColor:'blue',
      borderRadius: 5,
      color: "black",
      //padding:5,
    },
  };


  return (
    <>
      <Card style={styles.card}>
        <Link to={route}>
          <Card.Img src={srcImg} variant="top" onClick={() => setProdId(prodId)} />
        </Link>
        <Card.Body style={styles.cardBody}>
          <Card.Title>{prodTitle}</Card.Title>
          <Card.Title>${price}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemCountCard;
