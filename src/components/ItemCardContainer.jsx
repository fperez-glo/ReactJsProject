import { useState, useEffect } from "react";
//import ItemList from "./ItemList";
import ItemCountCard from "./ItemCountCard";
import { useParams } from "react-router-dom";
import productJson from "../soyTuMarket.json";
import { getFirestore } from "../api/fireBaseService";
import Spinner from "react-bootstrap/Spinner";

const ItemCardContainer = () => {
  const dbQuery = getFirestore();
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const styles = {
    cardContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "5px",
      width:"100%",
      //backgroundColor:"blue",
      height:"70rem",
    },
  };

  useEffect(() => {
    fetchItems(categoryId);
  }, [categoryId]);

  const fetchItems = async (categoryId) => {
    const productos = await dbQuery.collection('producto').get()
    
    console.log('productos:',productos);
    //console.log('productos:',productos.doc("asus1070ti").data());

    if (categoryId) {
      setTimeout(() => {
        setItems(productJson.filter((it) => it.categoryId === categoryId));
      }, 1000);
    } else {
      setTimeout(() => {
        setItems(productJson);
      }, 1000);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  return (
    <>
      <div style={styles.cardContainer}>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          items.map((el) => (
            <ItemCountCard
              srcImg={el.srcImg}
              prodTitle={el.prodTitle}
              key={el.prodId}
              prodId={el.prodId}
              stock={el.stock}
              price={el.price}
            />
          ))
        )}
      </div>
    </>
  );
};

export default ItemCardContainer;
