import React from 'react'
import './navBar.css';
import CartWidget from '../CartWidget/CartWidget'


function Navbar() {
    return (
        <div className='navContainer'>
            <nav className='nav'>
                <div className='title'>
                  <h3 className='titlePri'>ArpeggioShop</h3> 
                  <h5 className='titleSeg'>Instrumentos Musicales</h5>
                </div>
                <ul className='list'>
                    <li className='listElement'>Instrumentos</li>
                    <li className='listElement'>Marcas</li>
                    <li className='listElement'>Modelos</li>
                    <li className='listElement'>Accesorios</li>
                    <li className='listElement'>Contacto</li>
                </ul>
                <CartWidget className="ico"/>
            </nav>
        </div>
    )    
}

export default Navbar