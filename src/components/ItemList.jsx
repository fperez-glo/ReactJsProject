import { useState, useEffect } from "react";
import ItemCountCard from "./ItemCountCard";


const ItemList = (
  items
) => {


  const styles = {
    cards: {
      display: "flex",
      flexDirection: "row",
    },
  }

  return (
    <>
      {items.map((el) => (
        <ItemCountCard
          srcImg={el.srcImg}
          prodTitle={el.prodTitle}
          key={el.prodId}
          stock={el.stock}
          price={el.price}
          
        />
      ))}
    </>
  );
};

export default ItemList;
