import { Link } from "react-router-dom"
import './item.css'


const Item = ({ prod })=>{
    return(
        <>
            <div className="itemContainer">
                <h2>{prod.name}</h2>
                <h3>${prod.price}</h3>
                <img className="imagen" src={prod.img} alt={prod.description} />
                <Link className="verDetalle" to={`/detail/${prod.id}`}>Ver Detalle</Link>
            </div>
        </>
    )
}

export default Item