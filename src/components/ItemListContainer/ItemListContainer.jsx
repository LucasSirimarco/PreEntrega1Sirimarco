import './itemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect, useContext } from 'react'
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'
import { NotificationContext } from '../../Notification/Notification'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [cargando, setCargando] = useState(true)
    const { categoryId } = useParams()
    const { setNotification } = useContext(NotificationContext)

    useEffect( () => {
        setCargando(true)
        const collectionRef = categoryId 
                ? query(collection(db, 'products'), where('category', '==', categoryId))
                : collection(db, 'products')
        getDocs(collectionRef).then(response => {
            console.log(response)
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return { id: doc.id, ...data}
            })
            setProducts(productsAdapted)})
        .catch(error => {
            setNotification('error', 'No se pueden obtener los productos')})
        .finally(() => {
            setCargando(false)})  
    }, [categoryId])

    if(cargando && true) {
        return <h1 className='titulo'>Cargando productos...</h1>
    }

    return (
        <div>
            <h1 className='titulo'>{`${greeting} ${categoryId || ''}`}</h1>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer