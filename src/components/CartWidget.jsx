import React from 'react'
import logo from '../images/cartLogo.svg'

const CartWidget = () => {
    return (
        <div className="cartContainer">
            <a class="navbar-brand" href="#">
            <img src={logo} alt="" width="45" height="35" />
          </a>
        </div>
    )
}

export default CartWidget
