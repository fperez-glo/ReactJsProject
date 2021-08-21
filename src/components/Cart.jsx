import { useEffect, useState } from "react";
import showAlert from "./Alerts/AlertHelper";
import es from "../idiom/es";
import { useContextsCart } from "../context/ContextsCart";
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CartCard from "./CartCard";
import { getFirestore } from "../api/fireBaseService";
import {
  CircleNotificationsTwoTone,
  PublishedWithChangesRounded,
} from "@material-ui/icons";
import Spinner from "react-bootstrap/Spinner";

const useStyles = makeStyles((theme) => ({
  textField: {
    "& > *": {
      margin: theme.spacing(3),
      width: "25ch",
    },
  },
  grid: {
    margin: "0px 5px",
  },
  totalBuyContainer: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const [buyer, setBuyer] = useState(initialState);
  const [enabledButton, setEnabledButton] = useState(true);

  const { cartItems, setCartItems, totalPrice, setTotalPrice } =
    useContextsCart();

  const classes = useStyles();

  useEffect(() => {
    setTotalPrice(
      cartItems.reduce((acum, valor) => acum + valor.quantity * valor.price, 0)
    );
  }, [cartItems]);

  useEffect(() => {
    if (buyer.name && buyer.email && buyer.phone){
      setEnabledButton(false);
    } else {
      setEnabledButton(true);
    }
  }, [buyer])

  const handleFormChange = (evtChange) => {
    setBuyer({ ...buyer, [evtChange.target.name]: evtChange.target.value });
  };

  const handlePurchase = async () => {
    
    setLoading(true);

    //Envio la informacion de la compra a la base de datos en fireStore.
    const db = getFirestore();
    await db
      .collection("purchaseOrders")
      .add({ buyer, cartItems, date: "hoy", totalPrice });

    clearData();
    showAlert.success(es.purchaseSucces);
    setLoading(false);
  
  };

  const clearData = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  return (
    <>
      {loading ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : cartItems.length ? (
        <>
          <Grid container spacing={2} className={classes.grid}>
            <h2>Carrito de compras</h2>
            {cartItems.map((item) => (
              <Grid item xs={12}>
                <CartCard
                  key={item.prodId}
                  price={item.price}
                  addedQuantity={item.quantity}
                  prodId={item.prodId}
                  srcImg={item.srcImg}
                  prodTitle={item.prodTitle}
                  description={item.description}
                />
              </Grid>
            ))}

            <Grid item xs={12} className={classes.totalBuyContainer}>
              <form
                className={classes.textField}
                autoComplete="off"
                onChange={handleFormChange}
                onSubmit={handlePurchase}
              >
                
                {/* {enabledButton ??   TODO: lo saco momentaneamente ya que no puedo logarar que aparezca el texto en la grilla.
                 <Typography variant="overline" display="block" gutterBottom>
                   Por favor ingrese los datos de contacto.
                 </Typography>
                } */}

                <TextField
                  id="outlined-basic"
                  label="Nombre"
                  type="text"
                  name="name"
                  size="small"
                  variant="outlined"
                  value={buyer.name}
                />
                <TextField
                  id="outlined-basic"
                  label="Telefono"
                  name="phone"
                  size="small"
                  type="number"
                  variant="outlined"
                  value={buyer.phone}
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  name="email"
                  size="small"
                  type="email"
                  variant="outlined"
                  value={buyer.email}
                />
                Total: ${totalPrice}
                <Button variant="contained" color="primary" type="submit" disabled={enabledButton}>
                  Comprar
                </Button>
              </form>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <h1>No hay elementos en el carrito.</h1>
        </>
      )}
    </>
  );
};

export default Cart;
const initialState = {
  name: "",
  phone: "",
  email: "",
};
