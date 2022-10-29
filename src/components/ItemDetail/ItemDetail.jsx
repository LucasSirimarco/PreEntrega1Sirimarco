import './ItemDetail.css'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Contador from '../Contador/Contador'
import { CartContext } from '../../context/CartContext'
import { NotificationContext } from '../../Notification/Notification'

const ItemDetail = ({ id, name, img, description, price, stock })=>{

    const [cantidadAAgregar, setCantidadAAgregar] = useState(0)
    const { agregarItem, getProductQuantity } = useContext(CartContext)
    const { setNotification } = useContext(NotificationContext)

    const manejarAgrego = (quantity) => {
        setCantidadAAgregar(quantity)
        const productoAAgregar = {
            id, name, price, quantity
        }
        agregarItem(productoAAgregar)
        setNotification('success', `Se agrego correctamente ${quantity} ${name}`)
    }
    const productAddedQuantity = getProductQuantity(id)
    console.log(productAddedQuantity)

    return(
        <>
            <div className="itemContainer">
                <h1>{name}</h1>
                <h2>{`Precio:$${price}`}</h2>
                <h3>{`Stock:${stock}`}</h3>
                <p>{`Descripcion:${description}`}</p>
                <img className="imagen" src={img} alt={name} />
                <div className='contador'>
                {
                    cantidadAAgregar === 0 ? (
                        <Contador agregarCantidad={manejarAgrego} stock={stock} inicio={productAddedQuantity} />
                    ) : (
                        <Link className='Finalizacion' to='/cart'>Ir al Carrito</Link>
                    )
                }
                
            </div>
            </div>
        </>
    )
}

export default ItemDetail