import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
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
      width: "100%",
      //backgroundColor:"blue",
      height: "70rem",
    },
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    fetchItems(categoryId);
  }, [categoryId]);

  const fetchItems = async (categoryId) => {
    setLoading(true);
    const productos = await dbQuery.collection("producto").get();

    const fetchFilterItems = async(categoryId) =>{
      const filterItems = await dbQuery.collection("producto").where('categoryId','==',categoryId).get();
      setItems(filterItems.docs)
    }

    if (categoryId) {
      await fetchFilterItems(categoryId);
    } else {
      setItems(productos.docs);
    }
    setLoading(false);
  };

  return (
    <>
      <div className={classes.root}>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <Grid container spacing={3}>
            {items.map((el) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={el.id}>
                <ItemCountCard
                  srcImg={el.data().srcImg}
                  prodTitle={el.data().prodTitle}
                  prodId={el.id}
                  stock={el.data().stock}
                  price={el.data().price}
                  description={el.data().description}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </>
  );
};

export default ItemCardContainer;
