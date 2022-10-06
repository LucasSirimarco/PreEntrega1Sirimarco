import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProduct } from "../../async-mocks"
import './itemdetailcontainer.css'



const ItemDetailContainer = ()=>{

    const[product,setProduct] = useState({})
    const[cargando,setCargando] = useState(true)

    const { productId } = useParams()


    useEffect(()=>{
        getProduct(productId).then(product => {
            setProduct(product)
        }).finally(()=>{
            setCargando(false)
        })
    },[productId])

    console.log(product)

    if (cargando) {
        return <h1>Cargando...</h1>
    }

        return (
            <div>
                <h1>Detalle del Producto</h1>
                <div className="detalleConteiner">
                    <h2 className="nombreProduct">{product.name}</h2>
                    <h2 className="categoryProduct">{product.category}</h2>
                    <h2 className="precioProduct">{product.price}</h2>
                    <img className="imgProduct" src={product.img} alt={product.description} />
                </div>
            </div>
        )

}

export default ItemDetailContainer