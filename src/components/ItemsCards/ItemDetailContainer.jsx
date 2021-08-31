import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../../api/fireBaseService";
import Spinner from "react-bootstrap/Spinner";

const ItemDetailContainer = () => {
  
  const [ items, setItems ] = useState([]);
  const [loading, setLoading] = useState(true);
  const { prodId } = useParams();

  useEffect(()=>{
    const dbQuery = getFirestore();
    if ( prodId ) {
      const fetchFilterItems = async (prodId) =>{
        const filterItems = await dbQuery.collection("producto").doc(prodId).get();
        setItems(filterItems.data());
        setLoading(false);
      }
      
      fetchFilterItems(prodId);
    } else
    {
      setItems(items);
    }
    
  },[prodId])



  return (
    <>
      {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
      <ItemDetail 
        prodTitle={items.prodTitle}
        price={items.price}
        stock={items.stock}
        srcImg={items.srcImg}
        description={items.description}
      />
        )}
    </>
  );
};

export default ItemDetailContainer;
