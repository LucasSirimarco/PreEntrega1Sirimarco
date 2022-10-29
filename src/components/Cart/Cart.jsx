import './Cart.css'
import { useContext } from "react"
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <>
                <h1 className='titulo'>No hay items en el carrito</h1>
                <Link to='/' className='segirComprandoSn'>Seguir Comprando</Link>
            </>
        )
    }

    return (     
        <div>
            <h1 className='titulo'>Carrito</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <div className='divContainerTotal'>
                <h3 className='Total'>Total: <b className='redondeado'>${total}</b></h3>
                <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
                <Link to='/checkout' className='Checkout'>Checkout</Link>
                <Link to='/' className='segirComprando'>Seguir Comprando</Link>
            </div>
        </div>
    )
}

export default Cart