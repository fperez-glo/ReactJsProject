import { useState, useEffect } from "react";
import ItemCountCard from "./ItemCountCard";
import productJson from "../soyTuMarket.json";

const ItemList = () => {
  const [items, SetItems] = useState([]);

  useEffect(()=>{
    console.log('useEffect');
    
  },[])

  const styles = {
    cards: {
      display: "flex",
      flexDirection: "row",
    },
  }

  return (
    <>
      {productJson.map((item) => (
        <ItemCountCard
          srcImg={item.srcImg}
          prodTitle={item.prodTitle}
          key={item.prodId}
          stock={item.stock}
          price={item.price}
          
        />
      ))}
    </>
  );
};

export default ItemList;
