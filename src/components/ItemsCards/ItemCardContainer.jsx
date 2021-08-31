import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ItemCountCard from "./ItemCountCard";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../api/fireBaseService";
import Spinner from "react-bootstrap/Spinner";

const ItemCardContainer = () => {
  
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: theme.spacing(2),
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    const dbQuery = getFirestore();
    const fetchItems = async (categoryId) => {
      setLoading(true);
      const productos = await dbQuery.collection("producto").get();
  
      const fetchFilterItems = async(categoryId) =>{
        const filterItems = await dbQuery.collection("producto").where('categoryId','==',categoryId).get();
        setItems(filterItems.docs)
      };
  
      if (categoryId) {
        await fetchFilterItems(categoryId);
      } else {
        setItems(productos.docs);
      }
      setLoading(false);
    };

    fetchItems(categoryId);
  }, [categoryId]);

  

  return (
    <>
      <div className={classes.root}>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          ( items.length ?
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
        : <h1>No hay productos disponibles</h1>))}
      </div>
    </>
  );
};

export default ItemCardContainer;
