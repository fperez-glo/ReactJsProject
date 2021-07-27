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
      width: "17rem",
      display:"flex",
      flexDirection: "row",
    },
    detail: {
      color: "black",
      width: "15rem",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 4,
      //backgroundColor:'red',
    },
  };

  return (
    <>
      <Card style={styles.card}>
        <Card.Img src={srcImg} variant="top"></Card.Img>
        <Card.Body>
          <Card.Title>{prodTitle}</Card.Title>
          <Card.Title>${price}</Card.Title>
          <ItemCounter/>
          <Card.Text>
            {description}
           </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default ItemDetail;
