import React from "react";
import ItemCounter from "./ItemCounter";
import { Button, Card } from "react-bootstrap";

const ItemDetail = ({
  price = 99999,
  srcImg,
  prodTitle = "prodTitle",
  stock,
  description,
}) => {
  const styles = {
    card: {
      width: "30rem",
      display:"flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      borderStyle: "none",
    },
    detail: {
      width: "15rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 4,
    },
  };

  return (
    <>
      <Card style={styles.card}>
        <Card.Img src={srcImg} variant="top"></Card.Img>
        <Card.Body style={styles.detail}>
          <Card.Text>
            {description}
          </Card.Text>
          <Card.Title>{prodTitle}</Card.Title>
          <Card.Title>${price}</Card.Title>
          <ItemCounter/>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemDetail;
