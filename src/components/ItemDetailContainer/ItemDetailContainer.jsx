import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
// import { getProductById } from "../../async-mocks"
import './itemdetailcontainer.css'
import ItemDetail from '../ItemDetail/ItemDetail'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase'

const ItemDetailContainer = ({ setCart })=>{

    const[product,setProduct] = useState({})
    const[cargando,setCargando] = useState(true)

    const { productId } = useParams()

    useEffect(()=>{
        const docRef = doc(db, 'products', productId)
        getDoc(docRef).then(doc => {
            const data = doc.data()

            const productAdapted = { id: doc.id, ...data} 

            setProduct(productAdapted)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setCargando(false)
        })
    },[productId])

    if (cargando) {
        return <h1 className='titulo'>Cargando...</h1>
    }

        return (
            <div className='ItemDetailContainer' >
            <ItemDetail  {...product} setCart={setCart}/>
        </div>
        )

}

export default ItemDetailContainer