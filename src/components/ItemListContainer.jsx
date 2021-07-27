import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  
  const { categoryId } = useParams();
  
  
  console.log('categoryId:',categoryId)
  return (
    <>
      <ItemList/>
    </>
  );
};

export default ItemListContainer;
