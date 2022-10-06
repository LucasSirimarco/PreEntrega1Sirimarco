import React from "react";
import Item from "../Item/Item";
import './itemList.css'

const ItemList = ( {products} )=>{
    return (
        <div className="itemList">
            { products.map(prod => (
                    <Item key={prod.id} prod = {prod} />
                ))
            }
        </div>
    )
}

export default ItemList