import { useState, useEffect } from "react";
//import ItemList from "./ItemList";
import ItemCountCard from "./ItemCountCard";
import { useParams } from "react-router-dom";
import productJson from "../soyTuMarket.json";

import Spinner from 'react-bootstrap/Spinner'

const ItemCartContainer = () => {
  
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(()=>{
    fetchItems();
  },[categoryId])

  const fetchItems = (categoryId) => {
    if ( categoryId ) { 
      setTimeout(()=>{setItems(productJson.filter(it => it.categoryId===categoryId))},1000)
      setLoading(false);
      //setItems(productJson.filter(it => it.categoryId===categoryId));
    } else
    {
      setTimeout(()=>{setItems(productJson)},1000)
      setLoading(false);
    };
  };

 
  return (
    <>
      {loading && 
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner> }
          
      {!loading && 
      items.map((el) => (
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
