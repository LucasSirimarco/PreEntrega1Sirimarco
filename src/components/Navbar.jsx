import React from 'react'
import './styles/navbar.css';
import CartWidget from './CartWidget'


function Navbar() {
    return (
        <div className='navContainer'>
            <nav className='nav'>
                <h3 className='title'>Pletorico</h3>
                <ul className='list'>
                    <li className='listElement'>Home</li>
                    <li className='listElement'>Instrumentos</li>
                    <li className='listElement'>Marcas</li>
                    <li className='listElement'>Modelos</li>
                    <li className='listElement'>Items</li>
                    <li className='listElement'>Accesorios</li>
                    <li className='listElement'>Contacto</li>
                </ul>
                <CartWidget/>
            </nav>
        </div>
    )    
}

export default Navbar