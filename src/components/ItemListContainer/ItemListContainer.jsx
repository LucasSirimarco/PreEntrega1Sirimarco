import React from "react";
import './itemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../async-mocks'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom";


function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const [cargando, setCargando] = useState(true)
    const { categoryId } = useParams()


    useEffect(()=>{
        setCargando(true)
        getProducts(categoryId).then(productos =>{
            setProducts(productos)
        }).finally(()=>{
            setCargando(false)
        })
    },[categoryId])

    console.log(products);

    if (cargando) {
        return <h2 className="cargando">Cargando...</h2>
    }

    return (
        <div>
        <h1 className="titulo">Productos</h1>
        <ItemList products = {products}/>
        </div>
    )
}

export default ItemListContainer