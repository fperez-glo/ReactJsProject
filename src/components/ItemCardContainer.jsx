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
    const productos = await dbQuery.collection("producto").get();

    console.log("productos:", productos);
    //console.log('productos:',productos.doc("asus1070ti").data());

    if (categoryId) {
      setTimeout(() => {
        setItems(productJson.filter((it) => it.categoryId === categoryId));
      }, 200);
    } else {
      setTimeout(() => {
        setItems(productJson);
      }, 200);
    }
    setTimeout(() => {
      setLoading(false);
    }, 200);
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
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <ItemCountCard
                  srcImg={el.srcImg}
                  prodTitle={el.prodTitle}
                  key={el.prodId}
                  prodId={el.prodId}
                  stock={el.stock}
                  price={el.price}
                  description={el.description}
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
