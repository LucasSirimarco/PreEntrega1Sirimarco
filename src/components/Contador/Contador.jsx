import React, { useState } from "react";
import './contador.css'

const Contador = ({stock = 0, inicio = 1, agregarCantidad})=> {
    const [valor, setValor] = useState(inicio)
 
    const sumar = () => {
        if(valor < stock) {
            setValor(valor+1)
        }
    }
 
    const restar = () => {
        if(valor > 1) {
            setValor(valor - 1)
        }     
    }

    return(
        
            <div className="countContainer">
                <div className="countItem">
                    <button className="buttons textoBoton" onClick={ sumar }>+</button>
                    <h3 className="buttons valor">{valor}</h3>
                    <button className="buttons textoBoton" onClick={ restar }>-</button>
                </div>
                <div>
                    <button className="agregar" onClick={() => agregarCantidad(valor) }>Agregar al carrito</button>
                </div>
            </div>

    )
    
}

export default Contador;