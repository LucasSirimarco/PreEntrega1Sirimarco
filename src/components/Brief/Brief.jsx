import "./Brief.css"
import { Link } from 'react-router-dom'




const Brief = ( { objOrder } )=> {
    console.log("El objeto "+objOrder)
    return (     
        <div>
            <h1 className='titulo'>Ticket</h1>
            <div className='divContainerTotal'>
            <Link to='/' className='segirComprandotk'>Seguir Comprando</Link>
            <button className='descargarTicket'>Descargar Ticket</button>
            </div>
        </div>
    )
}



export default Brief