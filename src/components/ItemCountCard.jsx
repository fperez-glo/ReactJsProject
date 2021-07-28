import { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import ItemCounter from "./ItemCounter";
import { Link, useParams } from "react-router-dom";

const ItemCountCard = ({
  price = 99999,
  srcImg,
  prodTitle = "prodTitle",
  stock,
}) => {

  const { prodId } = useParams();

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
        <Link to="/detail/:prodId">
          <Card.Img src={srcImg} variant="top" />
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
