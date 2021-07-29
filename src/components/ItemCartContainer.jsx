import { useState, useEffect } from "react";
//import ItemList from "./ItemList";
import ItemCountCard from "./ItemCountCard";
import { useParams } from "react-router-dom";
import productJson from "../soyTuMarket.json";

const ItemCartContainer = () => {
  
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  

  useEffect(()=>{
    if ( categoryId ) {
      setItems(productJson.filter(it => it.categoryId===categoryId));
    } else
    {
      setItems(productJson);
    }
  },[categoryId])

 
  return (
    <>
      {items.map((el) => (
        <ItemCountCard
          srcImg={el.srcImg}
          prodTitle={el.prodTitle}
          key={el.prodId}
          prodId={el.prodId}
          stock={el.stock}
          price={el.price}
        />
      ))}
    </>
  );
};

export default ItemCartContainer;
