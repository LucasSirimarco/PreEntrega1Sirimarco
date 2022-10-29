import './CartItem.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartItem = ({ id, name, price, quantity}) => {
    const { removeItem } = useContext(CartContext)

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div className='divContainerCart'>
            <header className="HeaderCartItem">
                <h2 className="ItemHeaderCartItem">
                    {`${name}`}
                </h2>
            </header>
            <section className='Cantidad'>
                <p className="InfoCartItem">
                    {`Cantidad: ${quantity}`}
                </p>
            </section> 
            <section className='ContainerItemCartItem'>    
                <p className="InfoCartItem">
                    {`Precio/Unidad: $${price}`}
                </p>
            </section>           
            <footer className='ItemFooterCartItem'>
                 <p className="InfoCartItem">
                     {`Subtotal: $${price * quantity}`}
                 </p>
            </footer>
                 <footer className='ItemOut'>
                     <button className='ButtonCartItem' onClick={() => handleRemove(id)}>✘</button>
            </footer>
        </div>
    )
}

export default CartItem