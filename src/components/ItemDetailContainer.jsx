import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productJson from "../soyTuMarket.json";


const ItemDetailContainer = () => {
  
  const [ items, setItems ] = useState([]);
  const { prodId } = useParams();

  useEffect(()=>{
    if ( prodId ) {
      setItems(productJson.filter(it => it.prodId===prodId));
    } else
    {
      setItems(productJson);
    }
  },[prodId])


  return (
    <>
      {items.map((el) => (
        <ItemDetail 
        key={el.prodId}
        prodTitle={el.prodTitle}
        price={el.price}
        stock={el.stock}
        srcImg={el.srcImg}
        description={el.description}
        />
      ))}
      
    </>
  );
};

export default ItemDetailContainer;
