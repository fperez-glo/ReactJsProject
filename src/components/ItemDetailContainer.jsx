import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import productJson from "../soyTuMarket.json";

const ItemDetailContainer = () => {
  return (
    <>
      <ItemDetail 
       prodTitle={productJson[0].prodTitle}
       price={productJson[0].price}
       stock={productJson[0].stock}
       srcImg={productJson[0].srcImg}
       description={productJson[0].description}
      />
    </>
  );
};

export default ItemDetailContainer;
