import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productJson from "../soyTuMarket.json";
import { getFirestore } from "../api/fireBaseService";
import { ProductionQuantityLimitsRounded } from "@material-ui/icons";

const ItemDetailContainer = () => {
  const dbQuery = getFirestore();
  const [ items, setItems ] = useState([]);
  const { prodId } = useParams();

  useEffect(()=>{
    
    if ( prodId ) {
      fetchFilterItems(prodId);
    } else
    {
      setItems(items);
    }
  },[prodId])

  const fetchFilterItems = async (prodId) =>{
    const filterItems = await dbQuery.collection("producto").doc(prodId).get();
    setItems(filterItems.data())
  }

  return (
    <>
      <ItemDetail 
        prodTitle={items.prodTitle}
        price={items.price}
        stock={items.stock}
        srcImg={items.srcImg}
        description={items.description}
      />
    </>
  );
};

export default ItemDetailContainer;
