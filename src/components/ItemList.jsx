import { useState, useEffect } from "react";
import ItemCountCard from "./ItemCountCard";
import productJson from "../soyTuMarket.json";

const ItemList = () => {
  const [itemQuantity, setItemQuantity] = useState(1);

  const handleAdd = () => {
    console.log("Sumar item");
    setItemQuantity(itemQuantity + 1);
  };

  const handleSubtract = () => {
    console.log("Restar item");
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    }
  };

  const handleAddToCart = (prodId, itemQuantity) => {
    console.log("Se agrego el producto:", prodId);
    console.log("productJson:", productJson[0]);
    setItemQuantity(1);
  };

  return (
    <>
      {productJson.map((item) => (
        <ItemCountCard
          onSubmitAdd={() => handleAdd()}
          onSubmitSubtract={() => handleSubtract()}
          counter={itemQuantity}
          srcImg={item.srcImg}
          prodTitle={item.prodTitle}
          key={item.prodId}
          stock={item.stock}
          price={item.price}
          onSubmitAddToCart={() => handleAddToCart(item.prodId, itemQuantity)}
        />
      ))}
    </>
  );
};

export default ItemList;
