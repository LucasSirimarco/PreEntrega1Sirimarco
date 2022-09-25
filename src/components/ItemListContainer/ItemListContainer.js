import React from "react";
import './itemListContainer.css'

function ItemListContainer({ productos }) {
    return <h3 className="lista">{productos}</h3>
}

export default ItemListContainer