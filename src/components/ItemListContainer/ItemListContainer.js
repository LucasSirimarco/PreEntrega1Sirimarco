import React from "react";
import './itemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts } from '../../async-mocks'






function ItemListContainer() {

    const [productos, setProductos] = useState({});

    useEffect(()=>{
        setProductos(getProducts)
        console.log(getProducts)
    },[])

    console.log(productos)


    return <h3 className="lista">LISTA DE PRODUCTOS</h3>
}

export default ItemListContainer