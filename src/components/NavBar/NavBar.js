import React from 'react'
import './navBar.css';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className='navContainer'>
            <nav className='nav'>
                <Link to='/'>
                <div className='title'>
                  <h3 className='titlePri'>ArpeggioShop</h3> 
                  <h5 className='titleSeg'>Instrumentos Musicales</h5>
                </div>
                </Link>
                <ul className='list'>
                    <li className='listElement'><Link to='/category/guitars'>Guitarras</Link></li>
                    <li className='listElement'><Link to='/category/bass'>Bajos</Link></li>
                    <li className='listElement'><Link to='/category/drums'>Baterias</Link></li>
                    <li className='listElement'><Link to='/category/keyboards'>Teclados</Link></li>
                </ul>
                <Link to='/cart'>
                    <CartWidget className="ico"/>
                </Link>
            </nav>
        </div>
    )    
}

export default Navbar