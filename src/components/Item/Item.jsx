import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, img, price , stock}) => {

    return (
        <div className="divContainer">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="Precio">
                    {`Precio: $${price}`}
                </p>
                <h4>Stock: {stock}</h4>
            </section>           
            <footer className='ItemFooter'>
                <Link to={`/detail/${id}`} className='Detalle'>Ver detalle</Link>
            </footer>
        </div>
    )
}

export default Item