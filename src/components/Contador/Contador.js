import React, { useState } from "react";
import './contador.css'


function Contador() {

    const [valor, setCount] = useState(0);

    const sumar = () => {
        if (valor < 10) setCount(valor + 1)
    };

    const restar = () => {
        if (valor > 0) setCount(valor - 1);
    };

    const reniciar = () => setCount(0);

    return(
        
            <div className="countContainer">
                <h3>{valor}</h3>
                <button onClick={ sumar }>Sumar</button>
                <button onClick={ restar }>Restar</button>
                <button onClick={ reniciar }>Reniciar</button>
            </div>
        
    )
    
};

export default Contador;