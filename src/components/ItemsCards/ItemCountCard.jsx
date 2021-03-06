import showAlert from "../Alerts/AlertHelper"
import es from "../../idiom/es"
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from '@material-ui/core/IconButton';
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import FavoriteIcon from '@material-ui/icons/FavoriteBorderRounded';
import ShareIcon from '@material-ui/icons/Share';
import { Link } from "react-router-dom";
import { useContextsCart } from "../../context/ContextsCart";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  actions: {
    justifyContent:"space-between"
  },
  favoritePaint:{
    backgroundColor:'red',
  }
});

const ItemCountCard = ({
  price,
  srcImg,
  prodTitle = "prodTitle",
  prodId,
  stock,
  description,
}) => {
  const classes = useStyles();

  const route = `/detail/${prodId}`;
  
  const { cartItems, setCartItems, setProd } = useContextsCart();

  const setSelectedProd = () => {
    setProd({
      prodId: prodId,
      price: price,
      prodTitle: prodTitle,
      srcImg: srcImg,
      quantity: 1,
      description: description,
    });
  };

  const addToCart = () => {
    setSelectedProd();
    const productSelected = {
      prodId: prodId,
      price: price,
      prodTitle: prodTitle,
      srcImg: srcImg,
      quantity: 1,
      description: description,
    };

    const findItem = cartItems.find((item) => item.prodId === productSelected.prodId);
    //Valido si el item que quiero ingresar al carro ya existe.
    if (!findItem) {
      setCartItems([...cartItems, productSelected]);
    } else {
      showAlert.info(es.productInCart)
      return;
    }
  };

  return (
    <>
      <Card className={classes.root}>
          <CardActionArea>
          <Link to={route}>
            <CardMedia
              component="img"
              alt={description}
              height="200"
              image={srcImg}
              title={description}
              onClick={() => setSelectedProd()}
            />
            </Link>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {prodTitle}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                ${price}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions className={classes.actions}>
            <IconButton color="primary">
              <FavoriteIcon/>
            </IconButton>
            <IconButton color="primary">
              <ShareIcon/>
            </IconButton>
            <IconButton  color="primary">
              <ShoppingCartIcon onClick ={() => addToCart()}/>
            </IconButton>
          </CardActions>
      </Card>
    </>
  );
};

export default ItemCountCard;
