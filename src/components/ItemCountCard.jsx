import React from 'react'

const ItemCountCard = (
    {
     cantidad=1,
     onSubmitAdd,
     onSubmitSubtract,
     onSubmitAddToCart,
    }
    ) => {
    
    //Styles propios del componente.
    const styles = ({
        card: {
            width: '17rem',
            
        },
        cardBody: {
            width: '17rem',
            //backgroundColor:'blue',
            borderRadius:5,
            //padding:5,
        },
        buttonCounterStyle: {
            color:'black',
            width: '15rem',
            display:'flex',
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginBottom:4,
            //backgroundColor:'red',
        },
        addCartButton: {
            width: '15rem',
            //backgroundColor:'green',
        },


    })
    
        
    // })
    return (
        <>
            <div class="card" style={styles.card}>
                <img src="https://www.fullh4rd.com.ar/img/productos/Pics_Prod/micro-intel-core-i7-8700k-0.jpg" class="card-img-top" alt="..."/>
                <div class="card-body" style={styles.cardBody}>
                    <div class="buttonCounter" style={styles.buttonCounterStyle }>
                        <button class="btn col-2" onClick={onSubmitSubtract}>-</button>
                        <text>{cantidad}</text>
                        <button class="btn col-2" onClick={onSubmitAdd}>+</button>
                    </div>
                    <a href="#" onClick={onSubmitAddToCart} style={styles.addCartButton} class="btn btn-outline-primary" >Añadir al carrito</a>
                </div>
            </div>
        </>
    )

    
    
}

export default ItemCountCard
