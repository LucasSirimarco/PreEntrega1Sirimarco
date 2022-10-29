import { FaShoppingCart } from 'react-icons/fa'
import './cartWidget.css'
import { Link } from 'react-router-dom'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {

    const { getTotalQuantity } = useContext(CartContext)

    const totalQuantity = getTotalQuantity()

    return(
        <Link to="/cart" className="cartContainer">
            <p className="cartNumber">{totalQuantity}</p>
            <FaShoppingCart className="cartIcon"/>
        </Link>
    )
}

export default CartWidget