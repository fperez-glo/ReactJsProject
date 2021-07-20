import { useState, useEffect } from 'react';
import ItemCountCard from './ItemCountCard';


const ItemListContainer = ({nombre='Facundo'}) => {
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

  const handleAddToCart = () => {
    console.log("Producto agregado al carrito.");
    setItemQuantity(1);
  };



    return (
        <>
         <ItemCountCard
          onSubmitAdd={() => handleAdd()}
          onSubmitSubtract={() => handleSubtract()}
          cantidad={itemQuantity}
          onSubmitAddToCart={() => handleAddToCart()}
         />
        </>    
    )
}




export default ItemListContainer
