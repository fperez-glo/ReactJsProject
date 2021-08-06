import { useContextsCart } from "../context/ContextsCart";
import AccordionDetail from "./AccordionDetail";

const Cart = () => {
    const { cartItems, setCartItems } = useContextsCart();    

    console.log('Items en el carrito:',typeof(cartItems));
    return (
        <>
        {cartItems.map(item =>(
               <>
                <AccordionDetail
                key={item.prodId}
                price={item.price}
                quantity={item.quantity}
                prodId={item.prodId}
                srcImg={item.srcImg}
                prodTitle={item.prodTitle}
                />
                </>
            ))}
         
        </>
    )
}

export default Cart