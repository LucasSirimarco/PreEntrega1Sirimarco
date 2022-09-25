import React from "react";
import { FaShoppingCart } from 'react-icons/fa'
import './cartWidget.css'


function CartWidget(){
    return(
        <div className="cartContainer">
            <p className="cartNumber">5</p>
            <FaShoppingCart className="cartIcon"/>
        </div>
    )
}

export default CartWidget