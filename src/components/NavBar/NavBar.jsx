import { useState, useEffect } from 'react'
import './navBar.css';
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase'


const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const collectionRef = query(collection(db, 'categories'), orderBy('order'))

    getDocs(collectionRef).then(response => {
      console.log(response)

      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        return { id: doc.id, ...data}
      })

      setCategories(categoriesAdapted)
    })
  }, [])

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
                    <li className='listElement'><NavLink className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} to='/category/guitars'>Guitarras</NavLink></li>
                    <li className='listElement'><NavLink className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} to='/category/bass'>Bajos</NavLink></li>
                    <li className='listElement'><NavLink className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} to='/category/drums'>Baterias</NavLink></li>
                    <li className='listElement'><NavLink className={({isActive}) => isActive ? 'ActiveOption' : 'Option'} to='/category/keyboards'>Teclados</NavLink></li>
                </ul>
                <Link to='/cart'>
                    <CartWidget className="ico"/>
                </Link>
            </nav>
        </div>
    )    
}

export default NavBar