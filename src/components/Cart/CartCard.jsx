import { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { useContextsCart } from "../../context/ContextsCart";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import Typography from "@material-ui/core/Typography";
import ItemCounter from "../ItemsCards/ItemCounter";

const useStyles = makeStyles({
  root: {
    //minWidth: 275,
    //minHeight:50,}
    //backgroundColor:'red',
    display: "flex",
    flexDirection: "row",
  },
  content: {
    display: "flex",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  pos: {
    marginBottom: 12,
  },
});

const CartCard = ({
  prodId,
  price,
  addedQuantity = 1,
  prodTitle,
  srcImg,
  description,
}) => {
  const { cartItems, setCartItems } = useContextsCart();
  const classes = useStyles();
  const [pricePerProduct, setPricePerProduct] = useState(1);
  const bull = <span className={classes.bullet}>•</span>;

  useEffect(() => {
    initialLoad();
  }, [addedQuantity]);

  const initialLoad = () => {
    setPricePerProduct(addedQuantity * price);
    //setTotalPrice(cartItems.reduce(el => el.price*el.addedQuantity));
  };

  const deleteCartItem = (id) => {
    const index = cartItems.findIndex((el) => el.prodId === id);

    if (index > -1) {
      cartItems.splice(index, 1);
      const newCartItems = cartItems.filter(
        (item) => item.prodId !== cartItems.prodId
      );
      setCartItems(newCartItems);
    }
  };

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent className={classes.content}>
          <CardMedia
            component="img"
            alt={prodTitle}
            height="100"
            image={srcImg}
            title={prodTitle}
          />
          <Typography
            className={classes.title}
            //color="textSecondary"
            gutterBottom
          >
            {prodTitle}
          </Typography>
          <Typography variant="h5" component="h2" color="textSecondary">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <ItemCounter
            enableAddCartButton={false}
            addedQuantity={addedQuantity}
            prodId={prodId}
          />
        </CardActions>
        <Typography
          className={classes.title}
          //color="textSecondary"
          gutterBottom
        >
          ${pricePerProduct}
        </Typography>
        <IconButton color="primary">
            <DeleteForeverOutlinedIcon
              size="small"
              onClick={() => deleteCartItem(prodId)}
            />
          </IconButton>
      </Card>
    </>
  );
};

export default CartCard;
